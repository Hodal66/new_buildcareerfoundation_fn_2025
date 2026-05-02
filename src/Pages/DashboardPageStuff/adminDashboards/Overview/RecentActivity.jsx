/* eslint-disable react/prop-types */
import { FaBell, FaPlus, FaUserPlus, FaFileExport, FaExternalLinkAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const RecentActivity = ({ data = [] }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-Nunito">
      {/* Activity Feed */}
      <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-8 rounded-[40px] shadow-sm border border-gray-100 dark:border-slate-700">
        <div className="flex items-center gap-3 mb-8">
            <div className="bg-grad1/10 p-2.5 rounded-xl text-grad1">
                <FaBell size={16} />
            </div>
            <h3 className="text-xl font-black text-gray-800 dark:text-white leading-none">Recent Activities</h3>
        </div>
        <div className="space-y-6">
          {data.length > 0 ? data.map((item, i) => (
            <div key={i} className="flex gap-5 group cursor-pointer" onClick={() => navigate(`/admin/overview/${item._id}`)}>
              <div className={`w-12 h-12 rounded-2xl bg-grad${(i % 3) + 1} flex items-center justify-center shrink-0 font-black text-white`}>
                {i + 1}
              </div>
              <div className="flex-1 border-b border-gray-50 dark:border-slate-700/50 pb-4 group-last:border-none">
                <div className="flex justify-between items-start">
                   <h4 className="font-black text-gray-800 dark:text-slate-200 line-clamp-1">{item.title}</h4>
                   <span className="text-[11px] font-black text-slate-400 uppercase bg-slate-50 px-2 py-0.5 rounded">
                    {item.category}
                   </span>
                </div>
                <p className="text-sm font-bold text-gray-400 mt-1 line-clamp-1">{item.content}</p>
              </div>
            </div>
          )) : (
            <div className="text-center py-10 text-slate-400 font-bold italic">No recent activities found</div>
          )}
        </div>
        <button 
          onClick={() => navigate("/admin/activities")}
          className="mt-6 w-full py-4 border-2 border-dashed border-gray-100 dark:border-slate-700 rounded-3xl text-slate-400 font-semibold text-sm hover:border-grad1 hover:text-grad1 transition-all"
        >
            Manage All Posts
        </button>
      </div>

      {/* Quick Admin Actions */}
      <div className="bg-grad1 p-8 rounded-[40px] shadow-2xl shadow-grad1/30 flex flex-col justify-between overflow-hidden relative">
        <div className="relative z-10">
            <h3 className="text-2xl font-black text-white leading-tight mb-2">Quick Admin <br />Operations</h3>
            <p className="text-white/60 font-medium text-sm">Efficiently manage the growth of the foundation with one-click actions.</p>
        </div>
        
        <div className="space-y-3 mt-10 relative z-10">
            <button 
                onClick={() => navigate('/admin/users')}
                className="w-full flex justify-between items-center p-5 bg-white rounded-2xl text-grad1 font-bold text-sm hover:scale-[1.03] transition-transform"
            >
                <span>Manage Community</span>
                <FaUserPlus size={14} />
            </button>
            <button className="w-full flex justify-between items-center p-5 bg-white/10 rounded-2xl text-white font-bold text-sm hover:bg-white/20 transition-all">
                <span>Allocation review</span>
                <FaExternalLinkAlt size={12} />
            </button>
            <button className="w-full flex justify-between items-center p-5 bg-white/10 rounded-2xl text-white font-bold text-sm hover:bg-white/20 transition-all text-left">
                <span>Add success story</span>
                <FaPlus size={12} />
            </button>
            <button className="w-full flex justify-between items-center p-5 bg-white/10 rounded-2xl text-white font-bold text-sm hover:bg-white/20 transition-all">
                <span>Export master report</span>
                <FaFileExport size={14} />
            </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-[-5%] right-[-10%] w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-32 h-32 bg-grad2/20 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default RecentActivity;
