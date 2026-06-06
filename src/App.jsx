import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { HoveringContext } from "./context/HoveringContext";
import styles from "./styles";
import AdvancedLoader from "./components/AdvancedLoader";
import { Toaster } from "react-hot-toast";

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

  useEffect(() => {
    // Simulate a loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // adjust duration here

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <AdvancedLoader loading={loading} />;
  }

  return (
    <div className={`${styles.transitionAll} w-full`}>
      <Toaster position="top-center" reverseOrder={false} />
      <HoveringContext.Provider value={[hover, setHover]}>
        {/* React Router v6 Outlet allows nested routes inside this layout */}
        <Outlet />
      </HoveringContext.Provider>
    </div>
  );
}

export default App;
