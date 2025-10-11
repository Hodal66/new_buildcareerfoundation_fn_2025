/* eslint-disable no-unused-vars */
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, gql } from "@apollo/client";
import Heading1 from "./Headings/Heading1";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// GraphQL mutation
const MAKE_SUBSCRIBE = gql`
  mutation MakeSubscribe($input: SubscriptionsInput) {
    makeSubscribe(input: $input) {
      id
      subscriptionWithEmail
      date_subscribed
    }
  }
`;

function SubcriptionComponent() {
  const [makeSubscribe] = useMutation(MAKE_SUBSCRIBE);

  const initialSubscriptionData = {
    subscriptionContent: "",
  };

  const validationSchema = Yup.object({
    subscriptionContent: Yup.string()
      .email("Enter a valid email!")
      .required("Email is required!"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const { subscriptionContent } = values;

    try {
      const response = await makeSubscribe({
        variables: {
          input: {
            subscriptionWithEmail: subscriptionContent,
          },
        },
      });

      toast.success("🎉 Subscribed successfully!", {
        position: "top-right",
        autoClose: 4000,
      });
      resetForm();
    } catch (error) {
      toast.error(`❌ ${error.message}`, {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  const formik = useFormik({
    initialValues: initialSubscriptionData,
    onSubmit: handleSubmit,
    validationSchema,
  });

  return (
    // Responsive subscription section with adaptive padding: Mobile: p-8, Tablet: p-16, Desktop: p-32
    <div className="bg-green-200 flex flex-col justify-center items-center
      p-8 gap-6
      sm:p-12 sm:gap-8
      md:p-20 md:gap-10
      lg:p-32 lg:gap-12">
      <Heading1 Title={"Get in Touch With Us"} />
      {/* Form with responsive width and spacing: Mobile: w-full gap-2, Tablet: w-3/4 gap-2, Desktop: w-1/2 gap-3 */}
      <form
        onSubmit={formik.handleSubmit}
        className="flex justify-center items-center
          w-full gap-2
          sm:w-3/4 sm:gap-2
          md:w-2/3 md:gap-3
          lg:w-1/2
          flex-col
          sm:flex-row">
        {/* Email input with responsive padding and text */}
        <input
          className="w-full
            px-2 py-2 text-sm
            sm:px-3 sm:py-2 sm:text-base
            md:px-4
            rounded border border-gray-300"
          type="text"
          placeholder="you@example.com"
          name="subscriptionContent"
          value={formik.values.subscriptionContent}
          onChange={formik.handleChange}
        />
        {/* Submit button with responsive padding and text */}
        <input
          type="submit"
          value="Subscribe Now"
          className="bg-blue-500 font-bold text-whitePhant hover:cursor-pointer
            transition-colors duration-200 hover:bg-blue-600
            rounded
            w-full sm:w-auto
            px-4 py-2 text-sm
            sm:px-6 sm:py-2 sm:text-base
            md:px-8
            whitespace-nowrap"
        />
      </form>

      {/* Error message with responsive text size */}
      {formik.errors.subscriptionContent &&
        formik.touched.subscriptionContent && (
          <div className="text-red-600
            text-xs
            sm:text-sm
            md:text-base">
            {formik.errors.subscriptionContent}
          </div>
        )}

      {/* Toast container for showing popups */}
      <ToastContainer />
    </div>
  );
}

export default SubcriptionComponent;
