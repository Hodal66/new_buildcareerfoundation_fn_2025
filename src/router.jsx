import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import { GlobalErrorBoundary } from "./components/GlobalErrorBoundary";

// Pages
import LandingPageOne from "./Pages/LandingPageOne";
import { WhoWeArePage } from "./Pages/WhoWeArePage";
import { ImpactPage } from "./Pages/ImpactPage";
import { ContactPage } from "./Pages/ContactPage";
import PhoneHeaderNav from "./components/Common/PhoneHeaderNav";
import { HowDoesGivingWorkPage } from "./Pages/HowDoesGivingWorkPage";
import { ActivitiesPage } from "./Pages/ActivitiesPage";
import ActivityDetailsPage from "./Pages/ActivityDetailsPage";
import AdminDashboard from "./Pages/DashboardPageStuff/adminDashboards/AdminDashboard";

// Dashboards
import DashboardLayout from "./components/Common/DashboardLayout";
import StudentDashboard from "./Pages/DashboardPageStuff/student/StudentDashboard";
import MentorDashboard from "./Pages/DashboardPageStuff/mentor/MentorDashboard";
import { FaGraduationCap, FaUserTie } from "react-icons/fa";

// Other
import NewPost from "./Pages/DashboardPageStuff/NewPost";
import { LoginIn } from "./Pages/LoginIn";
import { DonatePage } from "./Pages/DonatePage";
import PaymentByVissaPage from "./Pages/PaymentByVissaPage";
import { FaqPage } from "./Pages/FaqPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <GlobalErrorBoundary />,
    children: [
      {
        index: true,
        element: <LandingPageOne />,
      },
      {
        path: "WhoWeArePage",
        element: <WhoWeArePage />,
      },
      {
        path: "ImpactPage",
        element: <ImpactPage />,
      },
      {
        path: "ContactPage",
        element: <ContactPage />,
      },
      {
        path: "PhoneNavbar",
        element: <PhoneHeaderNav />,
      },
      {
        path: "HowDoesGivingWorkPage",
        element: <HowDoesGivingWorkPage />,
      },
      {
        path: "ActivitiesPage",
        element: <ActivitiesPage />,
      },
      {
        path: "ActivityDetailsPage/:postId",
        element: <ActivityDetailsPage />,
      },
      {
        path: "admin/*",
        element: <AdminDashboard />,
      },
      {
        path: "student/*",
        element: (
          <DashboardLayout
            roleName="Talented Student"
            navigationLinks={[
              { to: "/student/overview", label: "My Dashboard", icon: FaGraduationCap },
            ]}
          />
        ),
        children: [
          {
            path: "overview",
            element: <StudentDashboard />,
          },
          {
            path: "*",
            element: <Navigate to="overview" />,
          },
        ]
      },
      {
        path: "mentor/*",
        element: (
          <DashboardLayout
            roleName="Academic Mentor"
            navigationLinks={[
              { to: "/mentor/overview", label: "Mentor Portal", icon: FaUserTie },
            ]}
          />
        ),
        children: [
          {
            path: "overview",
            element: <MentorDashboard />,
          },
          {
            path: "*",
            element: <Navigate to="overview" />,
          },
        ]
      },
      {
        path: "newPost",
        element: <NewPost />,
      },
      {
        path: "LoginIn",
        element: <LoginIn />,
      },
      {
        path: "DonatePage",
        element: <DonatePage />,
      },
      {
        path: "paymentByVissa",
        element: <PaymentByVissaPage />,
      },
      {
        path: "FrequentAskedQuestions",
        element: <FaqPage />,
      },
      // Frontend Catch-All for 404 Pages
      {
        path: "*",
        element: <GlobalErrorBoundary />,
      },
    ],
  },
]);
