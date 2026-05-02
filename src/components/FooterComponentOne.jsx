/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HoveringContext } from "../context/HoveringContext";
const FooterComponentOne = () => {
  const [hover, setHover] = useContext(HoveringContext);
  const [setIsVisible] = useState(true);

  // Show button when user scrolls down 20px
  const toggleVisibility = () => {
    if (window.screenY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 20,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <div>
      {/* Main footer container with responsive background */}
      <div className="bg-thirdSectionBg w-full text-white">
        {/* Content wrapper with responsive padding and gap: Mobile: gap-8 py-8, Tablet: gap-12 py-12, Desktop: gap-24 py-16 */}
        <div className="flex flex-col lg:flex-row justify-around items-center
          gap-8 py-8 px-4
          sm:gap-12 sm:py-12 sm:px-6
          md:gap-16 md:py-14
          lg:gap-24 lg:py-16">
          {/* Logo and brand section - Responsive flex layout */}
          <div className="flex items-center justify-center flex-wrap
            gap-2
            sm:gap-3
            md:gap-4">
            {/* Logo image with responsive sizing */}
            <div className="text-center cursor-pointer transition-opacity duration-300 opacity-100">
              <Link to={"/"}>
                <img
                  src="/logob.png"
                  className="object-contain
                    w-16 h-16
                    sm:w-20 sm:h-20
                    md:w-24 md:h-24"
                  alt=""
                />
              </Link>
            </div>
            {/* Brand text with responsive sizing */}
            <Link to={"/"}>
              <div className="font-LogoFont cursor-pointer transition-opacity duration-300 opacity-100
                text-base
                sm:text-lg
                md:text-xl
                lg:text-2xl
                max-w-[140px]
                sm:max-w-[160px]
                md:max-w-[180px]">
                Build Career FOUNDATION
              </div>
            </Link>
          </div>
          {/* Navigation links section with responsive layout and spacing */}
          <div className="flex flex-col tablet:flex-row font-normal justify-center items-center
            text-sm
            sm:text-base
            gap-3
            sm:gap-4
            md:gap-2">
            
              {/* Individual nav links with responsive padding */}
              <Link to="/WhoWeArePage">
                <div
                  className={`hover:text-thankYouColor cursor-pointer transition-opacity duration-300 opacity-100
                    py-1
                    tablet:px-2
                    md:px-3
                    ${hover.isWhoWeAre ? "text-thankYouColor" : ""}`}
                  onClick={() => {
                    console.log(hover);
                    setHover({
                      isLanding: false,
                      isWhoWeAre: true,
                      isImpact: false,
                      isContact: false,
                      isHowDoesWork: false,
                      isActivities: false,
                      isActivitiesDetail: false,
                      isDonate: false,
                      isFaq: false,
                    });
                    scrollToTop();
                  }}
                >
                  Who We Are
                </div>
              </Link>

              <Link to="/ImpactPage">
                <div
                  className={`hover:text-thankYouColor cursor-pointer transition-opacity duration-300 opacity-100
                    py-1
                    tablet:px-2
                    md:px-3
                    ${hover.isImpact ? "text-thankYouColor" : ""}`}
                  onClick={() => {
                    setHover({
                      isLanding: false,
                      isWhoWeAre: false,
                      isImpact: true,
                      isContact: false,
                      isHowDoesWork: false,
                      isActivities: false,
                      isActivitiesDetail: false,
                      isDonate: false,
                      isFaq: false,
                    });
                    scrollToTop();
                  }}
                >
                  Impact
                </div>
              </Link>

              <Link to="/HowDoesGivingWorkPage">
                <div
                  className={`hover:text-thankYouColor cursor-pointer
                    py-1
                    tablet:px-2
                    md:px-3
                    ${hover.isHowDoesWork ? "text-thankYouColor" : ""}`}
                  onClick={() => {
                    setHover({
                      isLanding: false,
                      isWhoWeAre: false,
                      isImpact: false,
                      isContact: false,
                      isHowDoesWork: true,
                      isActivities: false,
                      isActivitiesDetail: false,
                      isDonate: false,
                      isFaq: false,
                    });
                    scrollToTop();
                  }}
                >
                  How Does BCF works
                </div>
              </Link>

              <Link to="/FrequentAskedQuestions">
                <div
                  className={`hover:text-thankYouColor cursor-pointer
                    py-1
                    tablet:px-2
                    md:px-3
                    ${hover.isFaq ? "text-thankYouColor" : ""}`}
                  onClick={() => {
                    setHover({
                      isLanding: false,
                      isWhoWeAre: false,
                      isImpact: false,
                      isContact: false,
                      isHowDoesWork: false,
                      isActivities: false,
                      isActivitiesDetail: false,
                      isDonate: false,
                      isFaq: true,
                    });
                    scrollToTop();
                  }}
                >
                  FAQ
                </div>
              </Link>


              <Link to="/ContactPage">
                <div
                  className={`hover:text-thankYouColor cursor-pointer
                    py-1
                    tablet:px-2
                    md:px-3
                    ${hover.isContact ? "text-thankYouColor" : ""}`}
                  onClick={() => {
                    setHover({
                      isLanding: false,
                      isWhoWeAre: false,
                      isImpact: false,
                      isContact: true,
                      isHowDoesWork: false,
                      isActivities: false,
                      isActivitiesDetail: false,
                      isDonate: false,
                      isFaq: false,
                    });
                    scrollToTop();
                  }}
                >
                  Contact Us
                </div>
              </Link>

              <Link to="/LoginIn">
                <div
                  className="hover:text-thankYouColor cursor-pointer
                    py-1
                    tablet:px-2
                    md:px-3"
                  onClick={() => {
                    setHover({
                      isLanding: false,
                      isWhoWeAre: false,
                      isImpact: false,
                      isContact: false,
                      isHowDoesWork: false,
                      isActivities: false,
                      isActivitiesDetail: false,
                      isDonate: false,
                      isFaq: false,
                    });
                    scrollToTop();
                  }}
                >
                  Login as Admin
                </div>
              </Link>
          </div>
        </div>
      </div>
      {/* Copyright section with responsive height and text: Mobile: h-14 text-xs, Tablet: h-16 text-sm, Desktop: h-[70px] text-sm */}
      <div className="bg-thirdSectionBg flex justify-center
        h-14
        sm:h-16
        md:h-[70px]">
        <div className="w-widthOfScreen h-full flex items-center justify-center text-white
          text-xs px-4
          sm:text-sm
          md:text-base">
          <span>&copy; &nbsp;</span>  {currentYear} Build Career Foundation
        </div>
      </div>
    </div>
  );
};

export default FooterComponentOne;
