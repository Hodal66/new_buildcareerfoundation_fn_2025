/**
 * LoginIn Page - Modern Redesign
 * Professional admin login with enhanced security UI/UX
 * Features: Password visibility toggle, loading states, error handling, animations
 */

/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import FooterComponentOne from "../components/FooterComponentOne";
import FormInput from "../components/Forms/FormInput";
import FormButton from "../components/Forms/FormButton";
import FormCard from "../components/Forms/FormCard";
import { useFormik } from "formik";
import * as Yup from "yup";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router";
import styles from "../styles";

// Icons
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineShieldCheck } from "react-icons/hi";
import { MdLogin } from "react-icons/md";

const LOG_IN = gql`
  mutation Mutation($email: String!, $password: String!) {
    login_user(email: $email, password: $password) {
      token
      user {
        _id
        email
        firstName
        secondName
        password
        posts
      }
    }
  }
`;

export const LoginIn = () => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const [logiInUserFunc, { loading }] = useMutation(LOG_IN, {
    onCompleted: async (data) => {
      localStorage.setItem("userToken", data.login_user.token);
      navigate(`/admin/overview`);
    },
    onError: (error) => {
      setServerError(error.message || "Login failed. Please check your credentials.");
    },
  });

  const validate = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = async (values) => {
    setServerError("");
    const { email, password } = values;
    try {
      await logiInUserFunc({
        variables: { email, password },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: validate,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderComponent />

      {/* Main Content */}
      <div className={`${styles.blueGradient} flex-1 flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 px-4`}>
        <FormCard
          logo="/logob.png"
          title="Admin Login"
          subtitle={
            <div className="flex items-center justify-center gap-2">
              <HiOutlineShieldCheck className="w-5 h-5 text-green-600" />
              <span>Secure access for administrators only</span>
            </div>
          }
        >
          {/* Server Error Alert */}
          {serverError && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-xl">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-red-800">Authentication Error</p>
                  <p className="text-xs sm:text-sm text-red-600 mt-1">{serverError}</p>
                </div>
              </div>
            </div>
          )}

          {/* Required Fields Notice */}
          <div className="mb-6 p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <p className="text-xs sm:text-sm text-blue-800">
              <span className="font-semibold">Note:</span> All fields marked with{" "}
              <span className="text-red-500 font-semibold">*</span> are required
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={formik.handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Email Input */}
            <FormInput
              label="Admin Email"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="admin@buildcareerfoundation.org"
              error={formik.errors.email}
              touched={formik.touched.email}
              required
              icon={HiOutlineMail}
              autoComplete="email"
            />

            {/* Password Input */}
            <FormInput
              label="Password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your secure password"
              error={formik.errors.password}
              touched={formik.touched.password}
              required
              icon={HiOutlineLockClosed}
              autoComplete="current-password"
            />

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-xs sm:text-sm text-grad1 hover:text-grad2 font-medium transition-colors duration-200"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <FormButton
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={loading}
              icon={MdLogin}
              disabled={!formik.isValid || loading}
            >
              Sign In
            </FormButton>
          </form>

          {/* Security Notice */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600">
              <HiOutlineLockClosed className="w-4 h-4" />
              <span>Your connection is encrypted and secure</span>
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-4 text-center">
            <p className="text-xs sm:text-sm text-gray-600">
              Need help? Contact{" "}
              <a
                href="mailto:support@buildcareerfoundation.org"
                className="text-grad1 hover:text-grad2 font-medium transition-colors duration-200"
              >
                support@buildcareerfoundation.org
              </a>
            </p>
          </div>
        </FormCard>
      </div>

      <FooterComponentOne />
    </div>
  );
};
