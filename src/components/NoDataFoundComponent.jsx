

// import React from 'react';
import NoDataFound from "/bg_icons/noDataFound1.png"
// eslint-disable-next-line react/prop-types
function NoDataFoundComponent({onPageEmptyContent}) {
  return (
    // Container with responsive spacing: Mobile: space-y-4, Tablet: space-y-5, Desktop: space-y-6
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center
      space-y-4 px-4
      sm:space-y-5
      md:space-y-6">

      {/* Image with responsive size: Mobile: w-48 h-48, Tablet: w-60 h-60, Desktop: w-72 h-72 */}
      <img
        src={NoDataFound}
        alt="No Content Available"
        className="object-contain
          w-48 h-48
          sm:w-60 sm:h-60
          md:w-72 md:h-72"
      />

      {/* Heading with responsive text size: Mobile: text-xl, Tablet: text-2xl, Desktop: text-3xl, Large: text-4xl */}
      <h1 className="font-bold text-darkBluePhant
        text-xl
        sm:text-2xl
        md:text-3xl
        lg:text-4xl
        px-2">
        Nothing to show on {onPageEmptyContent} Page... yet!
      </h1>

      {/* Supporting Text with responsive size and max width */}
      <p className="text-gray-500
        text-sm max-w-xs
        sm:text-base sm:max-w-sm
        md:text-base md:max-w-md
        px-4">
        Looks like there&apos;s no content available at the moment. Please check back later or refresh to see updates.
      </p>

      {/* Optional Button with responsive padding and text */}
      <button className="bg-grad1 hover:bg-grad2 text-white font-semibold rounded-lg shadow-lg
        transition-colors duration-200
        mt-2 px-4 py-2 text-sm
        sm:mt-3 sm:px-5 sm:py-2.5 sm:text-base
        md:mt-4 md:px-6 md:py-3">
        Refresh
      </button>
    </div>
  );
}

export default NoDataFoundComponent;
