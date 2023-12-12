"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OutsideWork = () => {
  const settings = {
    dots: false,
    centerMode: true,
    infinite: false,
    speed: 500,
    centerPadding: "1px",
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
          <div>
            <h3 className="font-semibold text-[16px] md:text-[22px]">
              Outside of work
            </h3>
            <p className="text-[#8d8a8a] text-[12px] md:text-[16px]">
              I love to make videos about trips and fun activities I do
            </p>
          </div>
        </div>
        {/* <div>
          <Button text="View Project" hidden={true} />
          <Button icon={<IoIosArrowRoundForward />} />
        </div> */}
      </div>
      <Slider {...settings} className="mt-[50px]">
        <div className="relative w-[200px] h-[440px] rounded-lg overflow-hidden">
          <Image src="/c1.jpg" fill alt="" className="object-cover" />
        </div>
        <div className="relative w-[200px] h-[440px] rounded-lg overflow-hidden">
          <Image src="/c2.jpg" fill alt="" className="object-cover" />
        </div>
        <div className="relative w-[200px] h-[440px] rounded-lg overflow-hidden">
          <Image src="/c3.jpg" fill alt="" className="object-cover" />
        </div>
        <div className="relative w-[200px] h-[440px] rounded-lg overflow-hidden">
          <Image src="/n3.jpg" fill alt="" className="object-cover" />
        </div>
      </Slider>
    </section>
  );
};

export default OutsideWork;
