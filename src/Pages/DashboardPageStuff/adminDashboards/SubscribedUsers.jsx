/* eslint-disable react/prop-types */
import { useMutation, useQuery } from "@apollo/client";
import { RiDeleteBin6Line } from "react-icons/ri";
import NoDataFoundComponent from "../../../components/NoDataFoundComponent";
import { GET_ALL_SUBSCRIBERS } from "../../../hooks/graphql/queries/SubscribersQueries";
import { DELETE_SUBSCRIBER } from "../../../hooks/graphql/mutation/SubscriptionMutation";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SubscribedUsers = () => {
  const { data, loading, error, refetch } = useQuery(GET_ALL_SUBSCRIBERS);

  const [deleteSubscriber] = useMutation(DELETE_SUBSCRIBER, {
    onCompleted: () => {
      refetch();
      toast.success("Subscriber deleted successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
      });
    },
    onError: (err) => {
      toast.error("Failed to delete subscriber. Please try again.", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
      });
      console.error("Delete error:", err.message);
    },
  });

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this subscriber?");
    if (confirmDelete) {
      await deleteSubscriber({
        variables: { input:id }, // <- correct format
      });
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(Number(timestamp));
    return isNaN(date.getTime()) ? "Invalid date" : date.toLocaleDateString();
  };

  if (loading) return <p>Loading Subscribers...</p>;
  if (error) return <NoDataFoundComponent onPageEmptyContent="Failed to fetch subscribers." />;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">All Subscribed Users</h1>
      <ToastContainer />

      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Date Subscribed</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">isEmailSent</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.getAllSubscriptions?.map((subscriber) => (
            <tr key={subscriber.id} className="border-t hover:bg-gray-50">
              <td className="p-2 border">{formatDate(subscriber.date_subscribed)}</td>
              <td className="p-2 border">{subscriber.subscriptionWithEmail}</td>
              <td className="p-2 border">{subscriber.category || "N/A"}</td>
              <td className="p-2 border text-center">
                <button
                  onClick={() => handleDelete(subscriber.id)}
                  title="Delete Subscriber"
                >
                  <RiDeleteBin6Line className="text-red-500 hover:text-red-700 w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubscribedUsers;
