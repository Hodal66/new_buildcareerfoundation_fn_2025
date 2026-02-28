/* eslint-disable react/prop-types */
import { useState, useMemo } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import DashboardTable from '../../../../components/DashboardTable';
import ConfirmationModal from '../../../../components/ConfirmationModal';

const UserTable = ({ data, onUserClick, onEdit, onDelete }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName',
        header: 'User',
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-grad1/10 flex items-center justify-center font-bold text-grad1">
               {row.original.firstName?.[0] || ''}{row.original.secondName?.[0] || ''}
            </div>
            <div>
              <p className="font-bold text-gray-800 dark:text-white">
                {row.original.firstName} {row.original.secondName}
              </p>
              <p className="text-xs text-slate-500 font-medium">{row.original.email}</p>
            </div>
          </div>
        ),
      },
      {
        accessorKey: 'role',
        header: 'Role',
        cell: ({ getValue }) => {
          const role = (getValue() || 'student').toLowerCase();
          const colors = {
            student: 'bg-grad1/10 text-grad1',
            mentor: 'bg-grad2/10 text-grad2',
            admin: 'bg-grad3/10 text-grad3',
          };
          return (
            <span className={`px-3 py-1 rounded-full text-[12px] font-bold ${colors[role] || 'bg-gray-100 text-gray-500'}`}>
              {role}
            </span>
          );
        },
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ getValue }) => {
          const status = getValue() || 'Active';
          return (
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${status === 'Active' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-gray-300'}`}></div>
              <span className="text-sm font-bold text-gray-700 dark:text-slate-300">{status}</span>
            </div>
          );
        },
      },
      {
        accessorKey: 'academic_score',
        header: 'Academic Excellence',
        cell: ({ getValue }) => {
          const score = getValue() || 85;
          return (
             <div className="w-32">
                <div className="flex justify-between text-[13px] font-semibold text-slate-500/70 dark:text-slate-400 mb-1">
                    <span>Progress</span>
                    <span>{score}%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-grad1 rounded-full opacity-80 transition-all duration-500" 
                        style={{ width: `${score}%` }}
                    ></div>
                </div>
             </div>
          );
        },
      },
      {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
          <div className="flex gap-2">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onEdit(row.original);
              }}
              className="p-2 hover:bg-grad1/10 text-grad1 rounded-lg transition-colors"
              title="Edit User"
            >
              <FaEdit size={14} />
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setUserToDelete(row.original);
                setIsDeleteModalOpen(true);
              }}
              className="p-2 hover:bg-red-50 text-red-500 rounded-lg transition-colors"
              title="Delete User"
            >
              <FaTrash size={14} />
            </button>
          </div>
        ),
      },
    ],
    [onEdit]
  );

  const confirmDelete = () => {
    if (userToDelete) {
      onDelete(userToDelete._id);
      setUserToDelete(null);
    }
  };

  return (
    <>
      <DashboardTable 
        data={data} 
        columns={columns} 
        title="Active User Management"
        searchPlaceholder="Fuzzy search users (name, email, role)..."
        onRowClick={onUserClick}
      />

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title="Confirm User Deletion"
        message={`You are about to permanently remove ${userToDelete?.firstName} ${userToDelete?.secondName} from the BCF system. This action cannot be reversed.`}
        confirmText="Delete User Profile"
      />
    </>
  );
};

export default UserTable;
