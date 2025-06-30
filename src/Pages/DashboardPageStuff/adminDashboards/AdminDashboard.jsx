import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import Overview from "./Overview";
import ViewMoreActivitieInformation from "./ViewMoreActivitieInformation";
import AddNewActivitie from "./AddNewActivitie";
import UpdateActivities from "./UpdateActivities";
import Others from "./Others";
import Users from "./Users";
import SubscribedUsers from "./SubscribedUsers";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="overview" element={<Overview />} />
        <Route path="users" element={<Users />} />
        <Route path="addNewActivitie" element={<AddNewActivitie />} />
        <Route path="others" element={<Others />} />
        <Route path="updateActivities/:id" element={<UpdateActivities />} />
        <Route path="subscriptions" element={<SubscribedUsers />} />
        <Route path="overview/:id" element={<ViewMoreActivitieInformation />} />
        <Route path="*" element={<Navigate to="overview" />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminDashboard;
