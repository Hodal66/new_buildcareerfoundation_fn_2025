/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUserTie, FaRocket, FaHandHoldingHeart, FaHourglassHalf } from 'react-icons/fa';

const ImpactStats = ({ stats }) => {
  const kpis = [
    {
      title: 'Total Students',
      value: stats.totalStudents || '0',
      trend: '+ Real-time',
      icon: FaGraduationCap,
      color: 'bg-grad1',
      sub: 'Scholars in our database',
    },
    {
      title: 'Total Activities',
      value: stats.activeMentors || '0',
      trend: 'Updates',
      icon: FaRocket,
      color: 'bg-grad2',
      sub: 'Courses, Stories & Events',
    },
    {
      title: 'Subscribers',
      value: stats.successStories || '0',
      trend: 'Live',
      icon: FaUserTie,
      color: 'bg-grad3',
      sub: 'BCF Community members',
    },
    {
      title: 'Funding Goal',
      value: stats.fundingDisbursed || '$12.5k',
      trend: '82%',
      icon: FaHandHoldingHeart,
      color: 'bg-amber-500',
      sub: 'Removing financial barriers',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 font-Nunito">
      {kpis.map((kpi, index) => (
        <motion.div
          key={kpi.title}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-slate-800 p-6 rounded-[32px] shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-none transition-all group"
        >
          <div className="flex justify-between items-start mb-4">
            <div className={`${kpi.color} p-3.5 rounded-2xl text-white shadow-lg ${kpi.color === 'bg-grad1' ? 'shadow-grad1/30' : ''} group-hover:scale-110 transition-transform`}>
              <kpi.icon size={20} />
            </div>
            <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg">
              {kpi.trend}
            </span>
          </div>
          <div>
            <h4 className="text-[13px] font-semibold text-slate-500/80 dark:text-slate-400 mb-1">{kpi.title}</h4>
            <h2 className="text-3xl font-black text-gray-800 dark:text-white mb-1">{kpi.value}</h2>
            <p className="text-[10px] font-bold text-gray-400 leading-tight">
                {kpi.sub}
            </p>
          </div>
        </motion.div>
      ))}

      {/* Pending Approvals Widget - Special CTA style */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="col-span-1 sm:col-span-2 lg:col-span-4 bg-darkBluePhant p-6 rounded-[32px] flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white relative">
                <FaHourglassHalf size={24} />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-2 border-darkBluePhant rounded-full text-[10px] font-black flex items-center justify-center">8</span>
            </div>
            <div>
                <h3 className="text-xl font-black text-white">Action Required: 8 Pending Approvals</h3>
                <p className="text-white/60 font-bold text-xs mt-1">New student applications and funding requests are waiting for your review.</p>
            </div>
        </div>
        <button className="w-full md:w-auto px-8 py-3.5 bg-white text-darkBluePhant rounded-2xl font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg shadow-black/20">
            Start Reviewing
        </button>
      </motion.div>
    </div>
  );
};

export default ImpactStats;
