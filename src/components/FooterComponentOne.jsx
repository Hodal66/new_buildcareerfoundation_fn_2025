/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HoveringContext } from "../App";
import styles from "../styles";
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
      <div className={`${styles.paddingX} bg-thirdSectionBg w-full text-white`}>
        <div className=" flex flex-col lg:flex-row gap-24 justify-around py-24">
          <div
            className="flex phone:w-[300px] w-full pl-[70px] phone:pl-0"
         
          >
            <div className=" phone:w-[90px] w-1/4 text-center cursor-pointer transition-opacity duration-300 opacity-100">
              <Link to={"/"}>
                <img
                  src="/logob.png"
                  className="phone:w-[80px] w-full h-[80px] "
                  alt=""
                />
              </Link>
            </div>
            <Link to={"/"}>
              <div className="phone:w-[140px] w-2/4 font-LogoFont ml-4 phone:ml-0 text-2xl cursor-pointer transition-opacity duration-300 opacity-100">
                Build Career FOUNDATION
              </div>
            </Link>
          </div>
          <div className=" grid md:grid-cols-3 lg:grid-cols-12 gap-2 font-normal justify-center items-center text-base">
            <div className="col-span-2">
              <Link to="/WhoWeArePage">
                <div
                  className={`hover:text-thankYouColor phone:mr-6 cursor-pointer transition-opacity duration-300 opacity-100 ${
                    hover.isWhoWeAre ? "text-thankYouColor" : ""
                  }`}
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
            </div>
            <div className="col-span-1">
              <Link to="/ImpactPage">
                <div
                  className={`hover:text-thankYouColor cursor-pointer transition-opacity duration-300 opacity-100 ${
                    hover.isImpact ? "text-thankYouColor" : ""
                  } px-4`}
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
            </div>
            <div className="col-span-3">
              <Link to="/HowDoesGivingWorkPage">
                <div
                  className={`hover:text-thankYouColor phone:mr-6  cursor-pointer phone:px-4 ${
                    hover.isHowDoesWork ? "text-thankYouColor" : ""
                  }`}
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
            </div>
            <div className="col-span-1">
              <Link to="/FrequentAskedQuestions">
                <div
                  className={`hover:text-thankYouColor cursor-pointer ${
                    hover.isFaq ? "text-thankYouColor" : ""
                  }`}
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
            </div>
            <div className="col-span-2">
              <Link to="/ContactPage">
                <div
                  className={`hover:text-thankYouColor phone:mr-6 cursor-pointer phone:px-4 ${
                    hover.isContact ? "text-thankYouColor" : ""
                  }`}
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
                  Contact
                </div>
              </Link>
            </div>
            <div className="col-span-3">
              <Link to="/LoginIn">
                <div
                  className={`hover:text-thankYouColor cursor-pointer`}
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
      </div>
      <div className="bg-thirdSectionBg h-[70px] flex justify-center">
        <div className="w-widthOfScreen h-full text-sm flex items-center justify-center text-white">
          <span>&copy; &nbsp;</span>  {currentYear} Build Career Foundation !!!
        </div>
      </div>
    </div>
  );
};

export default FooterComponentOne;
