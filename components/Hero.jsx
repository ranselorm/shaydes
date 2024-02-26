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

  const closeModal = () => setIsModalOpen(false);

  return (
    <section>
      <div className="flex justify-center flex-col items-left lg:items-center gap-y-6 pt-12 mb-[100px]">
        <article className="flex justify-center flex-col items-center gap-y-6 w-full lg:text-center mb-8">
          <h2 className="font-semibold text-[16px] lg:text-[25px] lg:leading-[40px]">
            Beauty is CONFIDENT . Beauty is BOLD . Beauty is YOU
          </h2>
          <p className="text-[#8d8a8a] text-[14px] md:text-[16px]">
            We see beyond the normal standards and perception of what beauty is
            or should be hence BEAUTY BEYOND
          </p>
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
