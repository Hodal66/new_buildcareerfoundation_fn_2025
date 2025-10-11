import { useContext } from "react";
import { Link } from "react-router-dom";
// import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
// import styles from "../styles";
import { HoveringContext } from "../App";
import BtnComponentBlue from "./Buttons/BtnComponentBlue";

// eslint-disable-next-line react/prop-types
function PhoneHeader({ openMenu,setOpenMenu }) {
  const [hover] = useContext(HoveringContext);
  return (
    <div>
        {/* Mobile menu container with responsive padding */}
        <div className="px-2 sm:px-4">
            {/* Slide-in menu with responsive positioning and spacing */}
            {/* Mobile: top-[60px] py-12, Tablet: top-[72px] py-16 */}
            <div className={`z-50 absolute w-full h-screen
              bg-gradient-to-r from-grad1 via-grad2 to-grad3
              font-normal flex flex-col justify-start items-center
              duration-500 transition-all
              px-3 py-12 top-[60px]
              sm:px-4 sm:py-16 sm:top-[72px]
              md:top-[80px]
              gap-6
              sm:gap-8
              text-sm
              sm:text-base
              ${openMenu ? "left-0" : "left-[-100%]"}`}>
             {/* Navigation links with responsive spacing and text */}
             <Link to="/WhoWeArePage">
             <div
                className={`hover:text-thankYouColor cursor-pointer border-thankYouColor
                  transition-colors duration-200
                  ${hover.isWhoWeAre ? "text-thankYouColor border-b-2" : ""}`}
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                Who We Are
              </div>
              </Link>

              <Link to="/ImpactPage">
                <div
                  className={`hover:text-thankYouColor cursor-pointer
                    transition-colors duration-200
                    ${hover.isImpact ? "text-thankYouColor border-b-2 border-thankYouColor" : ""}`}
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                >
                  Impact
                </div>
              </Link>

              <Link to="/ActivitiesPage">
                <div
                  className={`hover:text-thankYouColor cursor-pointer
                    transition-colors duration-200
                    ${hover.isActivities ? "text-thankYouColor border-b-2 border-thankYouColor" : ""}`}
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                >
                  Activities
                </div>
              </Link>

              <Link to="/HowDoesGivingWorkPage">
                <div
                  className={`hover:text-thankYouColor cursor-pointer
                    transition-colors duration-200
                    ${hover.isHowDoesWork ? "text-thankYouColor border-b-2 border-thankYouColor" : ""}`}
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                >
                  How Does BCF works
                </div>
              </Link>

              <Link to="/DonatePage">
                <div
                  className={`hover:text-thankYouColor
                    ${hover.isDonate ? "text-thankYouColor border-b-2 border-thankYouColor" : ""}`}
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                >
                  <BtnComponentBlue title="DONATE"/>
                </div>
              </Link>
            </div>
        </div>
    </div>
  );
}

export default PhoneHeader;
