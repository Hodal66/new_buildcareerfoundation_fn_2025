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
    <div className="p-32 bg-green-200 flex flex-col justify-center items-center gap-12">
      <Heading1 Title={"Get in Touch With Us"} />
      <form
        onSubmit={formik.handleSubmit}
        className="flex gap-3 justify-center items-center w-1/2"
      >
        <input
          className="px-2 w-full"
          type="text"
          placeholder="you@example.com"
          name="subscriptionContent"
          value={formik.values.subscriptionContent}
          onChange={formik.handleChange}
        />
        <input
          type="submit"
          value="Subscribe Now"
          className="bg-blue-500 p-2 font-bold text-whitePhant hover:cursor-pointer"
        />
      </form>

      {formik.errors.subscriptionContent &&
        formik.touched.subscriptionContent && (
          <div className="text-red-600">{formik.errors.subscriptionContent}</div>
        )}

      {/* Toast container for showing popups */}
      <ToastContainer />
    </div>
  );
}

export default SubcriptionComponent;
