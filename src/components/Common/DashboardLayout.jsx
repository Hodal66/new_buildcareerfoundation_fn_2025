/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaBars, FaBell, FaTimes, FaSignOutAlt } from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";

const DashboardLayout = ({ children, navigationLinks, roleName, userImage }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate(`/LoginIn`);
  };

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300 group
     ${isActive 
        ? "bg-grad1 font-bold shadow-md border-l-4 border-white text-white"
        : "hover:bg-darkBluePhant hover:text-white text-white/70 hover:border-l-4 hover:border-white/30 border-l-4 border-transparent"
     }`;

  return (
    <div className="flex h-screen font-Nunito bg-bgGray dark:bg-slate-900">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? "w-64" : "w-20"} bg-gradient-to-b from-grad1 to-grad2 text-white flex flex-col transition-all duration-300 shadow-xl z-20`}>
        {/* Logo and Toggle */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          {isSidebarOpen && (
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight">BCF Portal</span>
              <span className="text-[10px] uppercase tracking-widest text-white/50">{roleName}</span>
            </div>
          )}
          <button
            className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors focus:outline-none ml-auto"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col mt-6 px-2 space-y-1 overflow-y-auto scrollbar-hide">
          {navigationLinks.map((link, index) => (
            <NavLink key={index} to={link.to} className={linkClasses}>
              <link.icon size={20} />
              {isSidebarOpen && <span className="whitespace-nowrap">{link.label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="mt-auto p-4 border-t border-white/10">
            <button 
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 rounded-md text-white/70 hover:bg-red-500/20 hover:text-red-400 transition-all duration-300 w-full"
            >
                <FaSignOutAlt size={20} />
                {isSidebarOpen && <span>Logout</span>}
            </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Top Header */}
        <header className="flex items-center justify-between px-6 py-3 bg-white dark:bg-slate-800 shadow-sm border-b border-gray-200 dark:border-slate-700 z-10 font-Nunito">
          <div className="flex items-center gap-4">
             <h2 className="text-lg font-semibold text-gray-800 dark:text-white hidden md:block">
                Welcome back!
             </h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
                <button className="p-2 text-gray-400 hover:text-grad1 transition-colors relative">
                    <FaBell size={20} />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
            </div>
            
            <div className="relative">
                <button 
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center gap-2 focus:outline-none group"
                >
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-gray-800 dark:text-white leading-tight group-hover:text-grad1 transition-colors">User Profile</p>
                        <p className="text-[10px] text-gray-400 uppercase tracking-tighter">{roleName}</p>
                    </div>
                    <img
                        src={userImage || "/team/Etienne2.png"}
                        alt="User"
                        className="w-10 h-10 rounded-full border-2 border-gray-100 group-hover:border-grad1 transition-all object-cover shadow-sm"
                    />
                </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#F8FAFC] dark:bg-slate-900 scroll-smooth">
          <div className="max-w-7xl mx-auto animate-fadeIn">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
