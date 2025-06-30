// import React from 'react'

import toast from "react-hot-toast";

export const displayPopupMessage = (promise, actionPerformed) => {
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
