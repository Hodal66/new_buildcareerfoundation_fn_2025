/* eslint-disable react/prop-types */
// import React from 'react';

import styles from "../../styles";

function DirectorCard({director, SetOpenModal}) {

    return (
        // Responsive director card with adaptive padding: Mobile: py-2, Tablet: py-3, Desktop: py-4
        <div className={`w-full ${styles.flexCenterCol} hover:opacity-50 cursor-pointer
          py-2
          sm:py-3
          md:py-4
          transition-opacity duration-200`}
          onClick={() => {
            SetOpenModal(true)
          }} key={director.id}>
        {/* Image with responsive size: Mobile: h-48 w-40, Tablet: h-60 w-52, Desktop: h-[300px] w-[260px] */}
        <img
          src={director.image}
          className="rounded-xl object-cover
            h-48 w-40
            sm:h-56 sm:w-48
            md:h-[280px] md:w-[240px]
            lg:h-[300px] lg:w-[260px]"
          alt=""
        />
        {/* Name with responsive text size: Mobile: text-sm, Tablet: text-base, Desktop: text-btnSize */}
        <div className="font-normal
          text-sm mt-2
          sm:text-base sm:mt-3
          md:text-btnSize md:mt-4">
          {director.name}
        </div>
        {/* Position with responsive text size: Mobile: text-[10px], Tablet: text-xs, Desktop: text-sm */}
        <div className="font-normal
          text-[10px]
          sm:text-xs
          md:text-sm
          mt-1">
          {director.position}
        </div>
      </div>
    );
}

export default DirectorCard;