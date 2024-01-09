"use client";
import { useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import Modal from "./Modal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Hero;
