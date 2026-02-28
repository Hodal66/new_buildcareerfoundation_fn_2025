/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from 'framer-motion';
import { FaExclamationTriangle, FaTimes, FaTrashAlt } from 'react-icons/fa';

const ConfirmationModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title = "Are you sure?", 
  message = "This action cannot be undone. Please confirm to proceed.",
  confirmText = "Confirm delete",
  cancelText = "Cancel",
  variant = "danger" // danger, warning, info
}) => {
  const themes = {
    danger: {
      icon: FaTrashAlt,
      iconBg: "bg-red-50 text-red-500 border-red-100 dark:bg-red-500/10 dark:border-red-500/20",
      buttonBg: "bg-red-500 shadow-red-500/20 hover:bg-red-600",
      titleColor: "text-red-600 dark:text-red-400"
    },
    warning: {
      icon: FaExclamationTriangle,
      iconBg: "bg-amber-50 text-amber-500 border-amber-100 dark:bg-amber-500/10 dark:border-amber-500/20",
      buttonBg: "bg-amber-500 shadow-amber-500/20 hover:bg-amber-600",
      titleColor: "text-amber-600 dark:text-amber-400"
    },
    info: {
      icon: FaExclamationTriangle,
      iconBg: "bg-blue-50 text-blue-500 border-blue-100 dark:bg-blue-500/10 dark:border-blue-500/20",
      buttonBg: "bg-blue-500 shadow-blue-500/20 hover:bg-blue-600",
      titleColor: "text-blue-600 dark:text-blue-400"
    }
  };

  const theme = themes[variant] || themes.danger;
  const Icon = theme.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4 sm:p-6 font-Nunito">
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
            className="relative w-full max-w-md bg-white dark:bg-slate-800 rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 dark:border-slate-700 p-10"
          >
            <div className="flex flex-col items-center text-center">
               <div className={`w-20 h-20 rounded-[30px] flex items-center justify-center border-2 mb-6 ${theme.iconBg}`}>
                  <Icon size={28} />
               </div>
               
               <h3 className={`text-2xl font-black mb-3 ${theme.titleColor}`}>
                  {title}
               </h3>
               
               <p className="text-slate-500 dark:text-slate-400 text-[15px] font-medium leading-relaxed mb-10 px-4">
                  {message}
               </p>

               <div className="flex gap-4 w-full">
                  <button
                    onClick={onClose}
                    className="flex-1 py-4.5 bg-gray-50 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 font-bold rounded-2xl text-[13px] hover:bg-gray-100 dark:hover:bg-slate-700 transition-all border border-gray-100 dark:border-slate-600"
                  >
                    {cancelText}
                  </button>
                  <button
                    onClick={() => {
                      onConfirm();
                      onClose();
                    }}
                    className={`flex-1 py-4.5 text-white font-bold rounded-2xl text-[13px] shadow-lg transition-all active:scale-95 ${theme.buttonBg}`}
                  >
                    {confirmText}
                  </button>
               </div>
            </div>

            <button 
              onClick={onClose}
              className="absolute top-8 right-8 p-2 text-slate-300 hover:text-slate-500 dark:hover:text-white transition-colors"
            >
              <FaTimes size={18} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmationModal;
