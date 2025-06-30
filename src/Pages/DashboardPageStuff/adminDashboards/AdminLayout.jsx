/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */


import { useState } from "react";
import { FaBars, FaBell, FaHome, FaList, FaEnvelope, FaTimes, FaServer } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const [isLogout, setIsLogout] = useState(false);
   const navigate = useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem("userToken");
      navigate(`/`);
  }

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300 group
     ${isActive 
        ? "bg-grad1 font-bold shadow-md border-l-4 border-white"
        : "hover:bg-darkBluePhant hover:text-white text-white/70 hover:border-l-4 hover:border-white/30 border-l-4 border-transparent"
     }`;

  return (
    <div className="flex h-screen font-Nunito">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? "w-64" : "w-20"} bg-gradient-to-b from-grad1 to-grad2 text-white flex flex-col transition-all duration-300`}>
        
        {/* Logo and Toggle */}
        <div className="flex items-center justify-between p-4 border-b border-grayColor">
          {isSidebarOpen && (
            <h1 className="text-2xl font-bold transition-all duration-300">
              Admin
            </h1>
          )}
          <button
            className="text-white focus:outline-none ml-auto"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col mt-4 space-y-2">
          <NavLink to="/admin/overview" className={linkClasses}>
            <FaHome size={20} />
            {isSidebarOpen && <span>Activities Overview</span>}
          </NavLink>
          <NavLink to="/admin/users" className={linkClasses}>
            <FaList size={20} />
            {isSidebarOpen && <span>Users</span>}
          </NavLink>
          <NavLink to="/admin/subscriptions" className={linkClasses}>
            <FaEnvelope size={20} />
            {isSidebarOpen && <span>Subscriptions</span>}
          </NavLink>
          <NavLink to="/admin/others" className={linkClasses}>
            <FaServer size={20} />
            {isSidebarOpen && <span>Other</span>}
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <div className="flex items-center">
            <FaBell className="text-textBluePhant text-2xl mr-4" />
          </div>
          <div className="flex items-center" onClick={()=>setIsLogout(!isLogout)}>
              {isLogout &&  <button onClick={handleLogout}>
              Logout
            </button>}
            <img
              src="/team/Etienne2.png"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
          
           
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-bgGray">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
