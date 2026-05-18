/* eslint-disable react/prop-types */
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
// import DonationOption from "../Common/DonationOption";
import styles from "../../styles";

const CardOfDonationsBank = ({isCardVisible,SetIsCardVisible}) => {
 
  return (
    <div className={`${styles.transitionAll} h-fit`}>
    {/* Header card with responsive padding and text: Mobile: p-2 text-lg, Tablet: p-3 text-xl, Desktop: p-4 text-2xl */}
    <div
      onClick={() => {
        SetIsCardVisible((prevState) => {
          return {
            bank:  !prevState.bank,
            phone: false,
            goFindMe: false,
            cash: false,
            email:false
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
      <div className={`${styles.transitionAll}
        text-lg
        sm:text-xl
        md:text-2xl`}>
        Donate_by_Bank
      </div>
      {/* Icons with responsive size: Mobile: text-2xl, Tablet: text-3xl, Desktop: text-4xl */}
      {isCardVisible.bank ? (
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
    {isCardVisible.bank && (
      <div className="w-full h-fit bg-gray-50 text-black border border-gray-200 rounded-lg shadow
        p-4 text-sm sm:p-5 sm:text-base md:p-6 md:text-lg leading-relaxed">
        <p className="mb-4 text-gray-700">
          You can support Build Career Foundation by donating through bank transfer using the account details below:
        </p>
        
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-4 space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <span className="font-semibold text-gray-500 text-xs sm:text-sm uppercase tracking-wider">Bank</span>
            <span className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Bank of Kigali</span>
          </div>
          <div className="border-t border-gray-100 pt-2 flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <span className="font-semibold text-gray-500 text-xs sm:text-sm uppercase tracking-wider">Account Name</span>
            <span className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Build Career Foundation</span>
          </div>
          <div className="border-t border-gray-100 pt-2 flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <span className="font-semibold text-gray-500 text-xs sm:text-sm uppercase tracking-wider">Account Number</span>
            <span className="font-mono font-bold text-blue-600 text-base sm:text-lg md:text-xl tracking-wider">100114947681</span>
          </div>
        </div>

        <p className="text-gray-600 text-xs sm:text-sm md:text-base italic">
          Your support helps us continue empowering students through mentorship, education support, and career development programs. Thank you for your generosity.
        </p>
      </div>
    )}
  </div>
  );
};

export default CardOfDonationsBank;
