"use client";
import Image from "next/image";
import Button from "./ui/Button";
import { AiOutlineBuild } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Natural = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="mt-[80px] lg:mt-[150px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <div className=" w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-gray-300 rounded-lg flex justify-center items-center">
            <AiOutlineBuild className="text-[20px] md:text-[30px] text-black" />
          </div>
          <article className="">
            <h3 className="font-semibold text-[16px] md:text-[22px]">
              Natural Space branding
            </h3>
            <p className="text-[#8d8a8a] text-[12px] md:text-[16px]">
              Natural Space · Brand Design · Photography
            </p>
          </article>
        </div>
        <div>
          <Button text="Coming Next" hidden={true} color="#8d8a8a" />
          <Button icon={<IoIosArrowRoundForward />} />
        </div>
      </div>

      <Slider {...settings} className="mt-[50px]">
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          <Image src="/hero.png" fill alt="" className="object-cover" />
        </div>
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          <Image src="/p1.png" fill alt="" className="object-cover" />
        </div>
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          <Image src="/p2.png" fill alt="" className="object-cover" />
        </div>
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          <Image src="/p3.png" fill alt="" className="object-cover" />
        </div>
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          <Image src="/hero.png" fill alt="" className="object-cover" />
        </div>
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          <Image src="/p1.png" fill alt="" className="object-cover" />
        </div>
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          <Image src="/p2.png" fill alt="" className="object-cover" />
        </div>
        <div className="relative w-full h-[400px] rounded-lg">
          <Image src="/p3.png" fill alt="" className="object-cover" />
        </div>
      </Slider>
    </section>
  );
};

export default Natural;
