import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#faf5f2] relative">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-center items-center py-16">
          <div className="md:w-1/2 w-full relative z-20">
            <h1 className="md:text-7xl text-6xl font-extrabold">
              <span className="text-[#2a435d]"> ENJOY OUR </span>
              <br /> <span className="text-[#2a435d]"> CHICKEN </span>{" "}
              <span className="text-red-700 "> BURGER </span> <br />{" "}
              <span className="text-[#2a435d]"> FAST FOOD</span>
            </h1>
          </div>
          <div className="md:w-1/2 w-full relative z-20">
            <img
              src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/burger-promo.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* this is  relative bg img */}
      <img
        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/40.png"
        className="absolute top-0 left-0 md:w-96 w-60 opacity-75"
        alt=""
      />
      <img
        src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/18.png"
        className="absolute top-0 right-0 md:w-96 w-60 opacity-75 z-0"
        alt=""
      />
    </div>
  );
};

export default Hero;
