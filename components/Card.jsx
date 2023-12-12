"use client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { CiCircleCheck } from "react-icons/ci";

const Card = ({ id, title, price, features }) => {
  return (
    <div
      className="border border-[#8d8a8a] hover:border-[#CFB53B] w-full md:w-[270px] h-[400px] rounded-lg px-3 py-7 transform hover:-translate-y-2 transition-all duration-300 group bg-custom-radial cursor-pointer"
      onClick={() => {}}
    >
      <article className="">
        <h4 className="text-[14px] font-bold flex-col inline-flex p-2 px-4 rounded-full bg-gray-200 text-black">
          {title}
        </h4>
        <p className="my-6 text-[25px] font-bold">
          <span>₵</span>
          {price}
        </p>
        <div className="h-[1px] bg-[#8d8a8a] opacity-[20%] my-2.5" />
        {features.map((item, index) => (
          <div key={index}>
            <p className="text-[13px] flex gap-1 items-center my-3">
              <span>
                <CiCircleCheck />
              </span>
              {item.text}
            </p>
          </div>
        ))}
        <button className="bg-[#8d8a8a] group-hover:bg-[#CFB53B] w-full rounded-md py-2 text-sm">
          Book Now
        </button>
        <p className="text-[10px] text-[#8d8a8a] mt-2 text-center">
          TNT not included!
        </p>
      </article>
    </div>
  );
};

export default Card;
