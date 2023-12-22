"use client";
import { useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import Modal from "./Modal";
import { ref, set, push } from "firebase/database";
import { database } from "../firebase";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [formValues, setFormValues] = useState({
    fullname: "",
    phone: "",
    location: "",
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
    const { fullname, phone, location } = formValues;
    if (!fullname || !phone || !location) {
      alert("All fields are required!");
      setIsLoading(false);
      return;
    }

    const writeUserData = async (userData) => {
      const userRef = ref(database, "users");
      const newUserRef = push(userRef);
      await set(newUserRef, userData);
    };
    const userData = {
      fullname,
      phone,
      location,
    };

    try {
      await writeUserData(userData);
      setFormValues({
        fullname: "",
        phone: "",
        location: "",
      });
      //  router.push("/success");
      closeModal();

      console.log("Registration successful:", userData);
    } catch (error) {
      console.error("Error writing user to database", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <div className="flex justify-center flex-col items-left lg:items-center gap-y-6 pt-12">
        <article className="flex justify-center flex-col items-center gap-y-6 w-full lg:w-3/5 lg:text-center mb-8">
          <h2 className="font-semibold  text-[16px] lg:text-[25px] lg:leading-[40px]">
            Beauty is CONFIDENT . Beauty is BOLD . Beauty is YOU
          </h2>
          <p className="text-[#8d8a8a] text-[14px] md:text-[16px]">
            We see beyond the normal standards and perception of what beauty is
            or should be hence BEAUTY BEYOND
          </p>
          <div className="flex gap-6">
            <Link to="rateCardSection" smooth={true} duration={500}>
              <button className="bg-[#CFB53B] bg-opacity-25 border border-[#CFB53B] border-opacity-25 px-7 py-2 hover:bg-inherit transition rounded-full">
                Book Now
              </button>
            </Link>
            <button
              className="bg-black bg-opacity-25 border border-black border-opacity-25 px-7 py-2 hover:bg-inherit transition rounded-full"
              onClick={openModal}
            >
              Sign Up
            </button>
          </div>
        </article>
        <div className="relative w-full h-[200px] lg:h-[600px] rounded-xl lg:rounded-[20px] overflow-hidden">
          <Image src="/main.jpg" alt="" fill className="object-cover" />
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
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
            <label htmlFor="location">Location</label>
            <input
              className="py-[6.5px] w-full px-4 outline-none border-[1.2px] border-gray-200 rounded-lg hover:border-blue-400 transition-all placeholder-gray-500 placeholder:text-[12px]"
              onChange={(e) => handleInputChange("location", e.target.value)}
              placeholder="e.g La Amour Event Garden, Accra"
              value={formValues.location}
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
      </Modal>
    </section>
  );
};

export default Hero;
