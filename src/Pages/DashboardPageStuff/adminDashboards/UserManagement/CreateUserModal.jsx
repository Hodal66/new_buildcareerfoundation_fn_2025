/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaUserAlt, FaEnvelope, FaLock, FaUserTag, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../../../../hooks/graphql/mutation/UserMutation';
import { GET_ALL_USERS } from '../../../../hooks/graphql/queries/UserQueries';
import { toast } from 'react-toastify';

const CreateUserModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    email: '',
    password: '',
    role: 'student',
  });

  const [signUp, { loading }] = useMutation(SIGN_UP, {
    refetchQueries: [{ query: GET_ALL_USERS }],
    onCompleted: () => {
      toast.success('User created successfully!');
      onClose();
      setFormData({
        firstName: '',
        secondName: '',
        email: '',
        password: '',
        role: 'student',
      });
    },
    onError: (err) => {
      toast.error(`Error: ${err.message}`);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp({
      variables: {
        input: formData,
      },
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
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
            className="relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 dark:border-slate-700"
          >
            {/* Header */}
            <div className="p-8 pb-4 flex justify-between items-center bg-gray-50/50 dark:bg-slate-900/50 border-b border-gray-100 dark:border-slate-700">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-2xl bg-grad1 text-white flex items-center justify-center shadow-lg shadow-grad1/20">
                    <FaUserAlt size={16} />
                 </div>
                 <h2 className="text-xl font-black text-gray-800 dark:text-white">Add New User</h2>
              </div>
              <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <FaTimes />
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5 focus-within:text-grad1 transition-colors">
                  <label className="text-[13px] font-semibold text-slate-500/80 dark:text-slate-400 px-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bgGray dark:bg-slate-700/50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-grad1 transition-all"
                    placeholder="e.g. John"
                  />
                </div>
                <div className="space-y-1.5 focus-within:text-grad1 transition-colors">
                  <label className="text-[13px] font-semibold text-slate-500/80 dark:text-slate-400 px-1">Last Name</label>
                  <input
                    type="text"
                    name="secondName"
                    value={formData.secondName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bgGray dark:bg-slate-700/50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-grad1 transition-all"
                    placeholder="e.g. Doe"
                  />
                </div>
              </div>

              <div className="space-y-1.5 focus-within:text-grad1 transition-colors">
                <label className="text-[13px] font-semibold text-slate-500/80 dark:text-slate-400 px-1">Email Address</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={14} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 bg-bgGray dark:bg-slate-700/50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-grad1 transition-all"
                    placeholder="name@buildcareerfoundation.org"
                  />
                </div>
              </div>

              <div className="space-y-1.5 focus-within:text-grad1 transition-colors">
                <label className="text-[13px] font-semibold text-slate-500/80 dark:text-slate-400 px-1">Assign Role</label>
                <div className="relative">
                  <FaUserTag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={14} />
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-bgGray dark:bg-slate-700/50 border-none rounded-2xl text-sm font-black focus:ring-2 focus:ring-grad1 appearance-none text-gray-700 dark:text-slate-300 transition-all"
                  >
                    <option value="student">Student (Talented Youth)</option>
                    <option value="mentor">Mentor (Industry Expert)</option>
                    <option value="admin">Administrator (Hub Manager)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5 focus-within:text-grad1 transition-colors">
                <label className="text-[13px] font-semibold text-slate-500/80 dark:text-slate-400 px-1">Set Password</label>
                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={14} />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 bg-bgGray dark:bg-slate-700/50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-grad1 transition-all"
                    placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                  />
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                 <button
                   type="button"
                   onClick={onClose}
                   className="flex-1 py-4 bg-gray-50 dark:bg-slate-700 text-gray-500 font-bold rounded-2xl text-sm hover:bg-gray-100 transition-all border border-gray-100 dark:border-slate-600"
                 >
                   Cancel
                 </button>
                 <button
                   type="submit"
                   disabled={loading}
                   className="flex-[2] py-4 bg-grad1 text-white font-bold rounded-2xl text-sm shadow-lg shadow-grad1/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                 >
                   {loading ? 'Creating...' : (
                     <>
                       <span>Create User Profile</span>
                       <FaCheckCircle className="group-hover:translate-x-1 transition-transform" />
                     </>
                   )}
                 </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CreateUserModal;
