/* eslint-disable react/prop-types */
// import React from 'react';
// import { data } from './mockData';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// eslint-disable-next-line react/prop-types
function HorizontalSlider({ imageArr }) {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <>
      <div className="relative flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100 text-white"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {imageArr.map((item, index) => (
            <img
              className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
              src={item}
              alt="/"
              key={index}
            />
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100 text-white"
          onClick={slideRight}
          size={40}
        />
      </div>
    </>
  );
}

export default HorizontalSlider;
