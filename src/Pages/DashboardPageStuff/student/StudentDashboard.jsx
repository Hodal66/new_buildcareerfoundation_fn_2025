import { FaGraduationCap, FaUserTie, FaMoneyBillWave, FaRocket } from "react-icons/fa";
import KPICard from "../../../components/Dashboard/KPICard";

const StudentDashboard = () => {
    // Placeholder data for demonstration
    const stats = [
        { title: "Courses Completed", value: "4", trend: 20, icon: FaGraduationCap, color: "grad1" },
        { title: "Mentorship Hours", value: "12", trend: 15, icon: FaUserTie, color: "grad2" },
        { title: "Funding Status", value: "Pending", icon: FaMoneyBillWave, color: "grad3" },
        { title: "Academic Score", value: "92%", trend: 5, icon: FaRocket, color: "darkBluePhant" },
    ];

    return (
        <div className="space-y-8 pb-10">
            {/* Hero Header */}
            <div className="bg-gradient-to-r from-grad1 to-grad2 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="space-y-3 text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-black font-Nunito">Hi, Future Leader! 🚀</h1>
                        <p className="text-white/80 max-w-md font-medium">
                            "Guided choices, brighter futures." You're making great progress in your journey toward excellence.
                        </p>
                        <button className="bg-white text-grad1 px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-md active:scale-95">
                            Continue Learning
                        </button>
                    </div>
                    <div className="hidden lg:block">
                        <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                             <FaGraduationCap size={80} className="text-white drop-shadow-lg" />
                        </div>
                    </div>
                </div>
                {/* Decorative blobs */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-grad3/20 rounded-full blur-3xl"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <KPICard key={index} {...stat} />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Progress & Matching */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Ongoing Tasks/Resources */}
                    <section className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold font-Nunito text-gray-800 dark:text-white">Recommended Mentors</h2>
                            <button className="text-grad1 font-bold text-sm hover:underline">View All</button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[1, 2].map((i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-gray-50 bg-gray-50/50 hover:bg-white hover:shadow-md transition-all cursor-pointer group">
                                    <div className="w-16 h-16 rounded-2xl bg-grad2/10 flex items-center justify-center shrink-0 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Mentor" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800">Alexander Thorne</p>
                                        <p className="text-xs text-gray-500 font-medium italic">Tech Strategy & Leadership</p>
                                        <button className="mt-2 text-xs font-black text-grad1 uppercase tracking-wider">Connect +</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Placeholder for Barrier Assessment */}
                    <section className="bg-grad3/5 border-2 border-dashed border-grad3/20 rounded-3xl p-10 flex flex-col items-center text-center space-y-4">
                         <div className="w-16 h-16 bg-grad3/10 rounded-full flex items-center justify-center text-grad3">
                            <FaRocket size={32} />
                         </div>
                         <h3 className="text-xl font-bold text-gray-800">Complete Your Barrier Assessment</h3>
                         <p className="text-gray-500 max-w-sm text-sm">
                            Help us understand your unique challenges so we can provide the best-tailored support for your academic excellence.
                         </p>
                         <button className="bg-grad3 text-white px-8 py-3 rounded-2xl font-black shadow-lg shadow-grad3/20 hover:scale-105 transition-transform active:scale-95">
                            Start Assessment
                         </button>
                    </section>
                </div>

                {/* Right Column: Timeline/Activity */}
                <div className="space-y-8">
                    <section className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-slate-700">
                        <h2 className="text-xl font-bold font-Nunito text-gray-800 dark:text-white mb-6">Recent Activity</h2>
                        <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100 dark:before:bg-slate-700">
                            {[
                                { date: "Today", time: "10:30 AM", title: "New Resource Shared", desc: "Aviation Career Guide 2026", color: "grad1" },
                                { date: "Yesterday", time: "2:00 PM", title: "Mentorship Joined", desc: "Connected with Alexander Thorne", color: "grad2" },
                                { date: "Feb 26", time: "9:00 AM", title: "Course Started", desc: "Digital Literacy Fundamentals", color: "grad3" },
                            ].map((item, idx) => (
                                <div key={idx} className="relative pl-10">
                                    <div className={`absolute left-[7px] top-1.5 w-4.5 h-4.5 rounded-full border-4 border-white dark:border-slate-800 bg-${item.color} shadow-sm z-10`}></div>
                                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{item.date} • {item.time}</p>
                                    <h4 className="text-sm font-bold text-gray-800 dark:text-white mt-1">{item.title}</h4>
                                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
