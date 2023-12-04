"use client";

import Button from "./ui/Button";
import { AiOutlineBuild } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Marketing = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
      <Slider {...settings}>
        <div
          className="bg-[#37f737] w-[500px] h-[440px] rounded-lg slider-item "
          style={{ marginRight: "15px" }}
        >
          slide 1
        </div>
        <div
          className="bg-blue-300 w-[500px] h-[440px] rounded-lg slider-item "
          style={{ marginRight: "15px" }}
        >
          slide 2
        </div>
        <div className="bg-yellow-300 w-[500px] h-[440px] rounded-lg slider-item ">
          slide 3
        </div>
        <div className="bg-red-300 w-[500px] h-[440px] rounded-lg">slide 4</div>
      </Slider>
    </section>
  );
};

export default Marketing;
