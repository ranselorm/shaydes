"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Modal from "./Modal";
import Graduation from "./Graduation";
import { FaCrown } from "react-icons/fa";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  return (
    <section>
      <div className="flex justify-center flex-col-reverse items-left lg:items-center gap-y-6 pt-12 mb-[100px]">
        <article className="flex justify-center flex-col items-center gap-y-6 w-full lg:text-center mb-8">
          <h2 className="font-semibold text-[14px] lg:text-[18px] flex flex-col text-[#CFB53B] items-center">
            <span>Beauty is CONFIDENT</span>
            <span>Beauty is BOLD</span>
            <span>Beauty is YOU</span>
          </h2>
          <p className="text-[#8d8a8a] text-[14px] md:text-[16px] md:w-9/12 w-full text-center md:text-left">
            We see beyond the normal standards and perception of what beauty is
            or should be hence BEAUTY BEYOND.{" "}
            <span className="cursor-pointer" onClick={() => setToggle(true)}>
              {toggle ? "" : "...see more"}
            </span>
          </p>
          {toggle && (
            <div className="text-[#8d8a8a] text-[14px] md:text-[16px] md:w-9/12 w-full text-center md:text-left">
              <p>
                Enhancing and paying wrapt attention to your natural features
                and skin whiles creating looks that suits your style which cuts
                across various makeup types gracing you with classy and
                luxurious looks.
              </p>
              <p className="mt-5">
                Your satisfaction is paramount as a result you enjoy a
                memorable, blissful , professional and premium pampering
                experience like the queen you really are. Hey QUEEN , you are
                not just an ordinary client you are FAMILY and we are happy to
                have, grow and journey with you. This is home,
                Welcome to 54SHAYDES {""}
                <span
                  className="cursor-pointer"
                  onClick={() => setToggle(false)}
                >
                  {toggle ? "...see less" : ""}
                </span>
              </p>
            </div>
          )}

          <div className="flex gap-6">
            <ScrollLink to="rateCardSection" smooth={true} duration={500}>
              <button className="bg-[#CFB53B] bg-opacity-25 border border-[#CFB53B] border-opacity-25 px-7 py-2 hover:bg-inherit transition rounded-full">
                Book Now
              </button>
            </ScrollLink>
          </div>
          <Graduation />
        </article>
        <div className="relative w-full h-[200px] lg:h-[600px] rounded-xl lg:rounded-[20px] overflow-hidden">
          <Image src="/main.jpg" alt="" fill className="object-cover" />
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Hero;
