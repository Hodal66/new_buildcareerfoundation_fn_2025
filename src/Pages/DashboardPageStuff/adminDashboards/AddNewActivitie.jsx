/* eslint-disable no-extra-semi */
/* eslint-disable react/prop-types */

"use client"

import axios from "axios"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useMutation } from "@apollo/client"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { ADD_NEW_ACTIVITIES_POST } from "../../../hooks/graphql/mutation/ActivitieMutation"
import { client } from "../../../main"
import toast from "react-hot-toast"
import { Loader2, AlertCircle, CheckCircle } from "lucide-react"

const AddNewActivity = ( ) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState([])
  const [currentStep, setCurrentStep] = useState("idle") // idle, uploading, saving, success, error

  // Use the mutation with better error handling
  const [saveThePostToMongoDb, { error: mutationError }] = useMutation(ADD_NEW_ACTIVITIES_POST, {
    onError: (error) => {
      console.error("GraphQL mutation error:", error)
      // Error is handled in the submit function
    },
  })

  const packFiles = (files) => {
    const formData = new FormData()
    if (files && files.length) {
      ;[...files].forEach((file) => formData.append("file_name", file))
    }
    return formData
  }

  const saveImageToCloudinary = async (formData) => {
    try {
       const response = await axios.post(
         "https://build-career-foundation-image-cloudinary.onrender.com/multiple_images-upload",
         formData,
         {
           headers: {
             "Content-Type": "multipart/form-data",
           },
           // const response = await axios.post("http://localhost:2000/multiple_images-upload", formData, {
           //   headers: {
           //     "Content-Type": "multipart/form-data",
           //   },
         }
       );
      return response.data
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error)
      throw new Error(error.response?.data?.message || "Failed to upload images to Cloudinary")
    }
  }

  const validationSchema = Yup.object({
    postTitle: Yup.string().required("Title is required"),
    contentTitle: Yup.string().required("Content is required"),
    postCategory: Yup.string().required("Category is required"),
    youtube_Url: Yup.string().url("Enter a valid YouTube URL").required("YouTube URL is required"),
    arrayOfImages: Yup.mixed().required("At least one image is required"),
  })

  const formik = useFormik({
    initialValues: {
      postTitle: "",
      contentTitle: "",
      contentSections: [{ sectionTitle: "", paragraph1: "", paragraph2: "" }],
      postCategory: "",
      arrayOfImages: "",
      youtube_Url: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true)
      setCurrentStep("uploading")

      // Create a toast ID that we'll update throughout the process
      const toastId = toast.loading(
        <div className="flex items-center space-x-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Uploading images...</span>
        </div>,
      )

      try {
        // Step 1: Upload images to Cloudinary
        const formData = packFiles(values.arrayOfImages)

        // Update toast to show we're uploading images
        toast.loading(
          <div className="flex items-center space-x-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Uploading images...</span>
          </div>,
          { id: toastId },
        )

        const uploadedImages = await saveImageToCloudinary(formData)

        if (!uploadedImages || uploadedImages.length === 0) {
          throw new Error("No images were uploaded. Please try again.")
        }

        // Step 2: Prepare data for database
        setCurrentStep("saving")

        // Update toast to show we're saving to database
        toast.loading(
          <div className="flex items-center space-x-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Saving to database...</span>
          </div>,
          { id: toastId },
        )

        const contentSections = values.contentSections.map((sec, index) => ({
          sectionTitle: sec.sectionTitle || `Section ${index + 1}`,
          paragraph1: sec.paragraph1 || "",
          paragraph2: sec.paragraph2 || "",
        }))

        // Create an array of image objects from all uploaded images
        const imageUrls = uploadedImages.map((img) => ({
          url: img.url || "",
          filename: img.filename || "",
        }))

        const payload = {
          title: values.postTitle,
          content: values.contentTitle,
          contentSections,
          category: values.postCategory,
          // Store all images, not just the first one
          image_urls: imageUrls,
          // Keep the first image as the main image for backward compatibility
          image_url: {
            url: uploadedImages[0]?.url || "",
            filename: uploadedImages[0]?.filename || "",
          },
          youtube_video_url: values.youtube_Url,
          user_id: "64d77225be847b4953a2d2e6",
        }

        // Step 3: Save to MongoDB using GraphQL mutation
        const result = await saveThePostToMongoDb({
          variables: { input: payload },
          // Add error policy to handle errors in the response
          errorPolicy: "all",
        })

        // Check if there are errors in the response
        if (result.errors) {
          throw new Error(result.errors[0]?.message || "Failed to save post to database")
        }

        // Step 4: Refetch queries to update the UI
        await client.refetchQueries({
          include: [ADD_NEW_ACTIVITIES_POST],
          // Add error handling for refetch
          onError: (error) => {
            console.error("Error refetching queries:", error)
            // We don't throw here as the save was successful
          },
        })

        // Step 5: Success - update UI and redirect
        setCurrentStep("success")

        // Show success toast with checkmark icon
        toast.success(
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4" />
            <span>Post saved successfully!</span>
          </div>,
          { id: toastId, duration: 4000 },
        )

        // Update parent component state if needed
        // setData({ ...values, arrayOfImages: uploadedImages })

        // Reset form and state
        resetForm()
        setImagePreview([])

        // Show a final toast before redirecting
        toast.success("Redirecting to overview page...", {
          duration: 2000,
          icon: "🔄",
        })

        // Redirect after a short delay to allow the user to see the success message
        setTimeout(() => {
          navigate("/admin/overview");
          console.log("What is on This page redirection : /admin/overview");
        }, 1500)
      } catch (error) {
        // Handle errors from any step
        setCurrentStep("error")
        console.error("Error in form submission:", error)

        // Determine the error source and provide a specific message
        let errorMessage = "Failed to save post. Please try again."

        if (error.message.includes("Cloudinary")) {
          errorMessage = "Failed to upload images. Please check your connection and try again."
        } else if (error.message.includes("database")) {
          errorMessage = "Failed to save to database. Please try again later."
        } else if (mutationError) {
          errorMessage = `Database error: ${mutationError.message}`
        }

        // Show error toast with alert icon
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

  const handleAddSection = () => {
    const newSections = [...formik.values.contentSections, { sectionTitle: "", paragraph1: "", paragraph2: "" }]
    formik.setFieldValue("contentSections", newSections)
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

  // Get loading message based on current step
  const getLoadingMessage = () => {
    switch (currentStep) {
      case "uploading":
        return "Uploading images, please wait..."
      case "saving":
        return "Saving post to database, please wait..."
      default:
        return "Processing, please wait..."
    }
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto px-6 py-10 bg-white shadow-md rounded-lg">
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <Loader2 className="h-10 w-10 text-blue-600 animate-spin mb-4" />
            <p className="text-gray-700 font-medium">{getLoadingMessage()}</p>
            {currentStep === "uploading" && (
              <p className="text-gray-500 text-sm mt-2">This may take a moment depending on image sizes</p>
            )}
          </div>
        </div>
      )}

      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Create a New Activity Post</h1>

      <form
        onSubmit={formik.handleSubmit}
        encType="multipart/form-data"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Post Title</label>
          <input
            type="text"
            name="postTitle"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.postTitle}
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          {formik.touched.postTitle && formik.errors.postTitle && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.postTitle}</div>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Content Title</label>
          <textarea
            name="contentTitle"
            rows="3"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contentTitle}
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          {formik.touched.contentTitle && formik.errors.contentTitle && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.contentTitle}</div>
          )}
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
                className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <textarea
                name={`contentSections[${index}].paragraph1`}
                rows="2"
                placeholder="Paragraph 1"
                value={section.paragraph1}
                onChange={formik.handleChange}
                className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <textarea
                name={`contentSections[${index}].paragraph2`}
                rows="2"
                placeholder="Paragraph 2 (optional)"
                value={section.paragraph2}
                onChange={formik.handleChange}
                className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
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
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Add New Section
          </button>
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="postCategory"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.postCategory}
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          >
            <option value="">Select Category</option>
            <option value="Meetings">Meetings</option>
            <option value="Events">Events</option>
            <option value="Stories">Stories</option>
            <option value="Celebrations">Celebrations</option>
          </select>
          {formik.touched.postCategory && formik.errors.postCategory && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.postCategory}</div>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">YouTube Video URL</label>
          <input
            type="url"
            name="youtube_Url"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.youtube_Url}
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          {formik.touched.youtube_Url && formik.errors.youtube_Url && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.youtube_Url}</div>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Upload Images</label>
          <input
            type="file"
            name="arrayOfImages"
            multiple
            onChange={handleImageChange}
            onBlur={formik.handleBlur}
            className="w-full border px-4 py-2 rounded"
          />
          {formik.touched.arrayOfImages && formik.errors.arrayOfImages && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.arrayOfImages}</div>
          )}

          {/* Image Preview Section */}
          {imagePreview.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Image Previews ({imagePreview.length}):</h4>
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
                Saving...
              </span>
            ) : (
              "Save Post"
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddNewActivity
