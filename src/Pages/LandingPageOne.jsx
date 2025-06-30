/* eslint-disable react-hooks/exhaustive-deps */
// import React from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import styles from "../styles";
import BtnComponentOrange from "../components/Buttons/BtnComponentOrange";
import OurMissionCard from "../components/Cards/OurMissionCard";
import Heading1 from "../components/Headings/Heading1";
import ProgressCard from "../components/Cards/ProgressCard";
import SubcriptionComponent from "../components/SubcriptionComponent";

export default function LandingPageOne() {
  return (
    <div>
      <HeaderComponent />
      <div
        className={` ${styles.paddingX}  bg-gradient-to-r from-grad1 via-grad2 to-grad3 pb-24
        flex justify-between w-full pt-0`}
      >
        <div
          className=" lg:mx-0 w-full h-full  grid grid-cols-1 gap-16 lg:gap-2 lg:grid-cols-2 justify-between pt-8 
        font-montiseramwa text-bgGray "
        >
          <div className="w-full flex flex-col gap-6">
            <div className="text-[36px] md:text-[48px]  text-thankYouColor font-semibold">
              Thank you for building someone&apos;s career !!
            </div>
            <div className="text-titleSize">Did you care today?</div>
            <div className="md:text-paragraSize mx-auto">
              <p className="text-justify">
                At Build Career Foundation, We believe that everybody needs
                someone and someone can be everybody.
              </p>
            </div>
            <BtnComponentOrange title={"Learn More"} />
          </div>
          <div className="grid grid-cols-12 pl-16 gap-4 h-[72vh]">
            <div className="col-span-6 h-full ">
              <div className="h-2/3 pb-4">
                <img
                  src="/carrer.jpg"
                  alt="business"
                  className="h-full object-cover w-full rounded-roundedBox"
                />
              </div>{" "}
              <div className="h-1/3">
                <img
                  src="/carrer.jpg"
                  alt="business"
                  className="h-full object-cover w-full rounded-roundedBox"
                />
              </div>
            </div>
            <div className="col-span-6 h-full">
              <div className="h-1/3 ">
                <img
                  src="/carrer.jpg"
                  alt="business"
                  className="h-full object-cover w-full rounded-roundedBox"
                />
              </div>{" "}
              <div className="h-2/3 pt-4">
                <img
                  src="/carrer.jpg"
                  alt="business"
                  className="h-full object-cover w-full rounded-roundedBox"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second section  */}
      <section>
        <div className={`${styles.greenGradient} pt-16 font-bold`}>
          <Heading1 classNameProps={"text-white"} Title={"OUR MISSION"} />
          <Heading1
            classNameProps={"text-white"}
            Title={
              "More people, giving more, more often, to more charitable organizations."
            }
          />
          <OurMissionCard />
        </div>
      </section>

      <section className="MainSection">
        <div
          className={` ${styles.paddingX} ${styles.greenGradient}  flex justify-center items-center pb-24`}
        >
          <div
            className={`p-4 md:mx-0 lg:px-16 lg:py-8 bg-white rounded-roundedBox  font-montiseramwa text-black font-normal text-center`}
          >
            <div className="leading-10 lg:text-3xl text-2xl">
              <Heading1
                Title={"IMPORTANT NOTICE FROM BUILD CAREER FOUNDATION"}
              />
            </div>
            <div className="text-base pt-2">
              BUILD CAREER FOUNDATION is committed to nurturing excellence.
            </div>

            <div className="text-base py-4 mx-auto ">
              <p className="text-justify">
                We firmly believe that quality support is more impactful than
                sheer quantity. As a result, we concentrate our resources on
                assisting the best performing students. By identifying the most
                determined and hardworking students, we ensure that our support
                has a transformative impact on their lives, and ultimately on
                the wider community.
              </p>
            </div>

            <BtnComponentOrange title={"CONTACT US"} />
          </div>
        </div>
      </section>
      {/* Third section  */}
      {/* Third section  */}
      <section
        className={`${styles.paddingX} ${styles.flexStartCol} ${styles.paddingY} gap-6 bg-thirdSectionBg `}
      >
        <div className="grid col-span-1 md:col-span-3 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-5">
            <img
              src="/carrer.jpg"
              alt="image3"
              className="h-[360px] w-full rounded-roundedBox"
            />
          </div>
          <div className="lg:col-span-4">
            <img
              src="/carrer.jpg"
              alt="image3"
              className="h-[360px] rounded-roundedBox"
            />
          </div>
          <div className="lg:col-span-3">
            <img
              src="/carrer.jpg"
              alt="image3"
              className="h-[360px] rounded-roundedBox"
            />
          </div>
        </div>

        <div className="grid col-span-1 md:col-span-2 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-7">
            <img
              src="/carrer.jpg"
              alt="image3"
              className="h-[360px] w-full rounded-roundedBox"
            />
          </div>
          <div className="lg:col-span-5">
            <img
              src="/carrer.jpg"
              alt="image3"
              className="h-[360px] w-full rounded-roundedBox"
            />
          </div>
        </div>
      </section>
      {/* Progress Section */}

      <section>
        <ProgressCard />
      </section>
      <section>
        <SubcriptionComponent />
      </section>
      <FooterComponent />
    </div>
  );
}
