// import React from 'react';
import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
const tabletHeaderNav = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false)
  return (
    // Responsive navigation with adaptive padding: Mobile: p-3, Tablet: p-4, Desktop: p-6
    <nav className="flex items-center justify-between flex-wrap
      p-3
      sm:p-4
      md:p-6">
      <div className="flex items-center flex-shrink-0 text-white bg-red-500
        mr-2
        sm:mr-4
        md:mr-6"></div>
      {/* Mobile header bar with responsive padding and text */}
      <div className="tablet:hidden bg-gradient-to-r from-grad1 via-grad2 to-grad3
        w-full text-white flex justify-between
        px-2 py-2
        sm:px-3 sm:py-2
        md:px-4">
        <div className="
          text-sm
          sm:text-base">
          welcome
        </div>
        {/* Menu button with responsive padding */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center rounded text-black-500 hover:text-black-400
            px-2 py-1
            sm:px-3 sm:py-2"
        >
          <RiMenuFill className="text-black bg-white
            text-lg
            sm:text-xl
            md:text-2xl" />
        </button>
      </div>
      {/* Expandable menu section */}
      <div
        className={`w-full block flex-grow tablet:flex tablet:items-center tablet:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* Navigation links with responsive text and padding */}
        <div className="tablet:flex-grow bg-gradient-to-r from-grad1 via-grad2 to-grad3
          text-xs
          sm:text-sm
          md:text-base
          pb-2
          sm:pb-3
          md:pb-4">
          <a
            href="#"
            className="block border-y border-white text-start tablet:inline-block tablet:mt-0 text-white
              py-1.5 mx-2
              sm:py-2 sm:mx-3
              md:mx-4"
          >
            First Link
          </a>
          <a
            href="#"
            className="block border-b border-white text-start tablet:inline-block tablet:mt-0 text-white
              py-1.5 mx-2
              sm:py-2 sm:mx-3
              md:mx-4"
          >
            Second Link
          </a>
          <a
            href="#"
            className="block border-b border-white text-start tablet:inline-block tablet:mt-0 text-white
              py-1.5 mx-2
              sm:py-2 sm:mx-3
              md:mx-4"
          >
            Third Link
          </a>
          <a
            href="#"
            className="block text-start border-b border-white tablet:inline-block tablet:mt-0 text-white
              py-1.5 mx-2
              sm:py-2 sm:mx-3
              md:mx-4"
          >
            Fourth Link
          </a>
          <a
            href="#"
            className="block text-start border-b border-white tablet:inline-block tablet:mt-0 text-white
              py-1.5 mx-2
              sm:py-2 sm:mx-3
              md:mx-4"
          >
            Fifth Link
          </a>
        </div>
      </div>
    </nav>
  );
};

export default tabletHeaderNav;
