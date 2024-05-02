import React, { useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="min-height w-[100%] relative overflow-hidden">
      <div
        className="w-[300vw] h-[100%] flex transition ease-in duration-300"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img className="w-[100vw] h-[100%] object-cover" src={data[0]} alt="" />
        <img className="w-[100vw] h-[100%] object-cover" src={data[1]} alt="" />
        <img className="w-[100vw] h-[100%] object-cover" src={data[2]} alt="" />
      </div>
      <div className="w-fit flex absolute left-0 right-0 bottom-[100px] gap-3 mx-auto">
        <div
          className="w-12 h-12 border border-[#999] flex items-center justify-center cursor-pointer"
          onClick={prevSlide}
        >
          <MoveLeft />
        </div>
        <div
          className="w-12 h-12 border border-[#999] flex items-center justify-center cursor-pointer"
          onClick={nextSlide}
        >
          <MoveRight />
        </div>
      </div>
    </div>
  );
}

export default Banner;
