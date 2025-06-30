import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HoveringContext } from "../App";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import styles from "../styles";
import PhoneHeader from "./PhoneHeader";
import BtnComponentBlue from "./Buttons/BtnComponentBlue";
// import PhoneHeaderNav from "./Common/PhoneHeaderNav";
export const HeaderComponent = () => {
  const [hover, setHover] = useContext(HoveringContext);
  const [openMenu,setOpenMenu] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className={`${styles.paddingX} ${styles.blueGradient} h-[80px] md:h-[160px]  flex justify-center`}
    >
      <div className="w-full flex h-full text-white font-montiseramwa">
        <div className="flex justify-between items-center w-full ">
          <div
            className="flex justify-center items-center"
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
            <div className={` cursor-pointer  px-4 md:px-0 `}>
              {/* <div className="w-[90px] text-center cursor-pointer"> */}
              <img src="/logob.png" className="  w-[80px] h-[60px] md:w-[130px] md:h-[120px]" alt="" />
            </div>
            <div className=" font-LogoFont text-xl md:text-3xl cursor-pointer flex justify-center items-center md:pt-14 ">
           <div> <p>Build Career </p>
              <p>FOUNDATION</p></div>
            </div>
          </div>
          <div className=" hidden lg:flex text-base justify-center items-center font-normal">
            <Link to="/WhoWeArePage">
            <div
              className={`hover:text-thankYouColor cursor-pointer ${
                hover.isWhoWeAre
                  ? "text-thankYouColor border-b-2 border-thankYouColor"
                  : ""
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
                {/* <div className="hover:text-thankYouColor cursor-pointer px-4"> */}
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
          {/* <PhoneHeaderNav /> */}
               <div className="lg:hidden">
               <PhoneHeader openMenu={openMenu} setOpenMenu={setOpenMenu} setCloseMenu={setCloseMenu} closeMenu={closeMenu}/>
               </div>
          
        </div>
      <div className="pt-6 md:pt-24 pe-4">
      {!openMenu ? (
            <div onClick={()=>{setOpenMenu(!openMenu);
              setCloseMenu(true)}
            } >
              <RxHamburgerMenu
              className="lg:hidden block text-4xl"
            />
            </div>
          ) : (
          <div onClick={()=>setOpenMenu(!openMenu)}><RxCross2  className="lg:hidden block text-4xl"/></div>
          )}
      </div>
      </div>
    </div>
  );
};
