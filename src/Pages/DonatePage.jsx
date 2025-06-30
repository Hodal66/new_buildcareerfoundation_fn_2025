/* eslint-disable react-refresh/only-export-components */
// import React from 'react';

/* eslint-disable no-irregular-whitespace */

/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import CardOfDonationsBank from "../components/Card_Of_Donations/CardOfDonationsBank";
import CardOfDonationsCash from "../components/Card_Of_Donations/CardOfDonationsCash";
import CardOfDonationsGoFindMe from "../components/Card_Of_Donations/CardOfDonationsGoFindMe";
import { FooterComponent } from "../components/FooterComponent";
import MainHeading1 from "../components/Headings/MainHeading1";
import styles from "../styles";
import CardOfDonationsVissa from "../components/Card_Of_Donations/CardOfDonationsVissa";
import BtnComponentBlue from "../components/Buttons/BtnComponentBlue";
import { Link } from "react-router-dom";
export const DonatePage = () => {
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
        <div className="w-widthOfScreen h-fit mt-6 text-center">
          <MainHeading1 Title={"DONATE"} />
        </div>
        <div className=" h-full w-full gap-16 grid grid-cols-1 md:grid-cols-2 py-16">
          {/* {data?.getAllPosts.map((post, index) => {
            return <CardOfActivities key={index} data={post} />;
          })} */}
          <div className=" flex flex-col  gap-12">
            <CardOfDonationsBank
              isCardVisible={isCardVisible}
              SetIsCardVisible={SetIsCardVisible}
            />
            <CardOfDonationsCash
              isCardVisible={isCardVisible}
              SetIsCardVisible={SetIsCardVisible}
            />
            <CardOfDonationsVissa
              isCardVisible={isCardVisible}
              SetIsCardVisible={SetIsCardVisible}
            />
            <CardOfDonationsGoFindMe
              isCardVisible={isCardVisible}
              SetIsCardVisible={SetIsCardVisible}
            />
          </div>
          <Link to={"/paymentByVissa"}>
            <div className=" flex flex-col gap-4">
              <img
                src="/carrer.jpg"
                alt=""
                className="h-full object-cover w-full rounded-roundedBox"
              />
              <BtnComponentBlue className={"text-white"} title={"Donate now"} />
            </div>
          </Link>
        </div>
      </div>

      {/* Content ends here my brother */}

      {/* Pre-footer section starts here */}
      <FooterComponent />
      {/* Footer ends here my brother */}
    </div>
  );
};
