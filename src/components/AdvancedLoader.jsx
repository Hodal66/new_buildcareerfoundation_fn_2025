/* eslint-disable react/prop-types */
import BounceLoader from "react-spinners/BounceLoader"; // Changed to BounceLoader
const AdvancedLoader = ({ loading }) => {
  return (
    // Full screen loader container
    <div className="flex justify-center items-center h-screen bg-gray-light">
      {/* Responsive loader size: Mobile: 60, Tablet: 70, Desktop: 80 */}
      <BounceLoader
        color="#1e3a8a"
        loading={loading}
        size={typeof window !== 'undefined' && window.innerWidth < 640 ? 60 : window.innerWidth < 768 ? 70 : 80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default AdvancedLoader;
