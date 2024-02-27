"use client";
import Link from "next/link";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { MdDateRange } from "react-icons/md";

const Card = ({
  id,
  title,
  subtitle,
  looks,
  days,
  daysPrice,
  subInfo,
  price,
  features,
}) => {
  return (
    <div className="border border-gray-300 hover:border-[#CFB53B] w-full md:w-[270px] h-[400px] rounded-lg px-2 pt-3 transition-all duration-300 group bg-custom-radial cursor-pointer group">
      <article className="">
        <h4 className="text-[14px] font-bold flex-col inline-flex p-2 px-4 rounded-full bg-black text-white border-[1px] group-hover:border-[#CFB53B]">
          {title}
        </h4>
        <p className=" mt-3 text-[25px]">
          <span className="font-bold">₵{price}</span>
          <span className="text-[12px] text-[#b8b5b5]">
            {subInfo ? subInfo : "per bride"}
          </span>
        </p>
        <p className="text-[12px] text-[#b8b5b5]">{subtitle}</p>
        {/* <div className="h-[1px] bg-[#8d8a8a] opacity-[20%]" /> */}

        {looks ? (
          <div className="h-10 mt-5 flex gap-4">
            <button className="bg-[#6DD400] px-3 rounded-full text-black text-[12px] gap-3 flex items-center">
              <IoIosPeople className="text-[20px]" />
              <p className="flex flex-col">
                <span>{looks} Looks</span>
                {/* <span className="text-[10px] font-bold">+ ₵{looksPrice}</span> */}
              </p>
            </button>
            {/* {days && (
              <button className="bg-[#00D48E] px-3 rounded-full text-black text-[12px] gap-3 flex items-center">
                <MdDateRange className="text-[20px]" />
                <p className="flex flex-col">
                  <span>{days} Days</span>
                  {daysPrice && (
                    <span className="text-[10px] font-bold">
                      + ₵{daysPrice}
                    </span>
                  )}
                </p>
              </button>
            )} */}
          </div>
        ) : (
          <div className="h-10 mt-5" />
        )}
        <div className="mt-[30px]">
          {features.map((item, index) => (
            <div key={index}>
              <p className="text-[12px] flex gap-1 items-center my-3">
                <span>
                  <CiCircleCheck />
                </span>
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <Link href={`/booking/${id}`} passHref>
          <button className="w-full rounded-md py-2 text-sm text-black font-bold group-hover:bg-gradient-yellow bg-gray-300">
            Book Now
          </button>
        </Link>
        <p className="text-[10px] text-[#8d8a8a] mt-2 text-center">
          TNT not included!
        </p>
      </article>
    </div>
  );
};

export default Card;
