import React, { useState } from "react";

// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      onClick={onClose}
    >
      <div
        className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >
        <div className="mt-3 text-center">
          {children}
          <span className="absolute top-0 right-0 p-4" onClick={onClose}>
            <button
              type="button"
              className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
            >
              Close
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
