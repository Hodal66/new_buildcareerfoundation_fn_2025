/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import CardOfDonationsBank from "../components/Card_Of_Donations/CardOfDonationsBank";
import CardOfDonationsGoFindMe from "../components/Card_Of_Donations/CardOfDonationsGoFindMe";
import { FooterComponent } from "../components/FooterComponent";
import MainHeading1 from "../components/Headings/MainHeading1";
import styles from "../styles";
// import CardOfDonationsVissa from "../components/Card_Of_Donations/CardOfDonationsVissa";
// import BtnComponentBlue from "../components/Buttons/BtnComponentBlue";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

export const DonatePage = () => {
  const navigate = useNavigate();
  const [isCardVisible, SetIsCardVisible] = useState({
    visa: false,
    phone: false,
    bank: false,
    goFindMe: false,
  });

  return (
    <div>
      <HeaderComponent />
      {/* Header ends here my brother ! */}

      {/* Content starts here my brother*/}
      <div
        className={`${styles.paddingX} bg-bgGray h-fit flex flex-col items-center text-black font-montiseramwa`}
      >
        {/* Back Button */}
        <div className="w-full max-w-7xl mt-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-base transition-colors duration-300 group cursor-pointer"
          >
            <HiArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform duration-300" />
            Go Back
          </button>
        </div>

        <div className="w-widthOfScreen h-fit mt-4 text-center">
          <MainHeading1 Title={"DONATE"} />
        </div>
        <div className="h-full w-full gap-16 grid grid-cols-1 md:grid-cols-2 py-16">
          <div className="flex flex-col gap-12">
            <CardOfDonationsBank
              isCardVisible={isCardVisible}
              SetIsCardVisible={SetIsCardVisible}
            />
            {/* 
            <CardOfDonationsVissa
              isCardVisible={isCardVisible}
              SetIsCardVisible={SetIsCardVisible}
            />
            */}
            <CardOfDonationsGoFindMe
              isCardVisible={isCardVisible}
              SetIsCardVisible={SetIsCardVisible}
            />
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="/images/10.jpg"
              alt="Education Access"
              className="h-full object-cover w-full rounded-roundedBox"
            />
            {/* Visa Card payment button - temporarily hidden, to be reopened in the future
            <Link to={"/paymentByVissa"}>
              <BtnComponentBlue className={"text-white"} title={"Donate now"} />
            </Link>
            */}
          </div>
        </div>
      </div>

      {/* Content ends here my brother */}

      {/* Pre-footer section starts here */}
      <FooterComponent />
      {/* Footer ends here my brother */}
    </div>
  );
};
