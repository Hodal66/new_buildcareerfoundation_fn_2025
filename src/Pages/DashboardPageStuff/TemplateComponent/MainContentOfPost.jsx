/* eslint-disable react/prop-types */
import TableHeader from "../TableHeader";
import TableGenerator from "../TableGenerator";
import { Toaster } from "react-hot-toast";
import { RiAddCircleLine } from "react-icons/ri";

const MainContentOfPost = ({
  captureDataForUpdate,
  deleteHandle,
  setModalOpen,
  datas,
  loading,
  error,
}) => {
  return (
    <main className=" flex flex-col col-start-1 sm:col-start-3 md:col-start-4 lg:col-start-3 col-end-13 row-start-2 row-end-12 px-3 mx-0 sm:mx-2  mt-2 bg-white">
      <div className="flex justify-center sm:justify-start md:justify-center lg:justify-start ">
        <div className="m-2 font-black text-xl border-b-2 border-solid border-darkBluePhant w-[45px]">
          Post
        </div>
      </div>
      <div className="flex flex-row justify-between sm:justify-start md:justify-evenly lg:justify-start items-center my-3">
        <div className="bg-darkBluePhant p-1 sm:px-0 sm:p-2 rounded-md font-bold text-white flex items-center justify-evenly w-1/2 sm:w-1/6 md:w-2/6 xl:w-1/6">
          <RiAddCircleLine className="text-white text-xl sm:text-2xl" />
          <button
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Create Post
          </button>
        </div>
        <form
          action=""
          className="w-1/2 sm:w-2/5 h-10 mx-2 sm:mx-12 md:mx-3 lg:mx-12 sm:flex sm:items-center"
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full h-5/6 sm:h-full pl-2 border-2 border-solid border-[#6C757D] rounded-md"
          />
        </form>
      </div>
      <TableHeader />
      <div className="overflow-auto ">
        {/* rendering the all operators from the database using this component TableGenerator */}
        <TableGenerator
          giveMeData={captureDataForUpdate}
          handleDelete={deleteHandle}
          setOpenModal={setModalOpen}
          data={datas}
          loading={loading}
          error={error}
        />
      </div>
      <Toaster className="w-1/3" />
    </main>
  );
};

export default MainContentOfPost;
