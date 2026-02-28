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
import { Loader2, AlertCircle, CheckCircle, Plus, Trash2, Youtube, Image as ImageIcon, MapPin, Type, FileText } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const AddNewActivity = ( ) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState([])
  const [currentStep, setCurrentStep] = useState("idle") // idle, uploading, saving, success, error

  // Use the mutation with better error handling
  const [saveThePostToMongoDb, { error: mutationError }] = useMutation(ADD_NEW_ACTIVITIES_POST, {
    onError: (error) => {
      console.error("GraphQL mutation error:", error)
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

      const toastId = toast.loading(
        <div className="flex items-center space-x-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Uploading images...</span>
        </div>,
      )

      try {
        const formData = packFiles(values.arrayOfImages)

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

        setCurrentStep("saving")

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

        const imageUrls = uploadedImages.map((img) => ({
          url: img.url || "",
          filename: img.filename || "",
        }))

        const payload = {
          title: values.postTitle,
          content: values.contentTitle,
          contentSections,
          category: values.postCategory,
          image_urls: imageUrls,
          image_url: {
            url: uploadedImages[0]?.url || "",
            filename: uploadedImages[0]?.filename || "",
          },
          youtube_video_url: values.youtube_Url,
          user_id: "64d77225be847b4953a2d2e6",
        }

        const result = await saveThePostToMongoDb({
          variables: { input: payload },
          errorPolicy: "all",
        })

        if (result.errors) {
          throw new Error(result.errors[0]?.message || "Failed to save post to database")
        }

        await client.refetchQueries({
          include: [ADD_NEW_ACTIVITIES_POST],
          onError: (error) => {
            console.error("Error refetching queries:", error)
          },
        })

        setCurrentStep("success")

        toast.success(
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4" />
            <span>Post saved successfully!</span>
          </div>,
          { id: toastId, duration: 4000 },
        )

        resetForm()
        setImagePreview([])

        toast.success("Redirecting to overview page...", {
          duration: 2000,
          icon: "🔄",
        })

        setTimeout(() => {
          navigate("/admin/activities");
        }, 1500)
      } catch (error) {
        setCurrentStep("error")
        console.error("Error in form submission:", error)

        let errorMessage = "Failed to save post. Please try again."

        if (error.message.includes("Cloudinary")) {
          errorMessage = "Failed to upload images. Please check your connection and try again."
        } else if (error.message.includes("database")) {
          errorMessage = "Failed to save to database. Please try again later."
        } else if (mutationError) {
          errorMessage = `Database error: ${mutationError.message}`
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

    if (files) {
      const previewUrls = []
      for (let i = 0; i < files.length; i++) {
        previewUrls.push(URL.createObjectURL(files[i]))
      }
      setImagePreview(previewUrls)
    }
  }

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
    <div className="p-8 lg:p-12 min-h-screen bg-transparent">
      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-[32px] shadow-2xl flex flex-col items-center max-w-sm w-full text-center border border-white/20"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 border-4 border-grad1/20 border-t-grad1 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <Loader2 className="h-8 w-8 text-grad1 animate-pulse" />
                </div>
              </div>
              <h3 className="text-xl font-black text-gray-800 dark:text-white mb-2">Almost There</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{getLoadingMessage()}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-gray-800 dark:text-white tracking-tight leading-none mb-3">Add New Activity</h1>
            <p className="text-base font-medium text-slate-500/80 dark:text-slate-400">Share your foundation events and stories with the community</p>
          </div>
          <div className="flex gap-3">
             <button 
                type="button"
                onClick={() => navigate('/admin/activities')}
                className="px-6 py-3.5 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-2xl text-[13px] font-black shadow-sm hover:bg-gray-50 transition-all active:scale-95"
             >
                Cancel
             </button>
             <button 
                type="submit"
                form="activity-form"
                disabled={isLoading}
                className="px-8 py-3.5 bg-grad1 text-white rounded-2xl text-[13px] font-black shadow-xl shadow-grad1/25 hover:scale-[1.02] transition-all active:scale-95 disabled:opacity-50"
             >
                Publish Post
             </button>
          </div>
        </div>

        <form
          id="activity-form"
          onSubmit={formik.handleSubmit}
          encType="multipart/form-data"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/20 dark:border-slate-700 p-8 rounded-[40px] shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                   <div className="w-10 h-10 rounded-xl bg-grad1/10 flex items-center justify-center text-grad1">
                      <Type size={18} />
                   </div>
                   <h2 className="text-lg font-black text-gray-800 dark:text-white">Basic Information</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-[13px] font-bold text-slate-500/80 dark:text-slate-400 mb-2 ml-1">Activity title</label>
                    <input
                      type="text"
                      name="postTitle"
                      placeholder="e.g., Annual Youth Empowerment Meeting 2024"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.postTitle}
                      className="w-full bg-slate-50 dark:bg-slate-900/50 border-none px-6 py-4 rounded-2xl text-sm font-bold text-gray-800 dark:text-white placeholder:text-slate-400/60 focus:ring-2 focus:ring-grad1 transition-all"
                    />
                    {formik.touched.postTitle && formik.errors.postTitle && (
                      <div className="text-red-500 text-xs font-bold mt-2 ml-1">{formik.errors.postTitle}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-slate-500/80 dark:text-slate-400 mb-2 ml-1">Main Description</label>
                    <textarea
                      name="contentTitle"
                      rows="4"
                      placeholder="Give a brief summary of what this activity is about..."
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.contentTitle}
                      className="w-full bg-slate-50 dark:bg-slate-900/50 border-none px-6 py-4 rounded-2xl text-sm font-bold text-gray-800 dark:text-white placeholder:text-slate-400/60 focus:ring-2 focus:ring-grad1 transition-all resize-none"
                    />
                    {formik.touched.contentTitle && formik.errors.contentTitle && (
                      <div className="text-red-500 text-xs font-bold mt-2 ml-1">{formik.errors.contentTitle}</div>
                    )}
                  </div>
                </div>
            </div>

            {/* Content Sections Area */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/20 dark:border-slate-700 p-8 rounded-[40px] shadow-sm">
                <div className="flex items-center justify-between mb-8">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-grad2/10 flex items-center justify-center text-grad2">
                         <FileText size={18} />
                      </div>
                      <h2 className="text-lg font-black text-gray-800 dark:text-white">Activity Timeline & Insights</h2>
                   </div>
                   <button
                      type="button"
                      onClick={handleAddSection}
                      className="flex items-center gap-2 px-5 py-2.5 bg-grad2 text-white rounded-xl text-xs font-black shadow-lg shadow-grad2/20 hover:scale-105 transition-all active:scale-95"
                   >
                      <Plus size={14} /> Add Section
                   </button>
                </div>

                <div className="space-y-6">
                  {formik.values.contentSections.map((section, index) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={index} 
                      className="relative p-6 bg-slate-50/50 dark:bg-slate-900/30 rounded-3xl border border-gray-100 dark:border-slate-700/50"
                    >
                      <div className="flex justify-between items-center mb-4">
                         <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-lg text-[11px] font-black text-slate-500/80 shadow-sm border border-gray-50/50 dark:border-slate-700">Section #{index + 1}</span>
                         {index > 0 && (
                           <button
                             type="button"
                             onClick={() => handleRemoveSection(index)}
                             className="p-2 text-red-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-all"
                           >
                             <Trash2 size={16} />
                           </button>
                         )}
                      </div>

                      <div className="space-y-4">
                        <input
                          type="text"
                          name={`contentSections[${index}].sectionTitle`}
                          placeholder="Section headline (e.g., The Vision, Key Highlights)"
                          value={section.sectionTitle}
                          onChange={formik.handleChange}
                          className="w-full bg-white dark:bg-slate-800 border-none px-5 py-3 rounded-xl text-sm font-bold text-gray-800 dark:text-white placeholder:text-slate-400/50 focus:ring-2 focus:ring-grad2 transition-all shadow-sm"
                        />
                        <textarea
                          name={`contentSections[${index}].paragraph1`}
                          rows="3"
                          placeholder="Primary details for this section..."
                          value={section.paragraph1}
                          onChange={formik.handleChange}
                          className="w-full bg-white dark:bg-slate-800 border-none px-5 py-3 rounded-xl text-sm font-bold text-gray-800 dark:text-white placeholder:text-slate-400/50 focus:ring-2 focus:ring-grad2 transition-all shadow-sm resize-none"
                        />
                        <textarea
                          name={`contentSections[${index}].paragraph2`}
                          rows="3"
                          placeholder="Additional context or quotes (optional)"
                          value={section.paragraph2}
                          onChange={formik.handleChange}
                          className="w-full bg-white dark:bg-slate-800 border-none px-5 py-3 rounded-xl text-sm font-bold text-gray-800 dark:text-white placeholder:text-slate-400/50 focus:ring-2 focus:ring-grad2 transition-all shadow-sm resize-none"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-8">
            {/* Category & Media Section */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/20 dark:border-slate-700 p-8 rounded-[40px] shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                   <div className="w-10 h-10 rounded-xl bg-grad3/10 flex items-center justify-center text-grad3">
                      <MapPin size={18} />
                   </div>
                   <h2 className="text-lg font-black text-gray-800 dark:text-white">Classification</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-[13px] font-bold text-slate-500/80 dark:text-slate-400 mb-2 ml-1">Post Category</label>
                    <div className="relative">
                      <select
                        name="postCategory"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.postCategory}
                        className="w-full bg-slate-50 dark:bg-slate-900/50 border-none px-6 py-4 rounded-2xl text-sm font-bold text-gray-800 dark:text-white appearance-none cursor-pointer focus:ring-2 focus:ring-grad3 transition-all"
                      >
                        <option value="">Select category...</option>
                        <option value="Meetings">Meetings</option>
                        <option value="Events">Events</option>
                        <option value="Stories">Stories</option>
                        <option value="Celebrations">Celebrations</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                         <Plus size={16} className="rotate-45" />
                      </div>
                    </div>
                    {formik.touched.postCategory && formik.errors.postCategory && (
                      <div className="text-red-500 text-xs font-bold mt-2 ml-1">{formik.errors.postCategory}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-slate-500/80 dark:text-slate-400 mb-2 ml-1">YouTube Link</label>
                    <div className="relative">
                      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-red-500">
                         <Youtube size={16} />
                      </div>
                      <input
                        type="url"
                        name="youtube_Url"
                        placeholder="https://youtube.com/watch?v=..."
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.youtube_Url}
                        className="w-full bg-slate-50 dark:bg-slate-900/50 border-none pl-14 pr-6 py-4 rounded-2xl text-sm font-bold text-gray-800 dark:text-white placeholder:text-slate-400/60 focus:ring-2 focus:ring-red-500/50 transition-all"
                      />
                    </div>
                    {formik.touched.youtube_Url && formik.errors.youtube_Url && (
                      <div className="text-red-500 text-xs font-bold mt-2 ml-1">{formik.errors.youtube_Url}</div>
                    )}
                  </div>
                </div>
            </div>

            {/* Media Upload Section */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/20 dark:border-slate-700 p-8 rounded-[40px] shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                   <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                      <ImageIcon size={18} />
                   </div>
                   <h2 className="text-lg font-black text-gray-800 dark:text-white">Gallery Content</h2>
                </div>

                <div className="space-y-6">
                  <div className="relative group">
                    <input
                      type="file"
                      name="arrayOfImages"
                      multiple
                      onChange={handleImageChange}
                      onBlur={formik.handleBlur}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="border-2 border-dashed border-slate-200 dark:border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center text-center group-hover:border-grad1/50 transition-all bg-slate-50/50 dark:bg-slate-900/30">
                       <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-slate-400 group-hover:text-grad1 group-hover:scale-110 transition-all mb-4">
                          <Plus size={24} />
                       </div>
                       <p className="text-sm font-black text-gray-800 dark:text-white mb-1">Pick High-Quality Images</p>
                       <p className="text-xs font-medium text-slate-500">Drop files or click to browse</p>
                    </div>
                  </div>
                  {formik.touched.arrayOfImages && formik.errors.arrayOfImages && (
                    <div className="text-red-500 text-xs font-bold mt-2 text-center">{formik.errors.arrayOfImages}</div>
                  )}

                  {/* Enhanced Previews */}
                  <AnimatePresence>
                    {imagePreview.length > 0 && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="pt-4 border-t border-slate-100 dark:border-slate-700/50"
                      >
                        <p className="text-[12px] font-black text-slate-500 mb-4 px-1">Selected Assets ({imagePreview.length})</p>
                        <div className="grid grid-cols-2 gap-3">
                          {imagePreview.map((src, index) => (
                            <motion.div 
                              initial={{ scale: 0.8 }}
                              animate={{ scale: 1 }}
                              key={index} 
                              className="relative aspect-square rounded-2xl overflow-hidden shadow-sm ring-4 ring-white dark:ring-slate-800"
                            >
                              <img
                                src={src || "/placeholder.svg"}
                                alt={`Preview ${index + 1}`}
                                className="h-full w-full object-cover"
                              />
                              <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-md text-white text-[10px] font-black px-2 py-1 rounded-lg">
                                #{index + 1}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddNewActivity
