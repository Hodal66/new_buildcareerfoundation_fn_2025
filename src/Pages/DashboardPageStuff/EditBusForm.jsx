/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, gql } from "@apollo/client";
import { GET_ALL_POSTS } from "../../hooks/usePosts";
import { client } from "../../main";
import { GET_ONE_POST } from "../../hooks/usePosts";

const UPDATE_POST = gql`
  mutation (
    $category: String!
    $content: String!
    $image_url: [ImageToBeSaved!]!
    $title: String!
    $youtube_video_url: String!
    $post_id: ID!
  ) {
    updatePost(
      input: {
        category: $category
        content: $content
        image_url: $image_url
        title: $title
        youtube_video_url: $youtube_video_url
        # user_id: "64bd7140785ec07df1c4c8cf",
        post_id: $post_id
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

const EditBusForm = ({
  setOpenModal,
  displayPopupMessage,
  update,
  setData,
  setCloseUpdate,
}) => {
  // destructure name and email from the data coming from the row to be updated
  const { busName, busPlate, busRoute } = update;

  const { youtube_video_url, image_url, _id } = update.post;

  // When image_url is being returned from the graphql backend, it comes with the added type property 
  // which is not required at the types of image_url, so this following serves the purpose of filtering
  // this out of the objects in the image_array
  const image_Url_Cleaned = image_url.map((image) => {
    return {
      url: image.url,
      filename: image.filename
    }
  });
  const [updateThePostToMongoDb, { data, loading, error }] = useMutation(
    UPDATE_POST,
    {
      onCompleted: async ({ updatePost }) => {
        await client.refetchQueries({
          include: [GET_ALL_POSTS,GET_ONE_POST],
        });
        // console.log(addPost);
        // navigate(`/ActivitiesPage`);
      },
      onError: (errors) => {
        console.log(errors);
      },
    }
  );
  // "Variable "$image_url" got invalid value { __typename: "ImageToBeSavedReturned", url: "https://res.cloudinary.com/drnbjpagt/image/upload/v1690620034/Etiene_project_images/uvt7xkuqzeuiwa0u3vfy.jpg", filename: "Etiene_project_images/uvt7xkuqzeuiwa0u3vfy" } at "image_url[0]"; Field "__typename" is not defined by type "ImageToBeSaved". Did you mean "filename"?"

  // Initial data is prefilled with data from row being updated
  let initialData = {
    busName,
    busPlate,
    busRoute,
    youtube_Url: youtube_video_url,
  };

  // validationSchema which validate the form before being submitted
  const validate = Yup.object({
    busName: Yup.string()
      .min(4, "Minimum is 4 characters")
      .required("Bus Name Required"),
    busPlate: Yup.string()
      .min(4, "Minimum of 6 characters")
      .required("Bus Plate Number is Required"),
    busRoute: Yup.string()
      .min(7, "Minimum of 7 Numbers")
      .required("Bus Route is required"),
    youtube_Url: Yup.string()
      .min(7, "Minimum of 7 Numbers")
      .required("Bus Route is required"),
  });

  //  the function which is called by formik by default and it passes values object automatically
  // to this onSubmit function and we can capture those values and use them!
  const onSubmit = async (values, { resetForm }) => {
    // console.log(values);
    const { busName, busPlate, busRoute, youtube_Url } = values;
    const updatePostSaving = updateThePostToMongoDb({
      variables: {
        category: busRoute,
        content: busPlate,
        image_url: image_Url_Cleaned,
        title: busName,
        youtube_video_url: youtube_Url,
        post_id: _id,
      },
    });

    displayPopupMessage(updatePostSaving, "Update");
    // the promise is awaited to resove so that it can have the values. NB: The following code
    // cant run before promise is resolved due to this await.
    await updatePostSaving;
    await updatePostSaving;
    // prefilling the each and every submitted data from form with default role = operator
    setData(values);
    resetForm({});
    setCloseUpdate("");
    setOpenModal(false);
  };

  //  the formik is the object which is returned by useFormik. this use formik is receiving
  // functions onSubmit, InitialValues Object and Validate schema from yup
  const formik = useFormik({
    initialValues: initialData,
    onSubmit: onSubmit,
    validationSchema: validate,
  });

  // triggered when back button is clicked
  const handleBack = () => {
    setCloseUpdate("");
    setOpenModal(false);
  };

  return (
    <div
      className="w-screen h-screen flex justify-center items-center absolute bg-black bg-opacity-50"
      data-testid="edit-form"
    >
      <div className="w-5/6 sm:w-3/5 h-2/5 sm:h-3/5 md:w-3/5 lg:h-3/5 md:h-2/5 lg:w-2/6 xl:w-1/3 xl:h-3/5 bg-white rounded-md pt-2 md:pt-9 lg:pt-0 box-border">
        <div className="sm:px-4 px-3">
          <div className="mb-2 font-bold border-b-2 border-solid border-darkBluePhant w-[75px] pt-4">
            {update ? "Edit a Post" : "Create New Bus"}
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
              value={formik.values.busName}
              onBlur={formik.handleBlur}
              name="busName"
              id="busName"
              data-testid="name"
              type="text"
              placeholder="Enter the title"
              className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
            />
            {/* conditional rendering of the error message for validating the name input field */}
            {formik.touched.busName && formik.errors.busName ? (
              <div className="text-errorText">{formik.errors.busName}</div>
            ) : null}
          </div>
          <div className="flex flex-col pb-0 sm:px-4 px-3 md:my-5 lg:my-0">
            <label className="my-2 md:my-0 md:py-2 lg:py-2">
              Content of the post
              <textarea
                onChange={formik.handleChange}
                value={formik.values.busPlate}
                onBlur={formik.handleBlur}
                name="busPlate"
                data-testid="email"
                type="text"
                placeholder="enter your content here"
                className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
                // defaultValue="I really enjoyed biking yesterday!"
                rows={10}
                cols={40}
              />
            </label>
            {/* conditional rendering of the error message for validating the name input field
            {formik.touched.busPlate && formik.errors.busPlate ? (
              <div className="text-errorText">{formik.errors.busPlate}</div>
            ) : null} */}
          </div>

          <div className="flex flex-col pb-0 sm:px-4 px-3 md:my-5 lg:my-0">
            <label htmlFor="email" className="my-2 md:my-0 md:py-2 lg:py-2">
              Category of the post
            </label>
            <select
              onChange={formik.handleChange}
              value={formik.values.busRoute}
              onBlur={formik.handleBlur}
              name="busRoute"
              data-testid="busRoute"
            >
              <option value="" label="Select category">
                Select a color
              </option>
              <option value="Meeting" label="Meeting">
                Meeting
              </option>
              <option value="Events" label="Events">
                Events
              </option>
              <option value="News" label="News">
                News
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
          <div className="bg-gray-200 px-4 py-2 mt-4 sm:mt-8 md:mt-5 lg:mt-9 rounded-b-md text-left flex">
            <button
              className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600 mr-2"
              // onClick={() => {
              //   setOpenModal(false);
              // }}
              onClick={handleBack}
            >
              Back
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 mr-2"
            >
              Update Post
            </button>
          </div>
        </form>
        {/* <form action="" onSubmit={formik.handleSubmit} role="form">
          <div className="flex flex-col pb-1 sm:px-4 px-3">
            <label for="name" className=" my-2 md:my-0  md:py-3 lg:py-2">
              Bus Name
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.busName}
              onBlur={formik.handleBlur}
              name="busName"
              id="busName"
              data-testid="name"
              type="text"
              placeholder="Bus Name"
              className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
            />
            {/* conditional rendering of the error message for validating the name input field */}
        {/* {formik.touched.busName && formik.errors.busName ? (
              <div className="text-errorText">{formik.errors.busName}</div>
            ) : null}
          </div>
          <div className="flex flex-col pb-0 sm:px-4 px-3 md:my-5 lg:my-0">
            <label htmlFor="email" className="my-2 md:my-0 md:py-2 lg:py-2">
              Bus Plate
            </label> */}
        {/* <input
              onChange={formik.handleChange}
              value={formik.values.busPlate}
              onBlur={formik.handleBlur}
              name="busPlate"
              data-testid="email"
              type="text"
              placeholder="Bus Plate"
              className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
            />
            {/* conditional rendering of the error message for validating the name input field */}
        {/* {formik.touched.busPlate && formik.errors.busPlate ? (
              <div className="text-errorText">{formik.errors.busPlate}</div>
            ) : null}
          </div>
          <div className="flex flex-col pb-0 sm:px-4 px-3 md:my-5 lg:my-0">
            <label htmlFor="email" className="my-2 md:my-0 md:py-2 lg:py-2">
              Bus Route
            </label> */}
        {/* <input
              onChange={formik.handleChange}
              value={formik.values.busRoute}
              onBlur={formik.handleBlur}
              name="busRoute"
              data-testid="busRoute"
              type="text"
              placeholder="Bus Route"
              className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
            /> */}
        {/* conditional rendering of the error message for validating the name input field */}
        {/* {formik.touched.busRoute && formik.errors.busRoute ? (
              <div className="text-errorText">{formik.errors.busRoute}</div>
            ) : null}
          </div>
          <div className="bg-gray-200 px-4 py-2 mt-4 sm:mt-8 md:mt-5 lg:mt-9 rounded-b-md text-left flex">
            <button
              className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600 mr-2"
              onClick={handleBack} */}
        {/* //     >
        //       Back
        //     </button>
        //     <button */}
        {/* //       type="submit"
        //       className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 mr-2"
        //     >
        //       Update Bus
        //     </button>
        //   </div> */}
        {/* // </form> */}
      </div>
    </div>
  );
};

export default EditBusForm;
