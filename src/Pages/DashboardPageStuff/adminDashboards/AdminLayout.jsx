import { FaChartLine, FaUsers, FaTasks, FaEnvelope, FaServer } from "react-icons/fa";
import DashboardLayout from "../../../components/Common/DashboardLayout";

const AdminLayout = ({ children }) => {
  const adminNavigation = [
    { to: "/admin/overview", label: "Dashboard", icon: FaChartLine },
    { to: "/admin/activities", label: "Activities", icon: FaTasks },
    { to: "/admin/users", label: "Users", icon: FaUsers },
    { to: "/admin/subscriptions", label: "Subscriptions", icon: FaEnvelope },
    { to: "/admin/others", label: "System", icon: FaServer },
  ];

  return (
    <DashboardLayout 
      roleName="Administrator"
      navigationLinks={adminNavigation}
      userImage="/team/Etienne2.png"
    >
      {children}
    </DashboardLayout>
  );
};

export default AdminLayout;
