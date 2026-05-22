/* eslint-disable react/prop-types */
import React from 'react';
import { FaRegCopy } from "react-icons/fa";
import { BsBank } from "react-icons/bs";

const CardOfDonationsBank = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="w-full h-full bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 p-6 flex items-center justify-between group-hover:from-blue-600 group-hover:to-blue-400 transition-colors">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
            <BsBank className="text-white text-2xl" />
          </div>
          <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide">Bank Transfer</h3>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 md:p-8 flex-1 flex flex-col gap-6 relative">
        {/* Subtle background decoration */}
        <div className="absolute -bottom-10 -right-10 text-blue-50 opacity-50 pointer-events-none">
          <BsBank className="text-[150px]" />
        </div>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed z-10">
          Support Build Career Foundation by securely transferring directly to our official bank account. Your contribution changes lives.
        </p>

        <div className="bg-gray-50/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 flex flex-col gap-5 z-10 shadow-inner">
          
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wider text-gray-400 font-bold">Bank Name</span>
            <span className="text-lg font-bold text-gray-800">Bank of Kigali</span>
          </div>
          
          <div className="h-px w-full bg-gray-200"></div>
          
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wider text-gray-400 font-bold">Account Name</span>
            <span className="text-lg font-bold text-gray-800">Build Career Foundation</span>
          </div>

          <div className="h-px w-full bg-gray-200"></div>
          
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wider text-gray-400 font-bold">Account Number</span>
            <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-blue-100 shadow-sm">
              <span className="text-xl md:text-2xl font-mono font-extrabold text-blue-600 tracking-wider">100114947681</span>
              <button 
                onClick={() => copyToClipboard('100114947681')} 
                className="p-2.5 text-blue-500 hover:text-white hover:bg-blue-600 rounded-lg transition-all duration-300" 
                title="Copy Account Number"
              >
                <FaRegCopy className="text-xl" />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CardOfDonationsBank;
