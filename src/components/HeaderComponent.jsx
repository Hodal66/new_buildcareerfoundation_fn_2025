/**
 * HeaderComponent
 * Fully responsive navigation header with mobile menu
 * Breakpoints: Mobile (< 768px), Tablet/Desktop (>= 1024px)
 */

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HoveringContext } from "../App";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import styles from "../styles";
import PhoneHeader from "./PhoneHeader";
import BtnComponentBlue from "./Buttons/BtnComponentBlue";

export const HeaderComponent = () => {
  const [hover, setHover] = useContext(HoveringContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`${styles.paddingX} ${styles.blueGradient} h-20 sm:h-24 md:h-32 lg:h-40 flex justify-center`}
    >
      <div className="w-full flex h-full text-white font-montiseramwa">
        <div className="flex justify-between items-center w-full">
          {/* Logo and Brand Name - Responsive sizing */}
          <div
            className="flex justify-center items-center cursor-pointer"
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
              navigate("/#");
            }}
          >
            {/* Logo - Responsive sizing */}
            <div className="cursor-pointer px-2 sm:px-4 md:px-0">
              <img
                src="/logob.png"
                className="w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-20 lg:w-32 lg:h-28 object-contain"
                alt="Build Career Foundation Logo"
              />
            </div>

            {/* Brand Text - Responsive font sizing */}
            <div className="font-LogoFont text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl cursor-pointer flex justify-center items-center md:pt-8 lg:pt-14">
              <div>
                <p>Build Career</p>
                <p>FOUNDATION</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <div className="hidden lg:flex text-sm xl:text-base justify-center items-center font-normal space-x-2 xl:space-x-4">
            <Link to="/WhoWeArePage">
              <div
                className={`hover:text-thankYouColor cursor-pointer transition-colors duration-200 ${
                  hover.isWhoWeAre
                    ? "text-thankYouColor border-b-2 border-thankYouColor"
                    : ""
                }`}
                onClick={() => {
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
                }}
              >
                Who We Are
              </div>
            </Link>

            <Link to="/ImpactPage">
              <div
                className={`hover:text-thankYouColor cursor-pointer transition-colors duration-200 ${
                  hover.isImpact
                    ? "text-thankYouColor border-b-2 border-thankYouColor"
                    : ""
                }`}
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
                }}
              >
                Impact
              </div>
            </Link>

            <Link to="/ActivitiesPage">
              <div
                className={`hover:text-thankYouColor cursor-pointer transition-colors duration-200 ${
                  hover.isActivities
                    ? "text-thankYouColor border-b-2 border-thankYouColor"
                    : ""
                }`}
                onClick={() => {
                  setHover({
                    isLanding: false,
                    isWhoWeAre: false,
                    isImpact: false,
                    isContact: false,
                    isHowDoesWork: false,
                    isActivities: true,
                    isActivitiesDetail: false,
                    isDonate: false,
                    isFaq: false,
                  });
                }}
              >
                Activities
              </div>
            </Link>

            <Link to="/HowDoesGivingWorkPage">
              <div
                className={`hover:text-thankYouColor cursor-pointer transition-colors duration-200 ${
                  hover.isHowDoesWork
                    ? "text-thankYouColor border-b-2 border-thankYouColor"
                    : ""
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
                }}
              >
                How Does BCF works
              </div>
            </Link>

            <Link to="/DonatePage">
              <div
                onClick={() => {
                  setHover({
                    isLanding: false,
                    isWhoWeAre: false,
                    isImpact: false,
                    isContact: false,
                    isHowDoesWork: false,
                    isActivities: false,
                    isActivitiesDetail: false,
                    isDonate: true,
                    isFaq: false,
                  });
                }}
              >
                <BtnComponentBlue title="DONATE" />
              </div>
            </Link>
          </div>

          {/* Mobile Phone Header Navigation */}
          <div className="lg:hidden">
            <PhoneHeader
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
              setCloseMenu={setCloseMenu}
              closeMenu={closeMenu}
            />
          </div>
        </div>

        {/* Hamburger Menu Icon - Mobile/Tablet only */}
        <div className="pt-4 sm:pt-6 md:pt-12 lg:pt-16 pe-2 sm:pe-4">
          {!openMenu ? (
            <div
              onClick={() => {
                setOpenMenu(!openMenu);
                setCloseMenu(true);
              }}
              className="cursor-pointer"
            >
              <RxHamburgerMenu className="lg:hidden block text-2xl sm:text-3xl md:text-4xl transition-transform hover:scale-110" />
            </div>
          ) : (
            <div onClick={() => setOpenMenu(!openMenu)} className="cursor-pointer">
              <RxCross2 className="lg:hidden block text-2xl sm:text-3xl md:text-4xl transition-transform hover:scale-110" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
