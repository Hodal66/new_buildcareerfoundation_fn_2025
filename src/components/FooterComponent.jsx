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
      {/* Image slider section with responsive padding: Mobile: py-4, Tablet: py-6, Desktop: py-8 */}
      <div className={`${styles.blueGradient} flex justify-center
        py-4
        sm:py-6
        md:py-8`}>
          <div className="w-full text-center">
            {/* Title with responsive text size and margin: Mobile: text-base mb-2, Tablet: text-lg mb-3, Desktop: text-xl mb-4 */}
            <div className="text-white
              mb-2 text-base
              sm:mb-3 sm:text-lg
              md:mb-4 md:text-xl
              font-medium">
              Building Career in action
            </div>
            <HorizontalSlider imageArr={horizontalImageArray} />
          </div>
      </div>
      <FooterComponentOne />
    </footer>
  );
};
