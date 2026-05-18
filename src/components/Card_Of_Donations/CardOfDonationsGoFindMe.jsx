/* eslint-disable react/prop-types */
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
// import DonationOption from "../Common/DonationOption";
import styles from "../../styles";

const CardOfDonationsGoFindMe = ({isCardVisible,SetIsCardVisible}) => {
 
  return (
    <div className="h-fit">
    {/* Header card with responsive padding and text: Mobile: p-2 text-lg, Tablet: p-3 text-xl, Desktop: p-4 text-2xl */}
    <div
      onClick={() => {
        SetIsCardVisible((prevState) => {
          return {
            bank: false,
            phone: false,
            goFindMe: !prevState.goFindMe,
            cash: false,
            visa:false
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
        MTN Mobile Money (MoMo)
      </div>
      {/* Icons with responsive size: Mobile: text-2xl, Tablet: text-3xl, Desktop: text-4xl */}
      {isCardVisible.goFindMe ? (
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
    {isCardVisible.goFindMe && (
      <div className="w-full h-fit bg-gray-50 text-black border border-gray-200 rounded-lg shadow
        p-4 text-sm sm:p-5 sm:text-base md:p-6 md:text-lg leading-relaxed space-y-4">
        
        <p className="text-gray-700">
          You can support Build Career Foundation through MTN Mobile Money using one of the following methods:
        </p>

        {/* Method 1 */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <h4 className="font-bold text-blue-700 text-sm sm:text-base mb-2">
            1. International or Bank App Transfer
          </h4>
          <p className="text-gray-600 text-xs sm:text-sm mb-3">
            If you are using a banking application or sending money from outside Rwanda, you can use our registered MTN Mobile Money number:
          </p>
          <div className="space-y-1.5 bg-gray-50 p-3 rounded-lg border border-gray-150">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <span className="font-semibold text-gray-500 text-xs sm:text-sm uppercase">MoMo Number</span>
              <span className="font-mono font-bold text-gray-900 text-sm sm:text-base">(+250) 795 596 633</span>
            </div>
            <div className="border-t border-gray-200 pt-1.5 flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <span className="font-semibold text-gray-500 text-xs sm:text-sm uppercase">Registered Name</span>
              <span className="font-bold text-gray-900 text-sm sm:text-base">BUILD CAREER FOUNDATION</span>
            </div>
          </div>
        </div>

        {/* Method 2 */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <h4 className="font-bold text-blue-700 text-sm sm:text-base mb-2">
            2. Local Transfer Within Rwanda
          </h4>
          <p className="text-gray-600 text-xs sm:text-sm mb-3">
            If you are in Rwanda, you can donate using our MTN Mobile Money Code with zero transfer charges.
          </p>
          <div className="space-y-1.5 bg-gray-50 p-3 rounded-lg border border-gray-150 mb-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <span className="font-semibold text-gray-500 text-xs sm:text-sm uppercase">MoMo Code</span>
              <span className="font-mono font-bold text-gray-900 text-sm sm:text-base">1814709</span>
            </div>
            <div className="border-t border-gray-200 pt-1.5 flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <span className="font-semibold text-gray-500 text-xs sm:text-sm uppercase">Registered Name</span>
              <span className="font-bold text-gray-900 text-sm sm:text-base">BUILD CAREER FOUNDATION</span>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-100 p-3.5 rounded-lg text-center">
            <span className="font-bold text-blue-800 text-xs uppercase tracking-wider block mb-1">Quick Dial Code</span>
            <span className="font-mono font-bold text-blue-600 text-lg sm:text-xl md:text-2xl">*182*8*1*1814709#</span>
            <span className="text-gray-500 text-[10px] sm:text-xs block mt-1">Dial the code above and follow the instructions.</span>
          </div>
        </div>

        <p className="text-gray-600 text-xs sm:text-sm md:text-base italic pt-2">
          Thank you for supporting our mission of empowering students through education, mentorship, and career development.
        </p>
      </div>
    )}
  </div>
  );
};

export default CardOfDonationsGoFindMe;
