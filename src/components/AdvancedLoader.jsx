/* eslint-disable react/prop-types */
import BounceLoader from "react-spinners/BounceLoader"; // Changed to BounceLoader
const AdvancedLoader = ({ loading }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-light">
      <BounceLoader
        color="#1e3a8a" // Set your desired color
        loading={loading}
        size={80} // Adjust size if needed
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default AdvancedLoader;
