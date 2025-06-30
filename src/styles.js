 const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
    heading1:
      "font-poppins font-semibold xs:text-[40px] text-[32px] text-white xs:leading-[32.8px] leading-[66.8px] w-full ",
    heading2:
      "font-poppins font-semibold xs:text-[32px] text-[24px] text-white xs:leading-[28.8px] leading-[32.8px] w-full pb-4",
    heading3:
      "font-poppins font-semibold xs:text-[24px] text-[16px] text-white xs:leading-[24.8px] leading-[28.8px] w-full",
    paragraph:
      "font-poppins font-normal text-dark-500 text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-start items-start",
    flexStartCol: "flex flex-col justify-start items-start",
    flexCenterCol: "flex justify-center items-center flex-col",
    flexBetween: "flex justify-between w-full items-center",
    paddingX: "px-4 md:px-8 lg:px-16",
    paddingY: "py-12 md:py-16",
    paddingInside:"p-4 sm:p-8 md:p-16",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
    skyGradient: "bg-gradient-to-t from-sky-800 via-sky-500 to-sky-400 p-10",
    greenGradient: "bg-gradient-to-r from-secondGrad1 via-secondGrad2 to-secondGrad3",
    blueGradient:"bg-gradient-to-r from-grad1 via-grad2 to-grad3",
    marginX: "sm:mx-16 mx-32",
    marginY: "sm:my-16 my-6",
    transitionAll : "transition-all duration-500",
    innerShadow: "shadow-inner bg-blue-500 bg-opacity-50 text-white p-4",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export const btnStyle = {
    defaultBtn:
      "bg-gradient-to-r from-sky-600 via-green-300 to-sky-400 text-white hover:cursor-pointer hover:text-sky-100 transition-all duration-300 flex justify-center items-center rounded-lg",
  
    smallBtn: ` h-8 px-8 py-2`,
  
    mediumBtn: ` h-12 px-8 py-4 text-xl`,
  
    bigBtn: ` h-16 px-24 py-16`,
  
    textBtnIcon: "text-2xl",
  };
  
  // export const icons = {
  //   btnIcon1: <ion-icon name="arrow-forward-circle-outline"></ion-icon>,
  // };
  export default styles;
  
