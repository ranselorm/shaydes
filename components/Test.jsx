"use client";
import Slider from "react-slick";

const Test = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div>
      <h2>Center Mode</h2>
      <Slider {...settings}>
        <div className="bg-blue-400">
          <h3>1</h3>
        </div>
        <div className="bg-red-400">
          <h3>2</h3>
        </div>
        <div className="bg-yellow-400">
          <h3>3</h3>
        </div>
        <div className="bg-green-400">
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Test;
