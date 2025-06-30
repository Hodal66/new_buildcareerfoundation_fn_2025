/* eslint-disable react/prop-types */
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import DonationOption from "../Common/DonationOption";
import styles from "../../styles";

const CardOfDonationsBank = ({isCardVisible,SetIsCardVisible}) => {
 
  return (
    <div className={`${styles.transitionAll} h-fit`}>
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
      className={`w-full p-4 font-medium cursor-pointer hover:bg-gradient-to-l flex items-center justify-between ${styles.blueGradient} ${styles.transitionAll} text-white border border-gray-200 rounded-lg shadow`}
    >
      <div className={`${styles.transitionAll} text-2xl`}>Donate_by_Bank</div>
      {isCardVisible.bank ? (
        <CiCircleMinus className="text-4xl text-gradColor" />
      ) : (
        <CiCirclePlus className="text-4xl" />
      )}
    </div>
    {isCardVisible.bank && (
      <div className=" w-full h-fit p-5 text-xl bg-gray-200 text-black border border-gray-200 rounded-lg shadow">
       <DonationOption />
        <div className="mb-4">
          <span className="font-semibold">
            Mobile Money Number (Internal & External Transfers)
          </span>{" "}
          <br /> +250 791 677 236 Registered on GROWN TO HELP
        </div>
        <div className="mb-4">
          <span className="font-semibold">
            {" "}
            Mobile Money Code (Internal Transfers)
          </span>{" "}
          <br /> *182*8*1*277824# Registered on GROWN TO HELP
        </div>
        <div>
          We’re available to take your call Monday to Friday from 8am to 5pm
          Kigali Time.
        </div>
        <div className="text-blue-500 mt-4">
          Fill donation form here 
        </div>
      </div>
    )}
  </div>
  );
};

export default CardOfDonationsBank;
