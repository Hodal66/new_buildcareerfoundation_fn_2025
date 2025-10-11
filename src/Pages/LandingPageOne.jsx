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
import { Link } from "react-router-dom";

export default function LandingPageOne() {
  return (
    <div>
      <HeaderComponent />
      {/* Hero Section - Fully responsive with mobile-first approach */}
      <div
        className={`${styles.paddingX} bg-gradient-to-r from-grad1 via-grad2 to-grad3 pb-12 sm:pb-16 md:pb-20 lg:pb-24 flex justify-between w-full pt-0`}
      >
        <div className="w-full h-full grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-2 xl:grid-cols-2 justify-between pt-6 sm:pt-8 font-montiseramwa text-bgGray">
          {/* Left Content Section - Text and CTA */}
          <div className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6 order-1">
            {/* Main Heading - Responsive text size */}
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] text-thankYouColor font-semibold leading-tight">
              Guided choices, brighter futures.
            </div>

            {/* Subheading - Responsive text size */}
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-titleSize font-medium">
              Did you care today?
            </div>

            {/* Description - Responsive text and padding */}
            <div className="text-sm sm:text-base md:text-lg lg:text-paragraSize mx-auto w-full">
              <p className="text-justify leading-relaxed">
                At Build Career Foundation, We believe that everybody needs
                someone and someone can be everybody.
              </p>
            </div>

            {/* CTA Button */}
            <Link to="/WhoWeArePage" className="w-fit">
              <BtnComponentOrange title={"Learn More"} />
            </Link>
          </div>

          {/* Right Image Grid Section - Responsive layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 h-auto sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[72vh] order-2 pl-0 sm:pl-4 md:pl-8 lg:pl-16">
            {/* Left Column */}
            <div className="h-[400px] sm:h-full flex flex-col gap-3 sm:gap-4">
              <div className="h-2/3">
                <img
                  src="/images/1.jpg"
                  alt="Build Career Foundation Activity"
                  className="h-full object-cover w-full rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-roundedBox"
                />
              </div>
              <div className="h-1/3">
                <img
                  src="/images/2.jpg"
                  alt="Build Career Foundation Community"
                  className="h-full object-cover w-full rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-roundedBox"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="h-[400px] sm:h-full flex flex-col gap-3 sm:gap-4">
              <div className="h-1/3">
                <img
                  src="/images/3.jpg"
                  alt="Build Career Foundation Students"
                  className="h-full object-cover w-full rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-roundedBox"
                />
              </div>
              <div className="h-2/3">
                <img
                  src="/images/4.jpg"
                  alt="Build Career Foundation Impact"
                  className="h-full object-cover w-full rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-roundedBox"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second section  */}
      <section>
        <div className={`${styles.greenGradient} pt-16 font-bold`}>
          {/* <Heading1 classNameProps={"text-white"} Title={"OUR MISSION"} />
          <Heading1
            classNameProps={"text-white"}
            Title={
              "More people, giving more, more often, to more charitable organizations."
            }
          /> */}
          <OurMissionCard />
        </div>
      </section>

      {/* Notice Section - Fully responsive white card with centered content */}
      <section className="MainSection">
        <div
          className={`${styles.paddingX} ${styles.greenGradient} flex justify-center items-center pb-12 sm:pb-16 md:pb-20 lg:pb-24`}
        >
          <div
            className={`p-4 sm:p-6 md:p-8 lg:p-12 xl:px-16 xl:py-8 mx-2 sm:mx-4 md:mx-0 bg-white rounded-xl md:rounded-2xl lg:rounded-roundedBox font-montiseramwa text-black font-normal text-center max-w-4xl`}
          >
            {/* Main Heading - Responsive text size and line height */}
            <div className="leading-tight sm:leading-snug md:leading-normal lg:leading-10 text-xl sm:text-2xl md:text-3xl lg:text-3xl">
              <Heading1
                Title={"IMPORTANT NOTICE FROM BUILD CAREER FOUNDATION"}
              />
            </div>

            {/* Subheading - Responsive text size */}
            <div className="text-sm sm:text-base md:text-lg pt-2 sm:pt-3 font-medium">
              BUILD CAREER FOUNDATION is committed to nurturing excellence.
            </div>

            {/* Content Paragraph - Responsive text and spacing */}
            <div className="text-sm sm:text-base md:text-lg py-4 sm:py-5 md:py-6 mx-auto">
              <p className="text-justify leading-relaxed">
                Our support is directed toward students who demonstrate both academic excellence and come from disadvantaged backgrounds. By prioritizing those who demonstrate potential yet face significant barriers, we ensure that our resources create transformative impact for the individual and the broader community.
              </p>
            </div>

            {/* CTA Button */}
            <Link to="/ContactPage">
              <BtnComponentOrange title={"CONTACT US"} />
            </Link>
          </div>
        </div>
      </section>
      {/* Gallery Section - Fully responsive image grid */}
      <section
        className={`${styles.paddingX} ${styles.flexStartCol} ${styles.paddingY} gap-4 sm:gap-5 md:gap-6 bg-thirdSectionBg`}
      >
        {/* First Row - 5/7 split on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 md:gap-6 w-full">
          <div className="lg:col-span-5">
            <img
              src="/images/5.jpg"
              alt="Build Career Foundation Gallery Image"
              className="h-48 sm:h-56 md:h-72 lg:h-80 xl:h-[360px] w-full object-cover rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-roundedBox"
            />
          </div>
          <div className="lg:col-span-7">
            <img
              src="/images/6.jpg"
              alt="Build Career Foundation Community Event"
              className="h-48 sm:h-56 md:h-72 lg:h-80 xl:h-[360px] w-full object-cover rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-roundedBox"
            />
          </div>
        </div>

        {/* Second Row - 7/5 split on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 md:gap-6 w-full">
          <div className="lg:col-span-7">
            <img
              src="/images/8.jpg"
              alt="Build Career Foundation Student Success"
              className="h-48 sm:h-56 md:h-72 lg:h-80 xl:h-[360px] w-full object-cover rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-roundedBox"
            />
          </div>
          <div className="lg:col-span-5">
            <img
              src="/images/9.jpg"
              alt="Build Career Foundation Achievements"
              className="h-48 sm:h-56 md:h-72 lg:h-80 xl:h-[360px] w-full object-cover rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-roundedBox"
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
