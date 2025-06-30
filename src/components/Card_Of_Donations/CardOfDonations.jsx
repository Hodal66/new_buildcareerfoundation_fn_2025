/* eslint-disable react/prop-types */
// import React from 'react';

const CardOfDonations = ({isCardVisible,SetIsCardVisible}) => {
 
  return (
    <div className="w-[480px] h-fit mb-[14px]">
      <div
        onClick={() => {
          SetIsCardVisible((prevState) => {
            return !prevState;
          });
        }}
        className=" w-full h-[60px] bg-gradient-to-r from-grad1 via-grad2 to-grad3 text-white border border-gray-200 rounded-lg shadow"
      ></div>
      {isCardVisible && (
        <div className=" w-full h-[430px] bg-gradient-to-r from-grad1 via-grad2 to-grad3 text-white border border-gray-200 rounded-lg shadow"></div>
      )}
    </div>
  );
};

export default CardOfDonations;
