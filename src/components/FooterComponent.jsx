// import React from "react";

import styles from "../styles";
import FooterComponentOne from "./FooterComponentOne";
import HorizontalSlider from "./HorizontalSlider";

export const FooterComponent = () => {
  const horizontalImageArray = [
    "/carrer.jpg",
    "/carrer.jpg",
    "/carrer.jpg",
    "/carrer.jpg",
    "/carrer.jpg",
    "/carrer.jpg",
  ];
  return (
    <footer>
      <div className={`${styles.blueGradient} h-[270px] phone:p-0 px-14 py-8 phone:h-[290px] flex justify-center`}>
        <div className="w-widthOfScreen h-full flex items-center ">
          <div className="w-full text-center">
            <div className="mb-4 text-xl text-white">
              Building Career in action
            </div>
            <HorizontalSlider imageArr={horizontalImageArray} />
          </div>
        </div>
      </div>
      <FooterComponentOne />
    </footer>
  );
};
