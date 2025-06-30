/* eslint-disable react/prop-types */
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_ACTIVITIES_POSTS } from "../../../hooks/graphql/queries/ActivitieQueries";
import { DELETE_ONE_ACTIVITIES_POST } from "../../../hooks/graphql/mutation/ActivitieMutation";
import { useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlineEye } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import NoDataFoundComponent from "../../../components/NoDataFoundComponent";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TableOfActivitieContent = () => {
  const { data, loading, error, refetch } = useQuery(GET_ALL_ACTIVITIES_POSTS);
  const navigate = useNavigate();

  const [deletePost] = useMutation(DELETE_ONE_ACTIVITIES_POST, {
    onCompleted: () => {
      refetch();
      toast.success("✅ Post deleted successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
      });
    },
    onError: (err) => {
      toast.error(`Failed to delete the post. ${err.message}`, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
      });
      console.error("Delete error:", err);
    },
  });

  const handleAddNew = () => {
    navigate("/admin/addNewActivitie");
  };

  const handleViewMore = (id) => {
    navigate(`/admin/overview/${id}`);
  };

  const handleUpdate = (id) => {
    navigate(`/admin/updateActivities/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this post?")) {
        await deletePost({
          variables: { input: id },
        });
        console.log("The Id You are Using to Delete this Subscriber is :", id);
      }
    } catch (error) {
      console.log("You are deleting and getting this Error : ", error);
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(Number(timestamp));
    return isNaN(date.getTime()) ? "Invalid date" : date.toLocaleDateString();
  };

  if (loading) return <p>Loading posts...</p>;
  if (error)
    return (
      <NoDataFoundComponent onPageEmptyContent="Failed to load activity posts." />
    );

  return (
    <div className="p-4">
      <ToastContainer />
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">All Activity Posts</h1>
        <button
          onClick={handleAddNew}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          <AiOutlinePlus className="w-5 h-5" />
          Add New Activity
        </button>
      </div>

      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Date Posted</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Content</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.getAllPosts?.map((post) => (
            <tr key={post._id} className="border-t hover:bg-gray-50">
              <td className="p-2 border">{formatDate(post.date_posted)}</td>
              <td className="p-2 border">{post.title}</td>
              <td className="p-2 border">{post.category}</td>
              <td className="p-2 border">
                {post.content.length > 50
                  ? `${post.content.substring(0, 50)}...`
                  : post.content}
              </td>
              <td className="p-2 border">
                <div className="flex gap-3 items-center justify-center">
                  <button
                    onClick={() => handleViewMore(post._id)}
                    title="View More"
                  >
                    <HiOutlineEye className="text-blue-500 hover:text-blue-700 w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleUpdate(post._id)}
                    title="Edit Post"
                  >
                    <FiEdit className="text-green-600 hover:text-green-800 w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(post._id)}
                    title="Delete Post"
                  >
                    <RiDeleteBin6Line className="text-red-500 hover:text-red-700 w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableOfActivitieContent;
