/* eslint-disable react/prop-types */
import { BiSolidDonateHeart } from "react-icons/bi";

import {
  MdOutlineCastForEducation,
  MdContentPasteSearch,
} from "react-icons/md";
import logo from "../../../../public/GivebackLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";
import { useContext } from "react";
import { HoveringContext } from "../../../App";

const AsideAdmin = ({
  linkingToTheAsideAndMainPage,
  setLinkingToTheAsideAndMainPage,
}) => {
  const [hover,setHover] = useContext(HoveringContext);
  console.log(hover);
  const navigate = useNavigate();

  return (
    <aside className="bg-white sm:col-start-1 sm:col-end-3 md:col-end-4 lg:col-end-3 hidden sm:block text-black row-span-full border-r-2 border-solid border-[#f3f3f3]">
      <Link to="/">
        <img src={logo} className="mx-7 mt-3" />
      </Link>
      <br />
      <div className="text-xl tracking-wider m-auto font-semibold mt-8 ml-3 mb-3 flex justify-evenly">
        <MdContentPasteSearch className="text-[26px] text-darkBluePhant" />
        <p>Posts overview</p>
      </div>
      <p className="text-xl tracking-wider  m-auto font-bold mt-3 ml-3 mb-2 ">
        Management
      </p>
      <div className="flex flex-col">
        <div
          className={`flex pl-5  gap-5 py-2 hover:bg-[#f3f3f3] w-full cursor-pointer ${
            linkingToTheAsideAndMainPage.isPostClicked ? "bg-[#f3f3f3]" : ""
          }`}
          onClick={() => {
            setLinkingToTheAsideAndMainPage(() => {
              return {
                isPostClicked: true,
                isVisitorsClicked: false,
              };
            });
          }}
        >
          <MdOutlineCastForEducation
            size={30}
            className=" text-darkBluePhant "
          />
          <p className="ml-1 px-3 hover:bg-[#f3f3f3] w-full">Post</p>
        </div>
        <div
          className={`flex pl-5  gap-5 py-2 hover:bg-[#f3f3f3] w-full cursor-pointer ${
            linkingToTheAsideAndMainPage.isVisitorsClicked ? "bg-[#f3f3f3]" : ""
          }`}
          onClick={() => {
            setLinkingToTheAsideAndMainPage(() => {
              return {
                isPostClicked: false,
                isVisitorsClicked: true,
              };
            });
          }}
        >
          <BiSolidDonateHeart
            size={30}
            className="text-darkBluePhant hover:text-white"
          />
          <p className="ml-1 px-3">Visitors</p>
        </div>
        <div
          className="flex pl-5  gap-5 py-2 hover:bg-darkBluePhant w-full cursor-pointer"
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
            navigate("/ActivitiesPage")
          }}
        >
          {/* <Link to="/ActivitiesPage" className="flex"> */}
            <GiReturnArrow size={25} className="mt-1 text-red-600" />
            <p className="ml-1 px-3">Back to Posts Page</p>
          {/* </Link> */}
        </div>
      </div>
    </aside>
  );
};

export default AsideAdmin;
