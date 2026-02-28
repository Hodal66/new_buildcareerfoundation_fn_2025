/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGraduationCap, FaUserAlt, FaHistory, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

const UserDetailModal = ({ user, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <AnimatePresence mode="wait">
      {isOpen && user && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 font-Nunito">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-white dark:bg-slate-800 rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 dark:border-slate-700"
          >
            {/* Header */}
            <div className="p-8 pb-4 flex justify-between items-start">
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-3xl bg-grad1/10 flex items-center justify-center text-2xl font-black text-grad1">
                  {user.firstName?.[0]}{user.secondName?.[0]}
                </div>
                <div>
                  <h2 className="text-2xl font-black text-gray-800 dark:text-white">
                    {user.firstName} {user.secondName}
                  </h2>
                  <span className="bg-grad1/10 text-grad1 text-[12px] font-semibold px-4 py-1.5 rounded-full mt-1 inline-block">
                    Talented Student
                  </span>
                </div>
              </div>
              <button 
                onClick={onClose} 
                className="p-3 bg-gray-50 dark:bg-slate-700 text-gray-400 rounded-2xl hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Tabs */}
            <div className="px-8 flex gap-6 border-b border-gray-50 dark:border-slate-700">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 flex items-center gap-2 text-sm font-black transition-all border-b-2 ${
                    activeTab === tab.id
                      ? 'border-grad1 text-grad1'
                      : 'border-transparent text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <tab.icon size={14} />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="p-8 max-h-[60vh] overflow-y-auto custom-scrollbar pr-2">
              {activeTab === 'profile' && (
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[13px] font-semibold text-slate-500/80 dark:text-slate-400">Email Address</label>
                    <p className="font-bold text-gray-700 dark:text-slate-300">{user.email}</p>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[13px] font-semibold text-slate-500/80 dark:text-slate-400">Phone Number</label>
                    <p className="font-bold text-gray-700 dark:text-slate-300">+255 7XX XXX XXX</p>
                  </div>
                  <div className="col-span-2 space-y-1">
                    <label className="text-[13px] font-semibold text-slate-500/80 dark:text-slate-400">Reported Barriers</label>
                    <div className="flex gap-2 mt-1">
                      <span className="px-3 py-1 bg-red-50 dark:bg-red-500/10 text-red-500 text-xs font-bold rounded-lg border border-red-100 dark:border-red-500/20">Financial Constraint</span>
                      <span className="px-3 py-1 bg-amber-50 dark:bg-amber-500/10 text-amber-500 text-xs font-bold rounded-lg border border-amber-100 dark:border-amber-500/20">Geographic Distance</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'academic' && (
                <div className="space-y-6">
                   <div className="bg-gray-50 dark:bg-slate-900/50 p-6 rounded-3xl border border-gray-100 dark:border-slate-700 flex justify-between items-center">
                      <div>
                          <h4 className="text-[13px] font-semibold text-slate-500/80 dark:text-slate-400">Average Score</h4>
                          <p className="text-3xl font-black text-gray-800 dark:text-white">88.5%</p>
                      </div>
                      <div className="flex gap-1">
                          {[1,2,3,4,5].map(i => <div key={i} className="w-2 h-8 bg-emerald-500 rounded-full opacity-40"></div>)}
                      </div>
                   </div>
                   <div className="space-y-4">
                      <h4 className="text-sm font-black text-gray-800 dark:text-white">Recent Certifications</h4>
                      <div className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-2xl border border-emerald-100 dark:border-emerald-500/20">
                          <FaCheckCircle className="shrink-0" />
                          <span className="text-sm font-bold">Advanced Mathematics (Excellence Award)</span>
                      </div>
                   </div>
                </div>
              )}

              {activeTab === 'activity' && (
                <div className="space-y-4">
                  {[
                    { time: '2 hours ago', action: 'Applied for Mentorship Program' },
                    { time: 'Yesterday', action: 'Updated Academic Score' },
                    { time: '3 days ago', action: 'Completed Barrier Assessment' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 hover:bg-gray-50 dark:hover:bg-slate-700/50 rounded-2xl transition-colors">
                      <div className="w-1 h-full bg-gray-200 dark:bg-slate-600 rounded-full"></div>
                      <div>
                        <p className="text-[12px] font-medium text-slate-400">{item.time}</p>
                        <p className="text-sm font-bold text-gray-700 dark:text-slate-300">{item.action}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="p-8 pt-0 flex gap-4">
              <button className="flex-1 bg-grad1 text-white py-4.5 rounded-2xl font-bold shadow-lg shadow-grad1/20 hover:scale-[1.02] active:scale-95 transition-all text-sm">
                Assign Mentor
              </button>
              <button 
                onClick={onClose}
                className="px-8 py-4.5 bg-gray-50 dark:bg-slate-700 text-gray-500 dark:text-slate-400 font-bold rounded-2xl text-sm hover:bg-gray-100 dark:hover:bg-slate-600 transition-all border border-gray-100 dark:border-slate-600"
              >
                Close View
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default UserDetailModal;
