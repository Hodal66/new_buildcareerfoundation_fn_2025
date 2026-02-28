/* eslint-disable react/prop-types */
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const KPICard = ({ title, value, trend, icon: Icon, color = "grad1" }) => {
  const isPositive = trend > 0;

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-all duration-300 group">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <p className="text-xs font-bold text-gray-400 dark:text-slate-400 uppercase tracking-widest">
            {title}
          </p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-Nunito font-black text-gray-800 dark:text-white">
              {value}
            </h3>
            {trend !== undefined && (
              <span className={`flex items-center gap-0.5 text-xs font-bold ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
                {isPositive ? <FaArrowUp size={10} /> : <FaArrowDown size={10} />}
                {Math.abs(trend)}%
              </span>
            )}
          </div>
        </div>
        <div className={`p-4 rounded-xl bg-opacity-10 group-hover:scale-110 transition-transform duration-300 bg-${color} text-${color}`}>
          <Icon size={24} className="opacity-80" />
        </div>
      </div>
      
      {/* Subtle progress bar at bottom */}
      <div className="mt-4 w-full bg-gray-50 dark:bg-slate-700 h-1 rounded-full overflow-hidden">
        <div 
            className={`h-full bg-${color} rounded-full opacity-60`} 
            style={{ width: '60%' }}
        ></div>
      </div>
    </div>
  );
};

export default KPICard;
