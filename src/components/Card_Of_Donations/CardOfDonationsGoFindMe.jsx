/* eslint-disable react/prop-types */
import React from 'react';
import { FaMobileAlt, FaRegCopy } from "react-icons/fa";

const CardOfDonationsGoFindMe = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="w-full h-full bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 p-6 flex items-center justify-between group-hover:from-yellow-300 group-hover:to-yellow-500 transition-colors">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-black/10 rounded-full backdrop-blur-sm">
            <FaMobileAlt className="text-black text-2xl" />
          </div>
          <h3 className="text-black text-xl md:text-2xl font-bold tracking-wide">MTN Mobile Money</h3>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 md:p-8 flex-1 flex flex-col gap-6 relative">
        {/* Subtle background decoration */}
        <div className="absolute -bottom-10 -right-10 text-yellow-50 opacity-50 pointer-events-none">
          <FaMobileAlt className="text-[150px]" />
        </div>

        {/* Method 1 */}
        <div className="flex flex-col gap-3 z-10">
          <h4 className="text-sm font-bold uppercase tracking-wider text-yellow-600 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-xs">1</span> 
            Mobile Number (Intl. / App)
          </h4>
          <div className="bg-gray-50/80 backdrop-blur-sm rounded-2xl p-5 border border-gray-100 shadow-inner">
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">Registered Name</span>
              <span className="font-bold text-gray-800 text-sm">BUILD CAREER FOUNDATION</span>
            </div>
            <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-yellow-200 shadow-sm">
              <span className="text-lg md:text-xl font-mono font-extrabold text-gray-800">(+250) 795 596 633</span>
              <button 
                onClick={() => copyToClipboard('+250795596633')} 
                className="p-2.5 text-yellow-600 hover:text-white hover:bg-yellow-500 rounded-lg transition-all duration-300" 
                title="Copy Number"
              >
                <FaRegCopy className="text-lg" />
              </button>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-100 z-10"></div>

        {/* Method 2 */}
        <div className="flex flex-col gap-3 z-10">
          <h4 className="text-sm font-bold uppercase tracking-wider text-yellow-600 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-xs">2</span> 
            MoMo Code (Local)
          </h4>
          <div className="bg-gray-50/80 backdrop-blur-sm rounded-2xl p-5 border border-gray-100 shadow-inner">
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">Code Name</span>
              <span className="font-bold text-gray-800 text-sm">BUILD CAREER FOUNDATION</span>
            </div>
            <div className="flex items-center justify-between mb-4 bg-white p-3 rounded-xl border border-yellow-200 shadow-sm">
              <span className="text-xl md:text-2xl font-mono font-extrabold text-gray-800">1814709</span>
              <button 
                onClick={() => copyToClipboard('1814709')} 
                className="p-2.5 text-yellow-600 hover:text-white hover:bg-yellow-500 rounded-lg transition-all duration-300" 
                title="Copy Code"
              >
                <FaRegCopy className="text-lg" />
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-xl p-4 text-center border border-yellow-200 shadow-sm">
               <span className="text-xs uppercase font-bold text-yellow-800 block mb-1">Quick Dial (Free)</span>
               <span className="text-lg md:text-xl font-mono font-extrabold text-yellow-700">*182*8*1*1814709#</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CardOfDonationsGoFindMe;
