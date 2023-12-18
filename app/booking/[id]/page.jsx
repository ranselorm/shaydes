"use client";
// import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite-rtl.css";
import CardData from "../../../CardData";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { MdDateRange } from "react-icons/md";

const Booking = () => {
  const { id } = useParams();

  const [formValues, setFormValues] = useState({
    fullname: "",
    location: "",
    numberOfPersons: "",
    dateRange: [null, null],
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fullname = formValues.fullname;
  const location = formValues.location;
  const date = formValues.dateRange;
  const persons = formValues.numberOfPersons;

  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!fullname || !location || !date[0] || !date[1] || !persons) {
      alert("All fields are required!");
      setIsLoading(false);
      return;
    }
    handleInputChange("fullname", "");
    handleInputChange("location", "");
    handleInputChange("numberOfPersons", "");
    handleInputChange("dateRange", [null, null]);
    setIsLoading(false);
  };

  const findItemById = (id) => {
    for (const card of CardData) {
      const found = card.category.find((item) => item.id === id);
      if (found) {
        return found;
      }
    }
    return null;
  };

  const card = findItemById(id);
  // console.log(card);

  // isLoading ? console.log("WE ARE LOADING") : console.log("NOT YET LOADING");
  return (
    <div className="h-screen md:mt-[60px] mb-[220px] lg:mb-0">
      <div className="flex justify-center items-center gap-x-10 flex-col gap-y-8 lg:flex-row">
        <div
          className="border border-[#CFB53B] w-full md:w-[270px] h-[400px] rounded-lg px-3 pt-6  transition-all duration-300 bg-custom-radial"
          onClick={() => {}}
        >
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
              <div className="h-10 mt-8 flex gap-4">
                <button className="bg-green-300 px-3 rounded-full text-black text-[12px] gap-3 flex cards-center">
                  <IoIosPeople className="text-[20px]" />
                  <p className="flex flex-col">
                    <span>{card.looks} Looks</span>
                    <span className="text-[10px] font-bold">
                      + ₵{card.looksPrice}
                    </span>
                  </p>
                </button>
                {card.days && (
                  <button className="bg-blue-300 px-3 rounded-full text-black text-[12px] gap-3 flex cards-center">
                    <MdDateRange className="text-[20px]" />
                    <p className="flex flex-col">
                      <span>{card.days} Days</span>
                      <span className="text-[10px] font-bold">
                        + ₵{card.daysPrice}
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
            {/* <Link href={`/booking/${id}`} passHref>
              <button
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #FAC97A, #E9BF5C)",
                }}
                className="w-full rounded-md py-2 text-sm text-black font-bold"
              >
                Book Now
              </button>
            </Link> */}
            <p className="text-[10px] text-[#8d8a8a] mt-2 text-center">
              TNT not included!
            </p>
          </article>
        </div>
        <form
          className="w-full lg:w-4/12 bg-white text-black flex flex-col gap-y-6 px-8 pt-[50px] rounded-xl pb-[30px]"
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
              Total <span>₵{card.price}</span>
            </p>
          </div>

          <button
            type="submit"
            className="bg px-7 py-2 text-white bg-black hover:text-white transition-all duration-300 rounded-full uppercase"
            disabled={isLoading}
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
