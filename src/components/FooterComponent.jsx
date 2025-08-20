// import React from "react";

import styles from "../styles";
import FooterComponentOne from "./FooterComponentOne";
import HorizontalSlider from "./HorizontalSlider";

export const FooterComponent = () => {
  const horizontalImageArray = [
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
    "/images/13.jpg",
    "/images/14.jpg",
    "/images/16.jpg",
    "/images/18.JPG",
    "/images/19.JPG",
    "/images/21.JPG",
    "/images/22.JPG",
  ];
  return (
    <footer>
      <div className={`${styles.blueGradient} flex justify-center py-8`}>
          <div className="w-full text-center">
            <div className="mb-4 text-xl text-white">
              Building Career in action
            </div>
            <HorizontalSlider imageArr={horizontalImageArray} />
          </div>
      </div>
      <FooterComponentOne />
    </footer>
  );
};
