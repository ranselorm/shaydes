"use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { DateRangePicker } from "rsuite";
import { cardData } from "../../../data";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { ref, set, push } from "firebase/database";
import { database } from "../../../firebase";
import "rsuite/dist/rsuite-rtl.css";
import Checkbox from "../../../components/Checkbox";
import toast from "react-hot-toast";

const Booking = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { id } = useParams();
  const [formValues, setFormValues] = useState({
    fullname: "",
    phone: "",
    location: "",
    dateRange: [new Date(), new Date()],
    reference: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const findItemById = (id) => {
    for (const card of cardData) {
      for (const category of card.categories) {
        const found = category.options.find((item) => item.id === id);
        if (found) {
          return found;
        }
      }
    }
    return null;
  };
  const card = findItemById(id);

  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const formatDateRange = (dates) => {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return dates.map((date) => {
      const dayOfWeek = weekdays[date.getDay()];
      const month = months[date.getMonth()];
      const dayOfMonth = date.getDate();
      const year = date.getFullYear();
      return `${dayOfWeek} ${month} ${dayOfMonth} ${year}`;
    });
  };

  const writeUserData = async (userData) => {
    const bookingsRef = ref(database, "bookings");
    const newBookingRef = push(bookingsRef);
    await set(newBookingRef, userData);
  };

  const validateForm =
    !formValues.fullname ||
    !formValues.phone ||
    !formValues.location ||
    !formValues.reference ||
    !isChecked;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { dateRange } = formValues;
    if (validateForm || dateRange.some((date) => !date)) {
      alert("Please fill out all fields and accept the terms and conditions");
      setIsLoading(false);
      return;
    }

    const formattedDates = formatDateRange(dateRange);
    const userData = {
      fullname: formValues.fullname,
      phone: formValues.phone,
      location: formValues.location,
      dates: formattedDates,
      cardDetails: card,
    };

    try {
      await writeUserData(userData);
      setFormValues({
        fullname: "",
        phone: "",
        location: "",
        dateRange: [new Date(), new Date()],
      });

      toast.success("Congratulations, booking is successful!");
      router.push("/");

      console.log("Booking successful:", userData);
    } catch (error) {
      console.error("Error writing booking to database", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckboxChange = () => {
    setIsModalOpen(true);
  };

  const handleAcceptTerms = () => {
    setIsChecked(true);
    setIsModalOpen(false);
  };
  const handleRejectTerms = () => {
    setIsChecked(false);
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen md:mt-[60px] mb-[200px]">
      <article className="mx-auto text-center mb-[80px] -mt-10">
        <button className="bg-black bg-opacity-25 border border-[#CFB53B] border-opacity-25 px-7 py-2 hover:bg-inherit transition rounded-full">
          Book Now
        </button>
        <p className="mt-4 text-[30px]"> Almost there🥳!</p>
      </article>
      <div className="flex justify-center items-start gap-x-[100px] flex-col gap-y-8 lg:flex-row">
        <div className="border border-[#CFB53B] w-full md:w-[270px] h-[400px] rounded-lg px-3 pt-6 transition-all duration-300 bg-custom-radial">
          <article className="">
            <h4 className="text-[14px] font-bold flex-col inline-flex p-2 px-4 rounded-full bg-black text-white border-[1px] border-[#CFB53B]">
              {card.title}
            </h4>
            <p className=" mt-6 text-[25px]">
              <span className="font-bold">₵{card.price}</span>
              <span className="text-[12px] text-[#b8b5b5]">per bride</span>
            </p>
            <p className="text-[12px] text-[#b8b5b5]">{card.subtitle}</p>

            {card.looks ? (
              <div className="h-10 mt-8 flex items-center gap-4">
                <button className="bg-[#6DD400] px-3 py-2 rounded-full text-black text-[12px] gap-3 flex items-center">
                  <IoIosPeople className="text-[20px]" />
                  <p className="flex flex-col">
                    <span>{card.looks} Looks</span>
                    <span className="text-[10px] font-bold">
                      {/* + ₵{card.looksPrice} */}
                    </span>
                  </p>
                </button>
                {card.days && (
                  <button className="bg-[#00D48E] px-3 py-2 rounded-full text-black text-[12px] gap-3 flex items-center">
                    <MdDateRange className="text-[20px]" />
                    <p className="flex flex-col">
                      <span>{card.days} Days</span>
                      <span className="text-[10px] font-bold">
                        {/* + ₵{card.daysPrice} */}
                      </span>
                    </p>
                  </button>
                )}
              </div>
            ) : (
              <div className="h-10 mt-5" />
            )}
            <div className="mt-[20px]">
              {card.features.map((card, index) => (
                <div key={index}>
                  <p className="text-[12px] flex gap-1 cards-center my-3">
                    <span>
                      <CiCircleCheck />
                    </span>
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-[#8d8a8a] mt-2 text-center">
              TNT not included!
            </p>
          </article>
        </div>
        <form
          className="w-full lg:w-4/12 bg-white text-black flex flex-col gap-y-4 px-8 pt-[20px] rounded-xl pb-[30px]"
          onSubmit={handleFormSubmit}
        >
          <div className="flex flex-col gap-y-2">
            <label htmlFor="fullname" className="font-bold">
              Full Name
            </label>
            <input
              className="py-[6.5px] px-4 outline-none border-[1.2px] border-gray-200 rounded-lg hover:border-blue-400 transition-all placeholder-gray-500 placeholder:text-[12px]"
              onChange={(e) => handleInputChange("fullname", e.target.value)}
              value={formValues.fullname}
              placeholder="e.g. Matilda Brown"
              required
            />
            <p className="text-gray-500 text-[12px]">
              Name of the person booking
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="phone" className="font-bold">
              Phone Number
            </label>
            <input
              className="py-[6.5px] px-4 outline-none border-[1.2px] border-gray-200 rounded-lg hover:border-blue-400 transition-all placeholder-gray-500 placeholder:text-[12px]"
              onChange={(e) => handleInputChange("phone", e.target.value)}
              value={formValues.phone}
              placeholder="e.g. 024 000 0000"
              required
            />
            <p className="text-gray-500 text-[12px]">
              Phone number to reach out to
            </p>
          </div>

          <div className="flex flex-col gap-y-2">
            <label htmlFor="location" className="font-bold">
              Location
            </label>
            <input
              className="py-[6.5px] px-4 outline-none border-[1.2px] border-gray-200 rounded-lg hover:border-blue-400 transition-all placeholder-gray-500 placeholder:text-[12px]"
              onChange={(e) => handleInputChange("location", e.target.value)}
              placeholder="e.g La Amour Event Garden, Accra"
              value={formValues.location}
              required
            />
            <p className="text-gray-500 text-[12px]">Location of the event</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="date" className="font-bold">
              Event Date
            </label>
            <DateRangePicker
              showOneCalendar
              placeholder="e.g. 15 Dec 2023"
              value={formValues.dateRange}
              onChange={(range) => handleInputChange("dateRange", range)}
              required
            />
            <p className="text-gray-500 text-[12px]">Day of event</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="phone" className="font-bold">
              Payment Reference
            </label>
            <input
              className="py-[6.5px] px-4 outline-none border-[1.2px] border-gray-200 rounded-lg hover:border-blue-400 transition-all placeholder-gray-500 placeholder:text-[12px]"
              onChange={(e) => handleInputChange("reference", e.target.value)}
              value={formValues.reference}
              // placeholder="e.g. "
              required
            />
            <p className="text-gray-500 text-[12px]">Mobile Money Reference</p>
          </div>
          <Checkbox
            handleCheckboxChange={handleCheckboxChange}
            handleAcceptTerms={handleAcceptTerms}
            isModalOpen={isModalOpen}
            isChecked={isChecked}
            handleRejectTerms={handleRejectTerms}
          />

          <button
            type="submit"
            className={`mt-4 py-2 text-black rounded-lg ${
              validateForm ? "bg-gray-200" : "bg-gradient-yellow"
            }`}
            disabled={validateForm}
          >
            {isLoading ? "Submitting" : "Submit!"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
