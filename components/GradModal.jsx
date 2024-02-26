import React, { useState } from "react";
import { ref, set, push } from "firebase/database";
import { database } from "../firebase";
import toast from "react-hot-toast";
import FirebaseAuth from "./FirebaseAuth";

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
      className="fixed inset-0 bg-black bg-opacity-75 overflow-y-auto h-full w-full z-50"
      onClick={onClose}
    >
      <div
        className="relative top-20 h-[200px] mx-auto p-5 border w-[400px] shadow-lg rounded-md bg-white flex justify-center items-center"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >
        <FirebaseAuth />
      </div>
    </div>
  );
};

export default Modal;
