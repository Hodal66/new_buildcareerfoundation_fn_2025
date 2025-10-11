/* eslint-disable react/prop-types */
// import React from 'react';

const CardOfDonations = ({isCardVisible,SetIsCardVisible}) => {

  return (
    // Responsive container: Mobile: full width, Tablet: max-w-md, Desktop: max-w-lg
    <div className="h-fit mb-3 sm:mb-4 md:mb-[14px]
      w-full
      sm:max-w-md
      md:max-w-lg
      lg:w-[480px]">
      {/* Header card with responsive height: Mobile: h-12, Tablet: h-14, Desktop: h-[60px] */}
      <div
        onClick={() => {
          SetIsCardVisible((prevState) => {
            return !prevState;
          });
        }}
        className="w-full bg-gradient-to-r from-grad1 via-grad2 to-grad3 text-white border border-gray-200 rounded-lg shadow
          h-12
          sm:h-14
          md:h-[60px]"
      ></div>
      {/* Expanded content with responsive height: Mobile: auto, Tablet: h-96, Desktop: h-[430px] */}
      {isCardVisible && (
        <div className="w-full bg-gradient-to-r from-grad1 via-grad2 to-grad3 text-white border border-gray-200 rounded-lg shadow
          h-auto min-h-[300px]
          sm:h-96
          md:h-[430px]"></div>
      )}
    </div>
  );
};

export default CardOfDonations;
