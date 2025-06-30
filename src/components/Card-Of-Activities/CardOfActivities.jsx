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
      <div className={`w-full h-full ${styles.blueGradient} text-white border border-gray-200 rounded-lg shadow`}>
        <div
          onClick={() => {
            navigate(`/ActivityDetailsPage/${data._id}`);
          }}
        >
          <img
            className="rounded-t-lg h-[250px] w-full"
            src={data.image_url[0].url}
            alt=""
          />
        </div>
        <div className={`${styles.flexCenterCol} py-4 px-3`}>
          <div
            onClick={() => {
              navigate(`/ActivityDetailsPage/${data._id}`);
            }}
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
          </div>
          <p className="mb-3 font-normal ">{content}</p>
          <div
            onClick={() => {
              navigate(`/ActivityDetailsPage/${data._id}`);
            }}
            className="inline-flex cursor-pointer items-center font-bold px-8 py-2 text-sm rounded-full border-2 border-secondGrad1 hover:border-white hover:text-white text-secondGrad1 hover:bg-gradient-to-r from-grad1 via-grad2 to-grad3 bg-white"
            // className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
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
