import "./App.css";
import ActivityDetailsPage from "./Pages/ActivityDetailsPage";
import { ActivitiesPage } from "./Pages/ActivitiesPage";
import { HowDoesGivingWorkPage } from "./Pages/HowDoesGivingWorkPage";
import { ContactPage } from "./Pages/ContactPage";
import { ImpactPage } from "./Pages/ImpactPage";
import LandingPageOne from "./Pages/LandingPageOne";
import { WhoWeArePage } from "./Pages/WhoWeArePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DonatePage } from "./Pages/DonatePage";
import { FaqPage } from "./Pages/FaqPage";
import { createContext, useEffect, useState } from "react";
import { LoginIn } from "./Pages/LoginIn";
import PhoneHeaderNav from "./components/Common/PhoneHeaderNav";
import styles from "./styles";
import PaymentByVissaPage from "./Pages/PaymentByVissaPage";
import NewPost from "./Pages/DashboardPageStuff/NewPost";
// import AdminDashboard from "./DashboardPageStuff/adminDashboards/AdminDashboard";
import AdminDashboard from "./Pages/DashboardPageStuff/adminDashboards/AdminDashboard"
import AdvancedLoader from "./components/AdvancedLoader";

export const HoveringContext = createContext();
function App() {
  const [loading, setLoading] = useState(true);
  const [hover, setHover] = useState({
    isLanding: false,
    isWhoWeAre: false,
    isImpact: false,
    isContact: false,
    isHowDoesWork: false,
    isActivities: false,
    isActivitiesDetail: false,
    isDonate: false,
    isFaq: false,
  });

  console.log(hover);

  useEffect(() => {
    // Simulate a loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // You can adjust the loading duration here

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <AdvancedLoader loading={loading} />; // Display the Advanced Loader when loading
  }

  return (
    <div className={`${styles.transitionAll} w-full`}>
      <HoveringContext.Provider value={[hover, setHover]}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route index element={<LandingPageOne />} />
              <Route path="WhoWeArePage" element={<WhoWeArePage />} />
              <Route path="ImpactPage" element={<ImpactPage />} />
              <Route path="ContactPage" element={<ContactPage />} />
              <Route path="PhoneNavbar" element={<PhoneHeaderNav />} />
              <Route
                path="HowDoesGivingWorkPage"
                element={<HowDoesGivingWorkPage />}
              />
              <Route path="ActivitiesPage" element={<ActivitiesPage />} />
              <Route
                path="ActivityDetailsPage/:postId"
                element={<ActivityDetailsPage />}
              />
              {/* <Route
              path="/funfact-detail/:countryId"
              element={<CountryFunFactDetail />}
            /> */}
            <Route path="/admin/*" element={<AdminDashboard />} />
              {/* <Route path="DashboardPage" element={<DashboardPage />} /> */}
              <Route path="newPost" element={<NewPost />} />
              <Route path="LoginIn" element={<LoginIn />} />
              <Route path="DonatePage" element={<DonatePage />} />
              <Route path="paymentByVissa" element={<PaymentByVissaPage />}/>
              <Route path="FrequentAskedQuestions" element={<FaqPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HoveringContext.Provider>
    </div>
  );
}

export default App;
