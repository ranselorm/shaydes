"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite-rtl.css";

const Booking = () => {
  const [formValues, setFormValues] = useState({
    fullname: "",
    location: "",
    numberOfPersons: "",
    dateRange: [null, null],
  });

  console.log(
    formValues.fullname,
    formValues.location,
    formValues.dateRange,
    formValues.numberOfPersons
  );

  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => e.preventDefault();

  return (
    <div className="h-screen">
      <div className="flex justify-center items-center gap-x-10">
        <div className="px-2 w-5/12">
          <h2 className="text-[30px] font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur </p>
          <p>Lorem ipsum dolor sit amet consectetur </p>
          <p>Lorem ipsum dolor sit amet consectetur </p>
          <p>Lorem ipsum dolor sit amet consectetur </p>
          <p>Lorem ipsum dolor sit amet consectetur </p>
        </div>
        <form
          className="w-4/12 bg-white text-black flex flex-col gap-y-6 px-8 pt-[50px] rounded-xl h-[500px]"
          onSubmit={handleFormSubmit}
        >
          <div className="flex flex-col gap-y-2">
            <label htmlFor="fullname" className="font-bold">
              Full Name
            </label>
            <input
              className="py-[6.5px] px-4 outline-none border-[1.2px] border-gray-200 rounded-lg hover:border-blue-400 transition-all"
              onChange={(e) => handleInputChange("fullname", e.target.value)}
              value={formValues.fullname}
              required
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label htmlFor="location">Location</label>
            <input
              className="py-[6.5px] px-4 outline-none border-[1.2px] border-gray-200 rounded-lg hover:border-blue-400 transition-all"
              onChange={(e) => handleInputChange("location", e.target.value)}
              value={formValues.location}
              required
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="date">Date</label>
            <DateRangePicker
              placeholder=""
              showOneCalendar
              value={formValues.dateRange}
              onChange={(range) => handleInputChange("dateRange", range)}
              required
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label htmlFor="numberOfPersons">Number of Persons</label>
            <input
              type="text"
              className="py-[6.5px] px-4 outline-none border-[1.2px] border-gray-200 rounded-lg hover:border-blue-400 transition-all"
              onChange={(e) =>
                handleInputChange("numberOfPersons", e.target.value)
              }
              value={formValues.numberOfPersons}
              required
            />
          </div>
          <div>
            <p className="flex justify-between font-black">
              Total <span>$0</span>
            </p>
          </div>

          <button
            type="submit"
            className="bg px-7 py-2 text-white bg-black hover:text-white transition-all duration-300 rounded-full uppercase"
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
