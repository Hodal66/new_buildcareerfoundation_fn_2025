/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const AdminHero = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="mb-10 font-Nunito">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4"
      >
        <div>
          <span className="bg-grad1/10 text-grad1 text-[12px] font-bold px-4 py-1.5 rounded-full mb-3 inline-block">
            Administrative portal
          </span>
          <h1 className="text-4xl lg:text-5xl font-black text-gray-800 dark:text-white tracking-tight leading-tight">
            Organization Overview <br />
            <span className="text-grad1">{currentDate}</span>
          </h1>
          <p className="text-gray-400 font-bold mt-4 max-w-xl text-sm lg:text-base leading-relaxed">
            Nurturing excellence through guided choices. Monitor the pulse of Build Career Foundation's mission to empower underprivileged talent.
          </p>
        </div>
        
        <div className="flex gap-3">
            <button className="px-6 py-3.5 bg-white dark:bg-slate-800 text-gray-800 dark:text-white rounded-2xl font-bold shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-all text-sm">
                Export Report
            </button>
            <button className="px-6 py-3.5 bg-grad1 text-white rounded-2xl font-bold shadow-lg shadow-grad1/20 hover:scale-105 active:scale-95 transition-all text-sm">
                System Health: Good
            </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminHero;
