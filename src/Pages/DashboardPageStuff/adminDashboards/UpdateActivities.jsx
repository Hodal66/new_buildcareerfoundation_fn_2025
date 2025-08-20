/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

// export default UpdateActivities;


"use client"

/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import axios from "axios"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useMutation, useQuery } from "@apollo/client"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { UPDATE_ACTIVITIES } from "../../../hooks/graphql/mutation/ActivitieMutation"
import { GET_ONE_POST } from "../../../hooks/graphql/queries/ActivitieQueries"
import { client } from "../../../main"
import { Loader2, AlertCircle, CheckCircle } from "lucide-react"

const UpdateActivities = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [updateActivity] = useMutation(UPDATE_ACTIVITIES)
  const [imagePreview, setImagePreview] = useState([])
  const [currentStep, setCurrentStep] = useState("idle") // idle, uploading, saving, success, error

  const { data, loading, error } = useQuery(GET_ONE_POST, {
    variables: { getOnePostId: id },
  })

  console.log("data on the Front-end is: ", data)
  const formik = useFormik({
    initialValues: {
      postTitle: "",
      contentTitle: "",
      contentSections: [{ sectionTitle: "", paragraph1: "", paragraph2: "" }],
      postCategory: "",
      arrayOfImages: [],
      youtube_Url: "",
    },
    validationSchema: Yup.object({
      postTitle: Yup.string().required("Title is required"),
      contentTitle: Yup.string().required("Content is required"),
      postCategory: Yup.string().required("Category is required"),
      youtube_Url: Yup.string().url("Enter a valid YouTube URL"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true)
      const toastId = toast.loading(
        <div className="flex items-center space-x-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Updating post, please wait...</span>
        </div>,
      )

      try {
        let imageUrls = []

        // Only upload new images if files were selected
        if (values.arrayOfImages && values.arrayOfImages.length > 0) {
          const formData = new FormData()
          ;[...values.arrayOfImages].forEach((file) => formData.append("file_name", file))

          const response = await axios.post("http://localhost:2000/multiple_images-upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })

          imageUrls = response.data.map((img) => ({
            url: img.url || "",
            filename: img.filename || "",
          }))
        } else {
          // Keep existing images if no new ones were uploaded
          imageUrls = data?.getOnePost?.image_urls || []
        }

        const contentSections = values.contentSections.map((sec, index) => ({
          sectionTitle: sec.sectionTitle || `Section ${index + 1}`,
          paragraph1: sec.paragraph1 || "",
          paragraph2: sec.paragraph2 || "",
        }))

        const payload = {
          post_id: id,
          title: values.postTitle,
          content: values.contentTitle,
          contentSections: contentSections,
          category: values.postCategory,
          // Use the correct field name that matches your GraphQL schema
          image_urls: imageUrls,
          // Keep the first image as the main image for backward compatibility
          image_url: {
            url: imageUrls[0]?.url || "",
            filename: imageUrls[0]?.filename || "",
          },
          youtube_video_url: values.youtube_Url,
        }

        const result = await updateActivity({
          variables: { input: payload },
          errorPolicy: "all",
        })

        // Check if there are errors in the response
        if (result.errors) {
          throw new Error(result.errors[0]?.message || "Failed to update post")
        }

        await client.refetchQueries({
          include: [GET_ONE_POST],
          onError: (error) => {
            console.error("Error refetching queries:", error)
          },
        })

        toast.success(
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4" />
            <span>Post updated successfully!</span>
          </div>,
          { id: toastId, duration: 4000 },
        )

        // Show a final toast before redirecting
        toast.success("Redirecting to activities page...", {
          duration: 4000,
          icon: "🔄",
        })

        // Redirect after a short delay
        setTimeout(() => {
          navigate("/admin/overview")
        }, 4500)
      } catch (err) {
        console.error("Update error:", err)

        // Determine the error source and provide a specific message
        let errorMessage = "Failed to update post. Please try again."

        if (err.message.includes("Cloudinary")) {
          errorMessage = "Failed to upload images. Please check your connection and try again."
        } else if (err.message.includes("database")) {
          errorMessage = "Failed to save to database. Please try again later."
        }

        toast.error(
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-4 w-4" />
            <span>{errorMessage}</span>
          </div>,
          { id: toastId, duration: 5000 },
        )
      } finally {
        setIsLoading(false)
      }
    },
  })

  useEffect(() => {
    if (data?.getOnePost) {
      const post = data.getOnePost
      formik.setValues({
        postTitle: post.title || "",
        contentTitle: post.content || "",
        contentSections:
          post.contentSections && post.contentSections.length > 0
            ? post.contentSections
            : [{ sectionTitle: "", paragraph1: "", paragraph2: "" }],
        postCategory: post.category || "",
        youtube_Url: post.youtube_video_url || "",
        arrayOfImages: [], // This will be empty as we can't set File objects from URLs
      })

      // Log the loaded data for debugging
      console.log("Loaded post data:", post)
    }
  }, [data, formik.setValues])

  const handleAddSection = () => {
    const updatedSections = [...formik.values.contentSections, { sectionTitle: "", paragraph1: "", paragraph2: "" }]
    formik.setFieldValue("contentSections", updatedSections)
  }

  const handleRemoveSection = (index) => {
    const updatedSections = formik.values.contentSections.filter((_, i) => i !== index)
    formik.setFieldValue("contentSections", updatedSections)
  }

  const handleImageChange = (e) => {
    const files = e.currentTarget.files
    formik.setFieldValue("arrayOfImages", files)

    // Create image previews
    if (files) {
      const previewUrls = []
      for (let i = 0; i < files.length; i++) {
        previewUrls.push(URL.createObjectURL(files[i]))
      }
      setImagePreview(previewUrls)
    }
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error loading activity.</p>

  return (
    <div className="relative w-full max-w-5xl mx-auto px-6 py-10 bg-white shadow-md rounded-lg">
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <Loader2 className="h-10 w-10 text-blue-600 animate-spin mb-4" />
            <p className="text-gray-700 font-medium">
              {currentStep === "uploading" ? "Uploading images..." : "Updating post..."}
            </p>
            {currentStep === "uploading" && (
              <p className="text-gray-500 text-sm mt-2">This may take a moment depending on image sizes</p>
            )}
          </div>
        </div>
      )}

      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Update Activitie Post</h1>

      <form
        onSubmit={formik.handleSubmit}
        encType="multipart/form-data"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="md:col-span-2">
          <label className="block mb-1">Post Title</label>
          <input
            type="text"
            name="postTitle"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.postTitle}
            className="w-full border px-4 py-2 rounded"
          />
          {formik.touched.postTitle && formik.errors.postTitle && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.postTitle}</div>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1">Content Title</label>
          <textarea
            name="contentTitle"
            rows="3"
            onChange={formik.handleChange}
            value={formik.values.contentTitle}
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-2">Content Sections</h3>
          {formik.values.contentSections.map((section, index) => (
            <div key={index} className="border border-gray-300 rounded p-4 mb-4 space-y-4">
              <input
                type="text"
                name={`contentSections[${index}].sectionTitle`}
                placeholder={`Section Title ${index + 1}`}
                value={section.sectionTitle}
                onChange={formik.handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              <textarea
                name={`contentSections[${index}].paragraph1`}
                rows="2"
                placeholder="Paragraph 1"
                value={section.paragraph1}
                onChange={formik.handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              <textarea
                name={`contentSections[${index}].paragraph2`}
                rows="2"
                placeholder="Paragraph 2 (optional)"
                value={section.paragraph2}
                onChange={formik.handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => handleRemoveSection(index)}
                  className="text-red-500 hover:underline"
                >
                  Remove Section
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddSection}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Add New Section
          </button>
        </div>

        <div>
          <label className="block mb-1">Category</label>
          <select
            name="postCategory"
            onChange={formik.handleChange}
            value={formik.values.postCategory}
            className="w-full border px-4 py-2 rounded"
          >
            <option value="">Select Category</option>
            <option value="Meetings">Meetings</option>
            <option value="Events">Events</option>
            <option value="Stories">Stories</option>
            <option value="Celebrations">Celebrations</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">YouTube Video URL</label>
          <input
            type="url"
            name="youtube_Url"
            onChange={formik.handleChange}
            value={formik.values.youtube_Url}
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Upload Images</label>
          <input
            type="file"
            name="arrayOfImages"
            multiple
            onChange={handleImageChange}
            onBlur={formik.handleBlur}
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />

          {/* Image Preview Section */}
          {imagePreview.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">New Image Previews ({imagePreview.length}):</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {imagePreview.map((src, index) => (
                  <div key={index} className="relative">
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`Preview ${index + 1}`}
                      className="h-24 w-full object-cover rounded border"
                    />
                    <span className="absolute top-0 right-0 bg-gray-800 text-white text-xs px-1 rounded-bl">
                      {index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Existing Images Preview */}
          {data?.getOnePost?.image_urls && data.getOnePost.image_urls.length > 0 && imagePreview.length === 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Current Images ({data.getOnePost.image_urls.length}):</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {data.getOnePost.image_urls.map((img, index) => (
                  <div key={index} className="relative">
                    <img
                      src={img.url || "/placeholder.svg"}
                      alt={`Image ${index + 1}`}
                      className="h-24 w-full object-cover rounded border"
                    />
                    <span className="absolute top-0 right-0 bg-gray-800 text-white text-xs px-1 rounded-bl">
                      {index + 1}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Upload new images to replace these, or leave empty to keep current images.
              </p>
            </div>
          )}
        </div>

        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className={`px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                Updating...
              </span>
            ) : (
              "Update Post"
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdateActivities
