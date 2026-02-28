/* eslint-disable react/prop-types */
import { useMutation, useQuery } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import DashboardTable from "../../../components/DashboardTable";
import NoDataFoundComponent from "../../../components/NoDataFoundComponent";
import ConfirmationModal from "../../../components/ConfirmationModal";
import { GET_ALL_SUBSCRIBERS } from "../../../hooks/graphql/queries/SubscribersQueries";
import { DELETE_SUBSCRIBER } from "../../../hooks/graphql/mutation/SubscriptionMutation";
import { toast, ToastContainer } from "react-toastify";
import { useState, useMemo } from "react";

const SubscribedUsers = () => {
  const { data, loading, error, refetch } = useQuery(GET_ALL_SUBSCRIBERS);

  const [deleteSubscriber] = useMutation(DELETE_SUBSCRIBER, {
    onCompleted: () => {
      refetch();
      toast.success("Subscriber deleted successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
    },
    onError: (err) => {
      toast.error(`Error: ${err.message}`);
    },
  });

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [subscriberIdToDelete, setSubscriberIdToDelete] = useState(null);

  const columns = useMemo(() => [
    {
      accessorKey: 'date_subscribed',
      header: 'Subscription Date',
      cell: ({ getValue }) => {
        const date = new Date(Number(getValue()));
        return isNaN(date.getTime()) ? "Invalid date" : date.toLocaleDateString();
      }
    },
    {
      accessorKey: 'subscriptionWithEmail',
      header: 'Email Address',
      cell: ({ getValue }) => <span className="font-bold text-gray-800 dark:text-white">{getValue()}</span>
    },
    {
      accessorKey: 'category',
      header: 'Category',
      cell: ({ getValue }) => (
        <span className="px-3 py-1 bg-grad3/10 text-grad3 rounded-full text-[12px] font-bold">
          {getValue() || "N/A"}
        </span>
      )
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <div className="flex justify-center">
          <button
            onClick={() => {
              setSubscriberIdToDelete(row.original.id);
              setIsDeleteModalOpen(true);
            }}
            className="p-2 hover:bg-red-50 text-red-500 rounded-lg transition-colors"
            title="Delete Subscriber"
          >
            <FaTrash size={14} />
          </button>
        </div>
      )
    }
  ], []);

  const confirmDelete = async () => {
    if (subscriberIdToDelete) {
      await deleteSubscriber({
        variables: { input: subscriberIdToDelete },
      });
      setSubscriberIdToDelete(null);
      setIsDeleteModalOpen(false);
    }
  };

  if (loading) return <div className="flex justify-center p-20"><div className="w-10 h-10 border-4 border-grad1 border-t-transparent rounded-full animate-spin"></div></div>;
  if (error) return <NoDataFoundComponent onPageEmptyContent="Failed to fetch subscribers." />;

  return (
    <div className="p-8 space-y-8">
      <ToastContainer />
      <div>
        <h1 className="text-3xl font-black text-gray-800 dark:text-white tracking-tight">Mailing List</h1>
        <p className="text-sm font-medium text-slate-500/70 dark:text-slate-400 mt-1">Manage Foundation newsletter subscribers</p>
      </div>

      <DashboardTable 
        data={data?.getAllSubscriptions || []} 
        columns={columns} 
        title="Active Subscribers"
        searchPlaceholder="Filter by email or category..."
      />

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title="Unsubscribe User?"
        message="This will remove the user from your mailing list and communications. They will need to re-subscribe manually to receive future updates."
        confirmText="Confirm Unsubscribe"
      />
    </div>
  );
};

export default SubscribedUsers;
