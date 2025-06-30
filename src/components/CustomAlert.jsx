/* eslint-disable react/prop-types */


const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md text-center">
        <h2 className="text-lg font-semibold mb-4">{message}</h2>
        <button
          onClick={onClose}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;
