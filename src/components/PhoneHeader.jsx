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
        <div className="px-4">
            <div className={`z-50 absolute  px-4 py-16 top-[72px] w-full text-base  bg-gradient-to-r from-grad1 via-grad2 to-grad3  h-screen font-normal flex flex-col  justify-start items-center gap-8
            duration-500 ${openMenu ? "left-0" : "left-[-100%]"}`}>
             <Link to="/WhoWeArePage">
             <div
                className={`hover:text-thankYouColor cursor-pointer border-thankYouColor ${
                  hover.isWhoWeAre
                    ? "text-thankYouColor border-b-2 "
                    : ""
                }`}
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                Who We Are
                {/* <Link to="/WhoWeArePage">Who We Are</Link> */}
              </div>
              </Link> 
              
           

              <Link to="/ImpactPage">
                <div
                  className={`hover:text-thankYouColor cursor-pointer ${
                    hover.isImpact
                      ? "text-thankYouColor border-b-2 border-thankYouColor"
                      : ""
                  } mx-4`}
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                >
                  {/* <div className="hover:text-thankYouColor cursor-pointer px-4"> */}
                  Impact
                </div>
              </Link>
              <Link to="/ActivitiesPage">
                <div
                  className={`hover:text-thankYouColor cursor-pointer ${
                    hover.isActivities
                      ? "text-thankYouColor border-b-2 border-thankYouColor"
                      : ""
                  }`}
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                >
                  {/* <div className="hover:text-thankYouColor cursor-pointer"> */}
                  Activities
                </div>
              </Link>
              <Link to="/HowDoesGivingWorkPage">
                <div
                  className={`hover:text-thankYouColor cursor-pointer mx-4 ${
                    hover.isHowDoesWork
                      ? "text-thankYouColor border-b-2 border-thankYouColor"
                      : ""
                  }`}
                  onClick={() => {
                  
                    setOpenMenu(false);
                  }}
                >
                  {/* <div className="hover:text-thankYouColor cursor-pointer px-4"> */}
                  How Does BCF works
                </div>
              </Link>
              <Link to="/DonatePage">
                <div
                  className={`hover:text-thankYouColor ${
                    hover.isDonate
                      ? "text-thankYouColor border-b-2 border-thankYouColor"
                      : ""
                  }`}
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
