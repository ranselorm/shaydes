import React, { useState } from "react";
import { ref, set, push } from "firebase/database";
import { database } from "../firebase";
import toast from "react-hot-toast";

// Modal Component
const Modal = ({ isOpen, onClose }) => {
  const [formValues, setFormValues] = useState({
    fullname: "",
    email: "",
    phone: "",
    course: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Ensure all fields are filled out
    const { fullname, email, phone, course } = formValues;
    if (!fullname || !email || !phone || !course) {
      alert("All fields are required!");
      setIsLoading(false);
      return;
    }

    const writeUserData = async (userData) => {
      const userRef = ref(database, "graduation");
      const newUserRef = push(userRef);
      await set(newUserRef, userData);
    };
    const userData = {
      fullname,
      email,
      phone,
      course,
    };

    try {
      await writeUserData(userData);
      setFormValues({
        fullname: "",
        email: "",
        phone: "",
        course: "",
      });
      //  router.push("/success");
      toast.success("Registration successful!");
      onClose();

      console.log("Registration successful:", userData);
    } catch (error) {
      console.error("Error writing user to database", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
      onClick={onClose}
    >
      <div
        className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >
        <div className="mt-3 text-center">
          <form
            className="w-full bg-white text-black flex flex-col gap-y-6 px-2 pt-[20px] rounded-xl pb-[20px]"
            onSubmit={handleFormSubmit}
          >
            <div className="flex flex-col gap-y-2 items-start">
              <label htmlFor="fullname">Full Name</label>
              <input
                className="py-[6.5px] w-full px-4 outline-none border-[1.2px] border-gray-200 rounded-lg hover:border-blue-400 transition-all placeholder-gray-500 placeholder:text-[12px]"
                onChange={(e) => handleInputChange("fullname", e.target.value)}
                value={formValues.fullname}
                placeholder="e.g. Akua Amponsah"
                required
              />
            </div>
            <div className="flex flex-col gap-y-2 items-start">
              <label htmlFor="fullname">Email</label>
              <input
                className="py-[6.5px] w-full px-4 outline-none border-[1.2px] border-gray-200 rounded-lg hover:border-blue-400 transition-all placeholder-gray-500 placeholder:text-[12px]"
                onChange={(e) => handleInputChange("email", e.target.value)}
                value={formValues.email}
                placeholder="e.g. ekua@example.com"
                required
              />
            </div>
            <div className="flex flex-col gap-y-2 items-start">
              <label htmlFor="phone">Phone Number</label>
              <input
                className="py-[6.5px] w-full px-4 outline-none border-[1.2px] border-gray-200 rounded-lg hover:border-blue-400 transition-all placeholder-gray-500 placeholder:text-[12px]"
                onChange={(e) => handleInputChange("phone", e.target.value)}
                value={formValues.phone}
                placeholder="e.g. 024 000 0000"
                required
              />
            </div>

            <div className="flex flex-col gap-y-2 items-start">
              <label htmlFor="course">Course</label>
              <input
                className="py-[6.5px] w-full px-4 outline-none border-[1.2px] border-gray-200 rounded-lg hover:border-blue-400 transition-all placeholder-gray-500 placeholder:text-[12px]"
                onChange={(e) => handleInputChange("course", e.target.value)}
                placeholder="e.g Business Administration"
                value={formValues.course}
                required
              />
            </div>

            <button
              type="submit"
              className=" mt-10 py-2 text-black rounded-lg"
              style={{
                backgroundImage: "linear-gradient(to bottom, #FAC97A, #E9BF5C)",
              }}
              disabled={isLoading}
            >
              {isLoading ? "Submitting" : "Submit!"}
            </button>
          </form>
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
