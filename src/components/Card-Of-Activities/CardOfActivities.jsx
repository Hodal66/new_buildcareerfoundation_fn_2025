/* eslint-disable react/prop-types */
// import React from 'react';

import { useNavigate } from "react-router";
import { sliceTheStringTofit } from "../Common/sliceTheString";
import styles from "../../styles";

const CardOfActivities = ({ data }) => {
  let navigate = useNavigate();

  // to slice the incoming to fit the available slot provided in the card to avoid a mess
  const { slicedTitle: title, slicedContent: content } = sliceTheStringTofit(
    data.title,
    data.content,
    25,
    75
  );
  return (
    <div className="w-full h-full">
      {/* Responsive card container with full width and height */}
      <div className={`w-full h-full ${styles.blueGradient} text-white border border-gray-200 rounded-lg shadow`}>
        {/* Image container - responsive height: Mobile: 200px, Tablet: 220px, Desktop: 250px */}
        <div
          onClick={() => {
            navigate(`/ActivityDetailsPage/${data._id}`);
          }}
        >
          <img
            className="rounded-t-lg w-full object-cover
              h-[200px]
              sm:h-[220px]
              md:h-[240px]
              lg:h-[250px]"
            src={data.image_url[0].url}
            alt=""
          />
        </div>
        {/* Content container with responsive padding: Mobile: py-2 px-2, Tablet: py-3 px-2.5, Desktop: py-4 px-3 */}
        <div className={`${styles.flexCenterCol}
          py-2 px-2
          sm:py-3 sm:px-2.5
          md:py-4 md:px-3`}>
          {/* Title section with responsive text size: Mobile: text-lg, Tablet: text-xl, Desktop: text-2xl */}
          <div
            onClick={() => {
              navigate(`/ActivityDetailsPage/${data._id}`);
            }}
          >
            <h5 className="mb-2 font-bold tracking-tight
              text-lg
              sm:text-xl
              md:text-2xl">
              {title}
            </h5>
          </div>
          {/* Content paragraph with responsive text size: Mobile: text-sm, Tablet: text-base */}
          <p className="mb-3 font-normal
            text-sm
            sm:text-base">
            {content}
          </p>
          {/* Read more button with responsive padding and text: Mobile: px-4 py-1.5 text-xs, Tablet: px-6 py-2 text-sm, Desktop: px-8 py-2 text-sm */}
          <div
            onClick={() => {
              navigate(`/ActivityDetailsPage/${data._id}`);
            }}
            className="inline-flex cursor-pointer items-center font-bold rounded-full border-2
              border-secondGrad1 hover:border-white hover:text-white text-secondGrad1
              hover:bg-gradient-to-r from-grad1 via-grad2 to-grad3 bg-white
              transition-all duration-200
              px-4 py-1.5 text-xs
              sm:px-6 sm:py-2 sm:text-sm
              md:px-8"
          >
            Read more
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1
                w-3 h-3
                sm:w-4 sm:h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                // eslint-disable-next-line react/no-unknown-property
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                // eslint-disable-next-line react/no-unknown-property
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOfActivities;
