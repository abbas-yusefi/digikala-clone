"use client";

import { useEffect, useState } from "react";

const AlertCard = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);

      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      // Cleanup timeout if component unmounts or message changes
      return () => clearTimeout(timeout);
    }
  }, [message]);

  // Manual dismiss function (optional)
  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`fixed top-4 right-4 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
    >
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative shadow-lg"
        role="alert"
      >
        <span className="block sm:inline">{message}</span>
        <button
          onClick={handleDismiss}
          className="absolute top-0 bottom-0 right-0 px-4 py-3"
        >
          <svg
            className="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AlertCard;
