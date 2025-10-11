/* eslint-disable react/prop-types */
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import DonationOption from "../Common/DonationOption";
import styles from "../../styles";

const CardOfDonationsVissa = ({isCardVisible,SetIsCardVisible}) => {
 
  return (
    <div className="h-fit">
    {/* Header card with responsive padding and text: Mobile: p-2 text-lg, Tablet: p-3 text-xl, Desktop: p-4 text-2xl */}
    <div
      onClick={() => {
        SetIsCardVisible((prevState) => {
          return {
            bank:  false,
            phone: false,
            goFindMe: false,
            cash: false,
            visa:!prevState.visa,
          };
        });
      }}
      className={`w-full font-medium cursor-pointer hover:bg-gradient-to-l flex items-center justify-between
        ${styles.blueGradient} ${styles.transitionAll}
        text-white border border-gray-200 rounded-lg shadow
        p-2
        sm:p-3
        md:p-4`}
    >
      {/* Title with responsive text size: Mobile: text-lg, Tablet: text-xl, Desktop: text-2xl */}
      <div className="
        text-lg
        sm:text-xl
        md:text-2xl">
        By vissaCard
      </div>
      {/* Icons with responsive size: Mobile: text-2xl, Tablet: text-3xl, Desktop: text-4xl */}
      {isCardVisible.visa ? (
        <CiCircleMinus className="text-gradColor
          text-2xl
          sm:text-3xl
          md:text-4xl" />
      ) : (
        <CiCirclePlus className="
          text-2xl
          sm:text-3xl
          md:text-4xl" />
      )}
    </div>
    {/* Expanded content with responsive padding and text: Mobile: p-3 text-sm, Tablet: p-4 text-base, Desktop: p-5 text-xl */}
    {isCardVisible.visa && (
      <div className="w-full h-fit bg-gray-200 text-black border border-gray-200 rounded-lg shadow
        p-3 text-sm
        sm:p-4 sm:text-base
        md:p-5 md:text-xl">
       <DonationOption />
        {/* Contact info sections with responsive spacing */}
        <div className="mb-3 sm:mb-4">
          <span className="font-semibold">
            Mobile Money Number (Internal & External Transfers)
          </span>{" "}
          <br /> +250 791 677 236 Registered on GROWN TO HELP
        </div>
        <div className="mb-3 sm:mb-4">
          <span className="font-semibold">
            {" "}
            Mobile Money Code (Internal Transfers)
          </span>{" "}
          <br /> *182*8*1*277824# Registered on GROWN TO HELP
        </div>
        <div className="text-sm sm:text-base md:text-lg">
          We're available to take your call Monday to Friday from 8am to 5pm
          Kigali Time.
        </div>
        <div className="text-blue-500
          mt-2
          sm:mt-3
          md:mt-4">
          Fill donation form here
        </div>
      </div>
    )}
  </div>
  );
};

export default CardOfDonationsVissa;
