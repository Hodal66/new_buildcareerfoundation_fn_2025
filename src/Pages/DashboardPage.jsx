import { useEffect, useState } from "react";
// import { RiAddCircleLine } from "react-icons/ri";
// import { v4 as uuid } from "uuid";
// import TableGenerator from "../Pages/DashboardPageStuff/TableGenerator";
// import TableHeader from "../Pages/DashboardPageStuff/TableHeader";
// import NewBusForm from "../Pages/DashboardPageStuff/NewBusForm";
import EditBusForm from "../Pages/DashboardPageStuff/EditBusForm";
import toast from "react-hot-toast";
// import { HeaderComponent } from "../Pages/Common/HeaderComponent";
import FooterDashboard from "../components/Common/FooterDashboard";
import AsideAdmin from "../Pages/DashboardPageStuff/TemplateComponent/AsideAdmin";
import HeaderAdmin from "../Pages/DashboardPageStuff/TemplateComponent/HeaderAdmin";
import NewPost from "../Pages/DashboardPageStuff/NewPost";
import { GET_ALL_POSTS, DELETE_ONE_POST} from "../hooks/usePosts";
import { useMutation, useQuery } from "@apollo/client";
import axios from "axios";
import { client } from "../main";
import MainContentOfPost from "../Pages/DashboardPageStuff/TemplateComponent/MainContentOfPost";
import MainContentOfVisitor from "../Pages/DashboardPageStuff/TemplateComponent/MainContentOfVisitor";



const DashboardPage = () => {
  // to change the state for toggling the modal
  const [modalOpen, setModalOpen] = useState(false);

  // loading screen rendering is managed by this state is here

  const [linkingToTheAsideAndMainPage, setLinkingToTheAsideAndMainPage] =
    useState({
      isPostClicked: true,
      isVisitorsClicked: false,
    });

  // displaying the error message states
  const [error, setError] = useState({
    message: "",
    isError: false,
  });

  // global data setter when new operator is saved or updated into the database
  const [datas, setDatas] = useState([]);
  // const [image, setImage] = useState([]);

  //  the state to manage the updating for getting the data pre-populate them into the form field
  const [update, setUpdate] = useState("");

  // function to check for dupplicate while creating new operator
  // eslint-disable-next-line no-unused-vars
  const isRegisterDuplicated = (email) => {
    let index = datas.findIndex((operator) => operator.email === email);
    return index !== -1;
  };

  // function containing the errorMessage functionality
  const displayPopupMessage = (promise, actionPerformed) => {
    const messages = () => {
      if (actionPerformed === "Save") {
        return {
          // this opens the loading icon and display this messsge while loading "Saving operator ..."
          loading: "Saving operator ...",

          // this is the success function which receive anonymous function which is automatically
          //  passed the response for RESOLVED promise
          success: () => `Successfully saved`,

          // this is the error function which receive anonymous function which is automatically
          //  passed the response for REJECTED promise
          error: () => `This error occured while saving:`,
        };
      } else if (actionPerformed === "Update") {
        return {
          // this opens the loading icon and display this messsge while loading "Saving operator ..."
          loading: "Updating operator ...",

          // this is the success function which receive anonymous function which is automatically
          //  passed the response for RESOLVED promise
          success: () => `Successfully updated `,

          // this is the error function which receive anonymous function which is automatically
          //  passed the response for REJECTED promise
          error: () => `This error occured while updating:`,
        };
      } else if (actionPerformed === "ImageUploading") {
        return {
          // this opens the loading icon and display this messsge while loading "Saving operator ..."
          loading: "Uploading images to the hosting provider ...",

          // this is the success function which receive anonymous function which is automatically
          //  passed the response for RESOLVED promise
          success: () => `Successfully uploaded those images !!!!`,
          // `Successfully uploaded ${response.data.bus_number.toUpperCase()}`,

          // this is the error function which receive anonymous function which is automatically
          //  passed the response for REJECTED promise
          error: () => `This error occured while uploading`,
        };
      } else {
        return {
          // this opens the loading icon and display this messsge while loading "Saving operator ..."
          loading: "Deleting post ...",

          // this is the success function which receive anonymous function which is automatically
          //  passed the response for RESOLVED promise
          success: () => `Post has been successfully deleted`,
          // success: (response) => `${response[0].data.message}`,

          // this is the error function which receive anonymous function which is automatically
          //  passed the response for REJECTED promise
          error: (err) =>
            `This error occured while deleting operator: ${err.message.toUpperCase()}`,
        };
      }
    };

    // this toast.promise is handling the async behaviours of the fetching or posting data to the database
    // and it receives that promise (operator) as a first argument and second argument is series of objects containing the configulation for
    // handling the error message when promise rejects and success message when promise resolves
    // it also receives the object containing the styles of the modal which pops up.
    toast.promise(promise, messages(), {
      style: {
        minWidth: "250px",
      },

      // configuring the success message, setting the time in millsecond it will remain on the page after being
      // popped and the icon it should have while rendered on the screen
      success: {
        duration: 5000,
        icon: "✅",
      },

      // configuring the error message, setting the time in millsecond it will remain on the page after being
      // popped and the icon it should have while rendered on the screen
      error: {
        duration: 7000,
        icon: "❌",
      },
    });
  };

  // fetch all data once and populate them on the table before doing any thing else
  const { data, loading } = useQuery(GET_ALL_POSTS);
  const [delete_image] = useMutation(DELETE_ONE_POST, {
    variables: {
      // imageId: imageObject._id,
    },
    onCompleted: async ({ deleteImage }) => {
      console.log(deleteImage);
      await client.refetchQueries({
        include: [GET_ALL_POSTS],
      });
      // navigate(`/gallery/${country_id}`);
    },
    onError: (errors) => {
      console.log(errors);
      // navigate("/");
    },
  });
  useEffect(() => {
    const fetchAll = async () => {
      // allow display the loading component
      try {
        setDatas(data?.getAllPosts);
        setError({
          message: "",
          isError: false,
        });
      } catch (errors) {
        setError((prev) => {
          return {
            ...prev,
            isError: true,
            message: `${errors.code}: ${errors.message}`,
          };
        });
      }
    };
    fetchAll();
  }, [data?.getAllPosts]);

  // this function is called by the edit button down down on the table row component
  // which capture the data of the current row edited
  const captureDataForUpdate = (dataToUpdate) => {
    // console.log(dataToUpdate)
    setUpdate(dataToUpdate);
  };
  // eslint-disable-next-line no-unused-vars
  const addDataFromForm = async (dataFromForm) => {};

  // function to add the data from edit form to the the database and rerender UI with the updated data
  // eslint-disable-next-line no-unused-vars
  const addDataToUpdate = async (dataFromEditForm) => {};

  const deleteHandle = async (data) => {
    console.log(data);
    try {
      const promiseResultArray = [];
      data.post.image_url.forEach((imageObject) => {
        promiseResultArray.push(
          axios.post("http://localhost:2000/delete_image", {
            filename: imageObject.filename,
          })
        );
      });
      const deletingAllImages = Promise.all(promiseResultArray);
      displayPopupMessage(deletingAllImages, "Deleting Image");
      const promiseResult = await deletingAllImages;

      // "Variable "$input" got invalid value {}; Field "post_id" of required type "ID!" was not provided."
      console.log(promiseResult);
      if (promiseResult[0].data.status) {
        await delete_image({
          variables: {
            input: {
              post_id: data.post._id,
            },
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // showing modals when new operator or edit button is clicked
  const showModal = () => {
    if (update) {
      return (
        <EditBusForm
          update={update}
          setCloseUpdate={setUpdate}
          setOpenModal={setModalOpen}
          setData={addDataToUpdate}
          displayPopupMessage={displayPopupMessage}
        />
      );
    } else {
      return (
        // <NewBusForm
        //   setOpenModal={setModalOpen}
        //   setData={addDataFromForm}
        // />
        <NewPost
          setOpenModal={setModalOpen}
          setData={addDataFromForm}
          displayPopupMessage={displayPopupMessage}
          // setImageData={setImage}
        />
      );
    }
  };
  return (
    <div className="grid h-screen w-screen overflow-x-hidden grid-cols-12 grid-rows-12 font-Nunito bg-[#f3f3f3]">
      <HeaderAdmin />
      {/* conditional rendering of the edit when the button is pressed and modalOpen variable became true */}
      {modalOpen && showModal()}
      {linkingToTheAsideAndMainPage.isPostClicked && (
        <MainContentOfPost
          captureDataForUpdate={captureDataForUpdate}
          error={error}
          deleteHandle={deleteHandle}
          setModalOpen={setModalOpen}
          loading={loading}
          datas={datas}
        />
      )}

      {linkingToTheAsideAndMainPage.isVisitorsClicked && (
        <MainContentOfVisitor />
      )}
      <AsideAdmin
        linkingToTheAsideAndMainPage={linkingToTheAsideAndMainPage}
        setLinkingToTheAsideAndMainPage={setLinkingToTheAsideAndMainPage}
      />
    
      <FooterDashboard />
    </div>
  );
};

export default DashboardPage;
