// import React from "react";

const TableHeader = () => {
  return (
    <div
      className="grid grid-cols-12 border-b-2 border-black font-bold border-solid"
      role="row-header"
    >
      <div className="col-span-1">No</div>
      <div className="col-span-2 ">Post Title</div>
      <div className="col-span-3 ">Post Content</div>
      <div className="col-span-2 ">Post Category</div>
      <div className="col-span-2 ">Number of Images</div>
      <div className="col-span-2 ">Actions</div>
    </div>
  );
};

export default TableHeader;
