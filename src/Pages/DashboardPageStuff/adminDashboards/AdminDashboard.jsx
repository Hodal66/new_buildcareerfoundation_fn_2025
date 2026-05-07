import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import Overview from "./Overview";
import ViewMoreActivitieInformation from "./ViewMoreActivitieInformation";
import AddNewActivitie from "./AddNewActivitie";
import UpdateActivities from "./UpdateActivities";
import Others from "./Others";
import TableOfActivitieContent from "./TableOfActivitieContent";
import Users from "./Users";
import SubscribedUsers from "./SubscribedUsers";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="overview" element={<Overview />} />
        <Route path="overview/:id" element={<ViewMoreActivitieInformation />} />
        <Route path="activities" element={<TableOfActivitieContent />} />
        <Route path="addNewActivitie" element={<AddNewActivitie />} />
        <Route path="updateActivities/:id" element={<UpdateActivities />} />
        <Route path="users" element={<Users />} />
        <Route path="subscriptions" element={<SubscribedUsers />} />
        <Route path="others" element={<Others />} />
        <Route path="*" element={<Navigate to="overview" />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminDashboard;
