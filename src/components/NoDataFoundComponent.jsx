

// import React from 'react';
import NoDataFound from "/bg_icons/noDataFound1.png"
// eslint-disable-next-line react/prop-types
function NoDataFoundComponent({onPageEmptyContent}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-6">
      
      {/* Image */}
      <img
        src={NoDataFound}
        alt="No Content Available"
        className="w-72 h-72 object-contain"
      />

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-darkBluePhant">
        Nothing to show on {onPageEmptyContent} Page... yet!
      </h1>

      {/* Supporting Text */}
      <p className="text-gray-500 max-w-md">
        Looks like there`&apos;s no content available at the moment. Please check back later or refresh to see updates.
      </p>

      {/* Optional Button */}
      <button className="mt-4 px-6 py-3 bg-grad1 hover:bg-grad2 text-white font-semibold rounded-lg shadow-lg transition">
        Refresh
      </button>
    </div>
  );
}

export default NoDataFoundComponent;
