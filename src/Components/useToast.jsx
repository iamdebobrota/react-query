import React, { useState } from "react";

const useToast = () => {
  const [showToast, setShowToast] = useState(false);

  const closeToast = () => {
    setShowToast(false);
  };
  const openToast = () => {
    setShowToast(true);
  };
  setTimeout(() => {
    setShowToast(false);
  }, 4000);
  // Show the toast initially (you can trigger this based on your application logic)
  // Display for 2 seconds (adjust as needed)

  const toast = ({ title, body, duration = 4000 }) => {
    setTimeout(() => {
      setShowToast(false);
    }, duration);
    return (
      <div
        className={`fixed top-0 right-0 m-4 p-4 bg-gray-800 text-white shadow-lg rounded-lg
         ${
          //  "block"
           showToast ? "block" : "hidden"
         }`}>
        <div className="flex justify-between">
          <div className="font-semibold">{title}</div>
          <button onClick={closeToast} className="text-white">
            &times;
          </button>
        </div>
        <div className="mt-2">{body}</div>
      </div>
    );
  };
  return { toast, openToast };
};

export default useToast;
