/* eslint-disable react/prop-types */
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
      {/* Horizontal slider container with responsive chevron buttons */}
      <div className="relative flex items-center">
        {/* Left chevron with responsive size: Mobile: 28, Tablet: 32, Desktop: 40 */}
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100 text-white
            transition-opacity duration-200
            text-2xl
            sm:text-3xl
            md:text-4xl"
          onClick={slideLeft}
          size={40}
        />
        {/* Scrollable image container */}
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {/* Image items with responsive sizing: Mobile: w-44, Tablet: w-52, Desktop: w-[220px] */}
          {imageArr.map((item, index) => (
            <img
              className="inline-block cursor-pointer hover:scale-105 ease-in-out duration-300
                w-44 p-1.5
                sm:w-52 sm:p-2
                md:w-56
                lg:w-[220px]"
              src={item}
              alt="/"
              key={index}
            />
          ))}
        </div>
        {/* Right chevron with responsive size: Mobile: 28, Tablet: 32, Desktop: 40 */}
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100 text-white
            transition-opacity duration-200
            text-2xl
            sm:text-3xl
            md:text-4xl"
          onClick={slideRight}
          size={40}
        />
      </div>
    </>
  );
}

export default HorizontalSlider;
