import { FaUsers, FaCalendarAlt, FaChartLine, FaFileUpload, FaHeart } from "react-icons/fa";
import KPICard from "../../../components/Dashboard/KPICard";

const MentorDashboard = () => {
    const stats = [
        { title: "Total Mentees", value: "2", trend: 0, icon: FaUsers, color: "grad1" },
        { title: "Sessions Hosted", value: "8", trend: 12, icon: FaCalendarAlt, color: "grad2" },
        { title: "Avg Rating", value: "4.9", trend: 2, icon: FaHeart, color: "grad3" },
        { title: "Impact Score", value: "850", trend: 8, icon: FaChartLine, color: "darkBluePhant" },
    ];

    return (
        <div className="space-y-8 pb-10 font-Nunito">
            {/* Mentor Welcome */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700">
                <div className="space-y-2 text-center md:text-left">
                    <h1 className="text-3xl font-black text-gray-800 dark:text-white">Empower Excellence 🌟</h1>
                    <p className="text-gray-500 font-medium max-w-md">
                        Your guidance as a mentor is the catalyst for "transformative impact." Ready to help someone shine today?
                    </p>
                </div>
                <div className="flex gap-4">
                     <button className="bg-grad1 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-grad1/20 hover:scale-105 transition-all active:scale-95">
                        Schedule Session
                    </button>
                    <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-2xl font-bold hover:bg-gray-200 transition-all active:scale-95">
                        View Resources
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <KPICard key={index} {...stat} />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main: Matching & Calendar */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Student Matching Carousel Placeholder */}
                    <section className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden">
                        <div className="flex justify-between items-center mb-6 px-2">
                             <h2 className="text-xl font-bold text-gray-800 dark:text-white">Mentees Needing Support</h2>
                             <div className="flex gap-2">
                                <button className="p-2 rounded-full border border-gray-100 hover:bg-gray-50 text-gray-400"><FaHeart size={14} /></button>
                             </div>
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-2">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="min-w-[280px] bg-bgGray/50 dark:bg-slate-700/50 rounded-2xl p-5 border border-transparent hover:border-grad1/30 hover:bg-white dark:hover:bg-slate-700 transition-all cursor-pointer group shadow-sm hover:shadow-md">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-white dark:border-slate-800 shadow-sm">
                                            <img src={`https://i.pravatar.cc/150?u=student${item}`} alt="Student" className="w-full h-full object-cover" />
                                        </div>
                                        <span className="bg-grad2/10 text-grad2 text-[10px] uppercase font-black px-3 py-1 rounded-full">High Potential</span>
                                    </div>
                                    <h4 className="font-bold text-gray-800 dark:text-white">Esther Uwase</h4>
                                    <p className="text-xs text-gray-500 mb-4 h-8 overflow-hidden line-clamp-2 italic">Looking for guidance in Aviation Management & Logistics.</p>
                                    <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-100 dark:border-slate-600">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-tighter">New Match</span>
                                        </div>
                                        <button className="text-grad1 text-[11px] font-black uppercase hover:scale-105 transition-transform">View Profile →</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Resources Upload Section Placeholder */}
                    <section className="bg-grad1/5 border-2 border-dashed border-grad1/20 rounded-3xl p-10 flex flex-col items-center text-center space-y-4 group hover:border-grad1/40 hover:bg-grad1/10 transition-all cursor-pointer">
                         <div className="w-16 h-16 bg-grad1/10 rounded-full flex items-center justify-center text-grad1 group-hover:scale-110 transition-transform">
                            <FaFileUpload size={32} />
                         </div>
                         <h3 className="text-xl font-bold text-gray-800 dark:text-white">Share a Learning Resource</h3>
                         <p className="text-gray-500 max-w-sm text-sm font-medium">
                            Upload career guides, articles, or templates to help your mentees overcome their barriers.
                         </p>
                    </section>
                </div>

                {/* Right: Schedule & Feedback */}
                <div className="space-y-8">
                     <section className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Upcoming Sessions</h2>
                            <FaCalendarAlt size={18} className="text-grad1" />
                        </div>
                        <div className="space-y-4">
                            {[
                                { name: "Esther Uwase", date: "Tomorrow", time: "2:00 PM", topic: "Aviation Barriers" },
                                { name: "Jean Claude", date: "Feb 30", time: "4:30 PM", topic: "Career Guidance" },
                            ].map((session, idx) => (
                                <div key={idx} className="p-4 rounded-2xl bg-gray-50 dark:bg-slate-700/50 hover:bg-white dark:hover:bg-slate-700 border border-transparent hover:border-gray-100 transition-all shadow-sm">
                                    <div className="flex justify-between text-[10px] font-black uppercase text-grad1 mb-1">
                                        <span>{session.date}</span>
                                        <span className="text-gray-400">{session.time}</span>
                                    </div>
                                    <h4 className="font-bold text-gray-800 dark:text-white">{session.name}</h4>
                                    <p className="text-[11px] text-gray-500 font-medium italic mt-0.5">{session.topic}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MentorDashboard;
