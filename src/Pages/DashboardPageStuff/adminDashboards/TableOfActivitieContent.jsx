/* eslint-disable react/prop-types */
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_ACTIVITIES_POSTS } from "../../../hooks/graphql/queries/ActivitieQueries";
import { DELETE_ONE_ACTIVITIES_POST } from "../../../hooks/graphql/mutation/ActivitieMutation";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash, FaEye, FaPlus } from "react-icons/fa";
import DashboardTable from "../../../components/DashboardTable";
import NoDataFoundComponent from "../../../components/NoDataFoundComponent";
import ConfirmationModal from "../../../components/ConfirmationModal";
import { toast, ToastContainer } from "react-toastify";
import { useState, useMemo } from "react";

const TableOfActivitieContent = () => {
  const { data, loading, error, refetch } = useQuery(GET_ALL_ACTIVITIES_POSTS);
  const navigate = useNavigate();

  const [deletePost] = useMutation(DELETE_ONE_ACTIVITIES_POST, {
    onCompleted: () => {
      refetch();
      toast.success("✅ Post deleted successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
    },
    onError: (err) => {
      toast.error(`Failed to delete. ${err.message}`);
    },
  });

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);

  const columns = useMemo(() => [
    {
      accessorKey: 'date_posted',
      header: 'Date Posted',
      cell: ({ getValue }) => {
        const date = new Date(Number(getValue()));
        return isNaN(date.getTime()) ? "Invalid date" : date.toLocaleDateString();
      }
    },
    {
      accessorKey: 'title',
      header: 'Title',
      cell: ({ getValue }) => {
        const title = getValue() || "";
        const words = title.split(/\s+/);
        const truncated = words.length > 10 ? words.slice(0, 10).join(" ") + "..." : title;
        return (
          <span className="font-bold text-gray-800 dark:text-white" title={title}>
            {truncated}
          </span>
        );
      }
    },
    {
      accessorKey: 'category',
      header: 'Category',
      cell: ({ getValue }) => (
        <span className="px-3 py-1 bg-grad2/10 text-grad2 rounded-full text-[12px] font-bold text-center">
          {getValue()}
        </span>
      )
    },
    {
      accessorKey: 'content',
      header: 'Preview',
      cell: ({ getValue }) => {
        const text = getValue() || "";
        return <p className="text-xs text-slate-500 max-w-xs truncate">{text}</p>;
      }
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <div className="flex gap-2">
          <button
            onClick={() => navigate(`/admin/overview/${row.original._id}`)}
            className="p-2 hover:bg-grad1/10 text-grad1 rounded-lg transition-colors"
            title="View Details"
          >
            <FaEye size={14} />
          </button>
          <button
            onClick={() => navigate(`/admin/updateActivities/${row.original._id}`)}
            className="p-2 hover:bg-grad2/10 text-grad2 rounded-lg transition-colors"
            title="Edit Post"
          >
            <FaEdit size={14} />
          </button>
          <button
            onClick={() => {
              setPostIdToDelete(row.original._id);
              setIsDeleteModalOpen(true);
            }}
            className="p-2 hover:bg-red-50 text-red-500 rounded-lg transition-colors"
            title="Delete Post"
          >
            <FaTrash size={14} />
          </button>
        </div>
      )
    }
  ], [navigate]);

  const confirmDelete = async () => {
    if (postIdToDelete) {
      try {
        await deletePost({ variables: { input: postIdToDelete } });
        setPostIdToDelete(null);
        setIsDeleteModalOpen(false);
      } catch (error) {
        console.error("Delete Error:", error);
      }
    }
  };

  if (loading) return <div className="flex justify-center p-20"><div className="w-10 h-10 border-4 border-grad1 border-t-transparent rounded-full animate-spin"></div></div>;
  if (error) return <NoDataFoundComponent onPageEmptyContent="Failed to load activity posts." />;

  return (
    <div className="p-8 space-y-8">
      <ToastContainer />
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-800 dark:text-white tracking-tight">Activity Content</h1>
          <p className="text-sm font-medium text-slate-500/70 dark:text-slate-400 mt-1">Manage BCF Community updates and posts</p>
        </div>
        <button
          onClick={() => navigate("/admin/addNewActivitie")}
          className="flex items-center gap-2 bg-grad1 text-white px-8 py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-grad1/20 hover:scale-[1.02] active:scale-95 transition-all"
        >
          <FaPlus size={14} />
          New Activity
        </button>
      </div>

      <DashboardTable 
        data={data?.getAllPosts || []} 
        columns={columns} 
        title="Published Activities"
        searchPlaceholder="Search by title, category, or content..."
      />

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title="Confirm Post Deletion"
        message="This will permanently remove the post and its content from the public website and archives. This action cannot be undone."
        confirmText="Permanently Delete Post"
      />
    </div>
  );
};

export default TableOfActivitieContent;
