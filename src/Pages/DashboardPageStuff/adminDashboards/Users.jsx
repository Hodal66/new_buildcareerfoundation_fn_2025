import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_ALL_USERS } from "../../../hooks/graphql/queries/UserQueries";
import { DELETE_USER } from "../../../hooks/graphql/mutation/UserMutation";
import AdvancedLoader from "../../../components/AdvancedLoader";
import NoDataFoundComponent from "../../../components/NoDataFoundComponent";
import UserOverviewWidgets from "./UserManagement/UserOverviewWidgets";
import UserTable from "./UserManagement/UserTable";
import UserDetailModal from "./UserManagement/UserDetailModal";
import CreateUserModal from "./UserManagement/CreateUserModal";
import EditUserModal from "./UserManagement/EditUserModal";
import { toast } from "react-toastify";

function Users() {
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_ALL_USERS }],
    onCompleted: () => toast.success("User deleted successfully"),
    onError: (err) => toast.error(`Error deleting user: ${err.message}`),
  });

  if (loading) return <AdvancedLoader loading={loading} />;
  if (error) return <div className="p-8 text-red-500 font-bold">Error loading users: {error.message}</div>;

  const users = data?.get_all_users || [];

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsDetailModalOpen(true);
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleDeleteUser = (id) => {
    deleteUser({ variables: { id } });
  };

  return (
    <div className="p-6 lg:p-10 bg-[#F8FAFC] dark:bg-slate-900 min-h-screen font-Nunito">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black text-gray-800 dark:text-white tracking-tight">User Management</h1>
            <p className="text-sm font-bold text-gray-400 mt-1">
              Oversee and empower the BCF community of students and mentors.
            </p>
          </div>
          <button 
            onClick={() => setIsCreateModalOpen(true)}
            className="px-6 py-3 bg-grad1 text-white rounded-2xl font-bold shadow-lg shadow-grad1/20 hover:scale-105 transition-all text-sm"
          >
            Add New User
          </button>
        </div>

        {/* Overview Widgets */}
        <UserOverviewWidgets 
          stats={{
            totalStudents: users.filter(u => u.role === 'student' || !u.role).length,
            totalMentors: users.filter(u => u.role === 'mentor').length,
            totalAdmins: users.filter(u => u.role === 'admin').length
          }} 
        />

        {/* Main Table Section */}
        {users.length > 0 ? (
          <UserTable 
            data={users} 
            onUserClick={handleUserClick} 
            onEdit={handleEditClick} 
            onDelete={handleDeleteUser} 
          />
        ) : (
          <NoDataFoundComponent onPageEmptyContent={"No users found in the system."} />
        )}

        {/* User Detail Modal */}
        <UserDetailModal 
          user={selectedUser} 
          isOpen={isDetailModalOpen} 
          onClose={() => setIsDetailModalOpen(false)} 
        />

        {/* Create User Modal */}
        <CreateUserModal 
          isOpen={isCreateModalOpen} 
          onClose={() => setIsCreateModalOpen(false)} 
        />

        {/* Edit User Modal */}
        <EditUserModal 
          user={selectedUser}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
        />
      </div>
    </div>
  );
}

export default Users;
