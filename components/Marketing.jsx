"use client";
import Image from "next/image";
import Button from "./ui/Button";
import { AiOutlineBuild } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Marketing = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 2.5,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <section className="mt-[150px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <div className=" w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-[#37f737] rounded-lg flex justify-center items-center">
            <AiOutlineBuild className="text-[20px] md:text-[30px] text-black" />
          </div>
          <div>
            <h3 className="font-semibold text-[16px] md:text-[22px]">
              Marketing website
            </h3>
            <p className="text-[#8d8a8a] text-[12px] md:text-[16px]">
              Thirdstride · Landing page design
            </p>
          </div>
        </div>
        <div>
          <Button text="View Project" hidden={true} />
          <Button icon={<IoIosArrowRoundForward />} />
        </div>
      </div>
      <Slider {...settings} className="mt-[50px]">
        <div className="bg-[#37f737] w-[200px] h-[440px] rounded-lg">
          <div className="relative w-4/5 h-[400px] mx-auto top-[50px] rounded-lg overflow-hidden">
            <Image src="/hero.png" fill alt="" className="object-cover" />
          </div>
        </div>
        <div className="bg-gray-200 w-[500px] h-[440px] rounded-lg">
          <div className="relative w-4/5 h-[400px] mx-auto top-[50px] rounded-lg overflow-hidden">
            <Image src="/p1.png" fill alt="" className="object-cover" />
          </div>
        </div>
        <div className="bg-gray-200 w-[500px] h-[440px] rounded-lg">
          <div className="relative w-4/5 h-[400px] mx-auto top-[50px] rounded-lg overflow-hidden">
            <Image src="/p2.png" fill alt="" className="object-cover" />
          </div>
        </div>
        <div className="bg-gray-200 w-[500px] h-[440px] rounded-lg">
          <div className="relative w-4/5 h-[400px] mx-auto top-[50px] rounded-lg overflow-hidden">
            <Image src="/p3.png" fill alt="" className="object-cover" />
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Marketing;
