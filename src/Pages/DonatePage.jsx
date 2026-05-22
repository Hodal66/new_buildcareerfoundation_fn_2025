/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { HeaderComponent } from "../components/HeaderComponent";
import CardOfDonationsBank from "../components/Card_Of_Donations/CardOfDonationsBank";
import CardOfDonationsGoFindMe from "../components/Card_Of_Donations/CardOfDonationsGoFindMe";
import { FooterComponent } from "../components/FooterComponent";
import MainHeading1 from "../components/Headings/MainHeading1";
import styles from "../styles";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

export const DonatePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-bgGray font-montiseramwa">
      <HeaderComponent />

      {/* Content starts here my brother */}
      <div className={`flex-1 ${styles.paddingX} h-fit flex flex-col items-center text-black pb-16`}>
        
        {/* Back Button */}
        <div className="w-full max-w-7xl mt-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold text-base transition-colors duration-300 group cursor-pointer bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md w-fit"
          >
            <HiArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform duration-300" />
            Go Back
          </button>
        </div>

        <div className="w-full mt-8 text-center flex flex-col items-center">
          <MainHeading1 Title={"DONATE"} />
          <p className="text-gray-600 mt-6 max-w-2xl text-base md:text-lg leading-relaxed bg-white/50 p-6 rounded-2xl backdrop-blur-sm shadow-sm border border-gray-100">
            Your generous contributions empower students through mentorship, education support, and career development programs. Choose a preferred donation method below to make an impact today.
          </p>
        </div>
        
        {/* Donation Cards Grid */}
        <div className="w-full max-w-7xl mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <CardOfDonationsBank />
          <CardOfDonationsGoFindMe />
        </div>

        {/* Image Section */}
        <div className="w-full max-w-7xl mt-16 relative group overflow-hidden rounded-3xl shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
           <img
              src="/images/10.jpg"
              alt="Education Access"
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
           <div className="absolute bottom-8 left-8 right-8 z-20">
             <h3 className="text-white text-2xl md:text-3xl font-bold mb-2 shadow-sm">Thank You for Your Support!</h3>
             <p className="text-white/90 text-sm md:text-base max-w-xl">Every donation, big or small, goes directly towards building a brighter future for the next generation of leaders.</p>
           </div>
        </div>
        
      </div>

      <FooterComponent />
    </div>
  );
};
