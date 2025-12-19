import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const Model = ({ isOpen, isClose, children }) => {
  if (isOpen) return null;
  return (
    <section className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-11/12 sm:w-[400px] shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={isClose}
        >
          <IoCloseSharp size={30} />
        </button>

        {children}
      </div>
    </section>
  );
};

export default Model;
