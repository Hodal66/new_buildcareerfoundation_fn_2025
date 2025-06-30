// import React from 'react';
import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
const tabletHeaderNav = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white bg-red-500 mr-6"></div>
      <div className="tablet:hidden bg-gradient-to-r from-grad1 via-grad2 to-grad3 w-full text-white flex justify-between px-4">
        <div>welcome</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <RiMenuFill className="text-black bg-white" />
        </button> 
      </div>
      <div
        className={`w-full block flex-grow tablet:flex tablet:items-center tablet:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm tablet:flex-grow bg-gradient-to-r from-grad1 via-grad2 to-grad3 pb-4">
          <a
            href="#"
            className="block py-2 border-y border-white text-start tablet:inline-block tablet:mt-0  text-white mx-4"
          >
            First Link
          </a>
          <a
            href="#"
            className="block py-2 border-b border-white text-start tablet:inline-block tablet:mt-0  text-white mx-4"
          >
            Second Link
          </a>
          <a
            href="#"
            className="block py-2 border-b border-white text-start tablet:inline-block tablet:mt-0  text-white mx-4"
          >
            Third Link
          </a>
          <a
            href="#"
            className="block py-2 text-start  border-b border-white tablet:inline-block tablet:mt-0  text-white mx-4"
          >
            Fourth Link
          </a>
          <a
            href="#"
            className="block py-2 text-start  border-b border-white tablet:inline-block tablet:mt-0  text-white mx-4"
          >
            Fifth Link
          </a>
        </div>
        {/* <div className="block    border-y border-white text-start tablet:inline-block tablet:mt-0  text-white mx-4">
          {/* <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white"> */}
        {/* Click Me */}
        {/* </button> */}
        {/* </div> */}
      </div>
    </nav>
  );
};

export default tabletHeaderNav;
