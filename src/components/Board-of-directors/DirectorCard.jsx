/* eslint-disable react/prop-types */
// import React from 'react';

import styles from "../../styles";

function DirectorCard({director, SetOpenModal}) {

    return (
        <div className={`w-full ${styles.flexCenterCol} hover:opacity-50 cursor-pointer py-4`} onClick={() => {
            SetOpenModal(true)
        }} key={director.id}>
        <img
          src={director.image}
          className="h-[300px] w-[260px] rounded-xl"
          alt=""
        />
        <div className="text-btnSize font-normal">{director.name}</div>
        <div className="text-xs font-normal">{director.position}</div>
      </div>
    );
}

export default DirectorCard;