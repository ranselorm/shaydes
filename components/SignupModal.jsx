// components/Modal.js
import React from "react";
import Link from "next/link";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdOutlineCelebration } from "react-icons/md";

const SignupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-11/12 md:max-w-md lg:max-w-lg border-blue-500 shadow-lg rounded-md bg-white">
        <span className="absolute -top-3 -right-4 p-4" onClick={onClose}>
          <button
            type="button"
            className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
          >
            <AiOutlineCloseCircle className="text-[20px]" />
          </button>
        </span>
        <div className="mt-3 text-center">
          <div className="mx-auto flex items-center justify-center h-10 w-10 rounded-full text-green-500 text-[30px]">
            {/* Icon or image */}
            <MdOutlineCelebration />
          </div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            UG Graduation x 54 Shaydes
          </h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
              quibusdam libero illum doloremque facere commodi nostrum ipsam
              temporibus veniam consequatur perspiciatis, quae blanditiis
              accusantium eos nemo non placeat sit inventore!
            </p>
          </div>
          <div className="items-center px-4 py-3">
            <Link href="/graduation-booking">
              <button
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #FAC97A, #E9BF5C)",
                }}
                onClick={onClose}
                className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg- focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
