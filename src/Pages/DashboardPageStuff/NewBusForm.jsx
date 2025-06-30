/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState } from "react";
// import * as Yup from "yup";
import axios from "axios";

const NewBusForm = ({ setOpenModal}) => {


  const [fileState, setFileState] = useState("");
  const onFileChange = (e) => {
    console.log()
    setFileState(e.target.files);
  };

  const packFiles = (files)=> {
    const data = new FormData();
    [...files].forEach((file) => {
        data.append(`file_name`, file)
    })
    return data
}
const formData =  packFiles(fileState);

  const onSubmit = async (e) => {
    e.preventDefault();

    const result = await axios.post(
      "http://localhost:2000/multiple_images-upload",
      formData  
    );

    console.log(result);
  };

  return (
    <>
      <div
        className="w-screen h-screen flex justify-center items-center absolute bg-black bg-opacity-50"
        data-testid="new-form"
      >
        <div className="w-5/6 sm:w-3/5 h-2/5 sm:h-3/5 md:w-3/5 lg:h-3/5 md:h-2/5 lg:w-2/6 xl:w-1/3 xl:h-3/5 bg-white rounded-md pt-2 md:pt-9 lg:pt-0 box-border">
          <div className="sm:px-4 px-3">
            <div className="mb-2 font-bold border-b-2 border-solid border-darkBluePhant w-[90px] pt-4">
              Create Bus
            </div>
          </div>
          <form enctype="multipart/form-data" onSubmit={onSubmit}>
            <div className="flex flex-col pb-0 sm:px-4 px-3 md:my-5 lg:my-0">
              <label htmlFor="email" className="my-2 md:my-0 md:py-2 lg:py-2">
                Add Photo to this country
              </label>
              <input
                onChange={onFileChange}
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
                // onClick={onSubmit}
                className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 mr-2"
              >
                Save Bus
              </button>
            </div>
          </form>
         
        </div>
      </div>
      {/* <form
        enctype="multipart/form-data"
        action="
      "
        className="h-full bg-blue-500 w-full rounded-lg flex flex-col justify-evenly m-0 p-0"
      >
        <div className="h-[50%] w-full px-3">
          <label htmlFor="" className="h-[25%] mb-5 font-bold">
            Add Photo to this country
          </label>
          <input
            // onChange={onFileChange}
            type="file"
            required
            className="w-full text-sm text-gray-900 pl-2 h-[75%] rounded-md"
          ></input>
        </div>
      </form> */}
    </>
  );
};

export default NewBusForm;
