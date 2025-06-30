/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useFormik } from "formik";
// import { useState } from "react";
import * as Yup from "yup";
import { useMutation, gql } from "@apollo/client";
import { client } from "../../main";
// import { GET_ALL_POSTS } from "../../Pages/ActivitiesPage";
import { useNavigate } from "react-router-dom";
import { GET_ALL_POSTS, usePosts } from "../../hooks/usePosts";

const UPLOAD_POST = gql`
  mutation (
    $category: String!
    $content: String!
    $image_url: [ImageToBeSaved!]!
    $title: String!
    $contentSection1: String
    $contentSection2: String
    $contentSection3: String
    $youtube_video_url: String!
    $user_id: ID!
  ) {
    addPost(
      input: {
        category: $category
        content: $content
        contentSection1: $contentSection1
        contentSection2: $contentSection2
        contentSection3: $contentSection3
        image_url: $image_url
        title: $title
        youtube_video_url: $youtube_video_url
        # user_id: "64bd7140785ec07df1c4c8cf",
        user_id: $user_id
      }
    ) {
      category
      image_url {
        url
        filename
      }
      _id
      youtube_video_url
      date_posted
      title
      content
    }
  }
`;
const NewPost = ({ setOpenModal, setData, displayPopupMessage }) => {
  // Initial data is prefilled with data from row being updated
  const initialData = {
    postTitle: "",
    contentTitle: "",
    postCategory: "",
    contentSection1: "",
    contentSection2: "",
    contentSection3: "",
    arrayOfImages: "",
    youtube_Url: "",
  };
  let navigate = useNavigate();
  // the process.env is replaced by import.meta.env but it
  // load only ones starting with prefix VITE to avoid data leaking
  // So then that is why I am adding VITE in front of every env variables I created in the .env file.
  const LinkToTheImageUrl = import.meta.env.VITE_IMAGE_URL;
  console.log(LinkToTheImageUrl);

  // const LinkToTheImageUrl =
  // "https://buildcareerfoundationimages-8ed1db4b5aee.herokuapp.com";

  const [saveThePostToMongoDb, { data, loading, error }] = useMutation(
    UPLOAD_POST,
    {
      onCompleted: async ({ addPost }) => {
        await client.refetchQueries({
          include: [GET_ALL_POSTS],
        });
        console.log(addPost);
        // navigate(`/ActivitiesPage`);
      },
      onError: (errors) => {
        console.log(errors);
      },
    }
  );
  //  the function which is called by formik by default and it passes values object automatically
  // to this onSubmit function and we can capture those values and use them!
  const packFiles = (files) => {
    const data = new FormData();
    [...files].forEach((file) => {
      data.append(`file_name`, file);
    });
    return data;
  };

  const saveImageToCloudinary = async (formData) => {
    const result = await axios.post(
      // `${LinkToTheImageUrl}/multiple_images-upload`,
      `http://localhost:2000/multiple_images-upload`,
      formData
    );
    return result.data;
  };

  const onSubmit = async (values, { resetForm }) => {
    // To
    const formData = packFiles(values.arrayOfImages);

    const dataSaved = saveImageToCloudinary(formData);

    displayPopupMessage(dataSaved, "ImageUploading");
    // the promise is awaited to resove so that it can have the values. NB: The following code
    // cant run before promise is resolved due to this await.
    await dataSaved;
    const arrayOfImageUrlsSaved = await dataSaved;
    // extract the useful information from the form submitted and then save them in the database
    // please.
    const {
      postTitle,
      contentTitle,
      contentSection1,
      contentSection2,
      contentSection3,
      postCategory,
      youtube_Url,
    } = values;
    // Testing the category field
    console.log("TESTING THE CATEGORY FIELD");
    console.log(postCategory);
    console.log("ENDING TESTING THE CATEGORY FIELD");
    const dataFormat = {
      category: postCategory,
      content: contentTitle,
      contentSection1: contentSection1,
      contentSection2: contentSection2,
      contentSection3: contentSection3,
      image_url: arrayOfImageUrlsSaved,
      title: postTitle,
      youtube_video_url: youtube_Url,
      // the id of the only one user created in the database.
      user_id: "64d77225be847b4953a2d2e6",
      // user_id: "64bd7140785ec07df1c4c8cf",
    };
    console.log(dataFormat);
    const newPostSaving = saveThePostToMongoDb({
      variables: dataFormat,
    });

    displayPopupMessage(newPostSaving, "Save");
    // the promise is awaited to resove so that it can have the values. NB: The following code
    // cant run before promise is resolved due to this await.
    await newPostSaving;
    await newPostSaving;
    console.log("The after saving of the general post is there my brother");
    setData({ ...values, arrayOfImages: arrayOfImageUrlsSaved });

    resetForm({});

    setOpenModal(false);
  };
  // validationSchema which validate the form before being submitted
  const validate = Yup.object({
    postTitle: Yup.string().required("Title is Required, can not be empty"),
    contentTitle: Yup.string().required(
      "Category is Required, can not be empty"
    ),
    contentSection1: Yup.string().required(
      "Category is Required, can not be empty"
    ),
    contentSection2: Yup.string(),
    contentSection3: Yup.string(),
    postCategory: Yup.string().required(
      "Content is Required, can not be empty"
    ),
    youtube_Url: Yup.string().required(
      "Youtube_Url is Required, can not be empty"
    ),
  });

  //  the formik is the object which is returned by useFormik. this use formik is receiving
  // functions onSubmit, InitialValues Object and Validate schema from yup
  const formik = useFormik({
    initialValues: initialData,
    onSubmit: onSubmit,
    validationSchema: validate,
  });

  return (
    <div
      className="w-screen h-screen flex justify-center items-center absolute bg-black bg-opacity-50"
      data-testid="new-form"
    >
      <div className="w-5/6 sm:w-3/5 h-3/5 sm:h-4/5 md:w-3/5 lg:h-4/5 md:h-4/5 lg:w-2/6 xl:w-1/3 xl:h-4/5 bg-white rounded-md pt-2 md:pt-9 lg:pt-0 box-border">
        {/* <div className="w-5/6 sm:w-3/5 h-2/5 sm:h-3/5 md:w-3/5 lg:h-3/5 md:h-2/5 lg:w-2/6 xl:w-1/3 xl:h-3/5 bg-white rounded-md pt-2 md:pt-9 lg:pt-0 box-border"> */}
        <div className="sm:px-4 px-3">
          <div className="mb-2 font-bold border-b-2 border-solid text-center border-darkBluePhant w-[80%] pt-4">
            Create a New Post
          </div>
        </div>
        <form
          encType="multipart/form-data"
          onSubmit={formik.handleSubmit}
          role="form"
        >
          <div className="flex flex-col pb-1 sm:px-4 px-3">
            <label for="name" className=" my-2 md:my-0  md:py-3 lg:py-2">
              Title of the post
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.postTitle}
              onBlur={formik.handleBlur}
              name="postTitle"
              id="postTitle"
              data-testid="name"
              type="text"
              placeholder="Enter the title"
              className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
            />
            {/* conditional rendering of the error message for validating the name input field */}
            {formik.touched.postTitle && formik.errors.postTitle ? (
              <div className="text-errorText">{formik.errors.postTitle}</div>
            ) : null}
          </div>
          <div className="flex flex-col pb-0 sm:px-4 px-3 md:my-5 lg:my-0">
            <label className="my-2 md:my-0 md:py-2 lg:py-2">
              Content of the post 1
              <textarea
                onChange={formik.handleChange}
                value={formik.values.contentTitle}
                onBlur={formik.handleBlur}
                name="contentTitle"
                data-testid="email"
                type="text"
                placeholder="enter your content here"
                className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
                // defaultValue="I really enjoyed biking yesterday!"
                rows={10}
                cols={40}
              />
            </label>
            {/* conditional rendering of the error message for validating the name input field */}
            {formik.touched.contentTitle && formik.errors.contentTitle ? (
              <div className="text-errorText">{formik.errors.contentTitle}</div>
            ) : null}
          </div>

          <div className="flex flex-col pb-0 sm:px-4 px-3 md:my-5 lg:my-0">
            <label className="my-2 md:my-0 md:py-2 lg:py-2">
              Add Section 2
              <textarea
                onChange={formik.handleChange}
                value={formik.values.contentSection1}
                onBlur={formik.handleBlur}
                name="contentSection1"
                data-testid="email"
                type="text"
                placeholder="enter your content here"
                className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
                // defaultValue="I really enjoyed biking yesterday!"
                rows={10}
                cols={40}
              />
            </label>
            {/* conditional rendering of the error message for validating the name input field */}
            {formik.touched.contentSection1 && formik.errors.contentSection1 ? (
              <div className="text-errorText">
                {formik.errors.contentSection1}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col pb-0 sm:px-4 px-3 md:my-5 lg:my-0">
            <label className="my-2 md:my-0 md:py-2 lg:py-2">
              Add Section 3
              <textarea
                onChange={formik.handleChange}
                value={formik.values.contentSection3}
                onBlur={formik.handleBlur}
                name="contentSection3"
                data-testid="email"
                type="text"
                placeholder="enter your content here"
                className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
                // defaultValue="I really enjoyed biking yesterday!"
                rows={10}
                cols={40}
              />
            </label>
            {/* conditional rendering of the error message for validating the name input field */}
            {formik.touched.contentSection3 && formik.errors.contentSection3 ? (
              <div className="text-errorText">
                {formik.errors.contentSection3}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col pb-0 sm:px-4 px-3 md:my-5 lg:my-0">
            <label htmlFor="email" className="my-2 md:my-0 md:py-2 lg:py-2">
              Category of the post
            </label>
            <select
              onChange={formik.handleChange}
              value={formik.values.postCategory}
              onBlur={formik.handleBlur}
              name="postCategory"
              data-testid="postCategory"
            >
              <option value="" label="Select category">
                Select a color
              </option>
              <option value="Meetings" label="Meetings">
                Meetings
              </option>
              <option value="Events" label="Events">
                Events
              </option>
              <option value="Stories" label="Stories">
                Stories
              </option>
              <option value="Celebrations" label="Celebrations">
                Celebrations
              </option>
            </select>
          </div>
          <div className="flex flex-col pb-1 sm:px-4 px-3">
            <label for="name" className=" my-2 md:my-0  md:py-3 lg:py-2">
              Youtube URL
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.youtube_Url}
              onBlur={formik.handleBlur}
              name="youtube_Url"
              id="youtube_Url"
              data-testid="name"
              type="text"
              placeholder="Youtube video URL of the post"
              className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
            />
            {/* conditional rendering of the error message for validating the name input field */}
            {formik.touched.youtube_Url && formik.errors.youtube_Url ? (
              <div className="text-errorText">{formik.errors.youtube_Url}</div>
            ) : null}
          </div>
          <div className="flex flex-col pb-0 sm:px-4 px-3 md:my-5 lg:my-0">
            <label htmlFor="email" className="my-2 md:my-0 md:py-2 lg:py-2">
              Add Photos to this country
            </label>
            <input
              onChange={(e) =>
                formik.setFieldValue("arrayOfImages", e.currentTarget.files)
              }
              name="arrayOfImages"
              data-testid="arrayOfImages"
              type="file"
              required
              multiple
              className="w-full text-sm text-gray-900 pl-2 h-[75%] rounded-md"
            ></input>
          </div>
          <div className="bg-gray-200 px-4 py-2 mt-4 sm:mt-8 md:mt-5 lg:mt-9 rounded-b-md text-left flex">
            <button
              className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600 mr-2"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Back
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 mr-2"
            >
              Save Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
