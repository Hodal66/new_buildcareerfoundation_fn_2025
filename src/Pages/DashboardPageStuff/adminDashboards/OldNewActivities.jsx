/* eslint-disable react/prop-types */
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ADD_NEW_ACTIVITIES_POST } from "../../../hooks/graphql/mutation/ActivitieMutation";
import { client } from "../../../main";
import { GET_CLOUDINARY_SIGNATURE } from "../../../hooks/usePosts";
import toast from "react-hot-toast";

const OldNewActivities = ({ setData }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [saveThePostToMongoDb] = useMutation(ADD_NEW_ACTIVITIES_POST);

  const saveImageToCloudinary = async (files) => {
    const { data } = await client.query({ query: GET_CLOUDINARY_SIGNATURE, fetchPolicy: 'network-only' });
    const { signature, timestamp, apiKey, cloudName, folder } = data.getCloudinarySignature;

    const uploadPromises = Array.from(files).map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("api_key", apiKey);
      formData.append("timestamp", timestamp);
      formData.append("signature", signature);
      formData.append("folder", folder);

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );
      
      return {
        url: response.data.secure_url,
        filename: response.data.public_id
      };
    });

    return await Promise.all(uploadPromises);
  };

  const validationSchema = Yup.object({
    postTitle: Yup.string().required("Title is required"),
    contentTitle: Yup.string().required("Content is required"),
    postCategory: Yup.string().required("Category is required"),
    youtube_Url: Yup.string()
      .url("Enter a valid YouTube URL")
      .required("YouTube URL is required"),
  });

  const formik = useFormik({
    initialValues: {
      postTitle: "",
      contentTitle: "",
      contentSections: [{ sectionTitle: "", paragraph1: "", paragraph2: "" }],
      postCategory: "",
      mainImage: "",
      otherImages: "",
      youtube_Url: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      const toastId = toast.loading("Uploading post, please wait...");

      try {
        // Upload main image (required)
        const uploadedMainImage = await saveImageToCloudinary([values.mainImage]);

        // Upload other images (optional)
        let uploadedOtherImages = [];
        if (values.otherImages && values.otherImages.length > 0) {
          uploadedOtherImages = await saveImageToCloudinary(values.otherImages);
        }

        const contentSections = values.contentSections.map((sec, index) => ({
          sectionTitle: sec.sectionTitle || `Section ${index + 1}`,
          paragraph1: sec.paragraph1 || "",
          paragraph2: sec.paragraph2 || "",
        }));

        const payload = {
          title: values.postTitle,
          content: values.contentTitle,
          contentSections,
          category: values.postCategory,
          image_url: {
            url: uploadedMainImage[0]?.url || "",
            filename: uploadedMainImage[0]?.filename || "",
          },
          image_urls: uploadedOtherImages.map((img) => ({
            url: img.url || "",
            filename: img.filename || "",
          })),
          youtube_video_url: values.youtube_Url,
          user_id: "64d77225be847b4953a2d2e6",
        };

        await saveThePostToMongoDb({ variables: { input: payload } });

        await client.refetchQueries({ include: [ADD_NEW_ACTIVITIES_POST] });

        toast.success("🎉 Post saved successfully!", { id: toastId });

        setData({ ...values });
        resetForm();
        navigate("/ActivitiesPage");
      } catch (error) {
        console.error("Error saving post:", error);
        toast.error("🚨 Failed to save post. Please try again.", {
          id: toastId,
        });
      } finally {
        setIsLoading(false);
      }
    },
  });

  const handleAddSection = () => {
    const newSections = [
      ...formik.values.contentSections,
      { sectionTitle: "", paragraph1: "", paragraph2: "" },
    ];
    formik.setFieldValue("contentSections", newSections);
  };

  const handleRemoveSection = (index) => {
    const updatedSections = formik.values.contentSections.filter(
      (_, i) => i !== index
    );
    formik.setFieldValue("contentSections", updatedSections);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto px-6 py-10 bg-white shadow-md rounded-lg">
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-600 mb-4"></div>
            <p className="text-gray-700 font-medium">
              Saving post, please wait...
            </p>
          </div>
        </div>
      )}

      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Create a New Activitie Post
      </h1>

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
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.postTitle}
            </div>
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
            <div
              key={index}
              className="border border-gray-300 rounded p-4 mb-4 space-y-4"
            >
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
            <option value="Courses">Courses</option>
            <option value="Events">Events</option>
            <option value="Stories">Stories</option>
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
          <label className="block mb-1 font-medium text-gray-700">Main Image <span className="text-red-500">*</span></label>
          <p className="text-xs text-gray-500 mb-2">This is the primary/cover image for the activity.</p>
          <input
            type="file"
            name="mainImage"
            accept="image/*"
            onChange={(e) =>
              formik.setFieldValue("mainImage", e.currentTarget.files[0])
            }
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-medium text-gray-700">Additional Gallery Images</label>
          <p className="text-xs text-gray-500 mb-2">Optional extra images shown in the activity gallery.</p>
          <input
            type="file"
            name="otherImages"
            accept="image/*"
            multiple
            onChange={(e) =>
              formik.setFieldValue("otherImages", e.currentTarget.files)
            }
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className={`px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save Post"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default OldNewActivities;


