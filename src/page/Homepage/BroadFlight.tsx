import React, { useState } from "react";
import FitlerBar from "./FitlerBar";
import Place from "./Place";
import Time from "./Time";
import arrow from "../../img/homepage/Vector 3.svg";

const BroadFlight = () => {
  return (
    <div className="relative mt-[137px] h-full  mb-[68px] px-[30px] pt-[32px] pb-[50px] bg-white rounded-xl shadow-[0px_4px_30px_0px_rgba(77,70,250,0.10)]">
      <FitlerBar />
      <div className=" flex gap-x-[20px]">
        <Place />
        <Time />
      </div>
      <button className="absolute bottom-[-30px] right-[30px] rounded-xl flex px-[20px] py-[16px] bg-[#4D46FA] justify-between items-center max-w-[245px] w-full text-white">
        <span className="text-[18px]">Search Flights</span>
        <img src={arrow} alt="" />
      </button>
    </div>
  );
};

export default BroadFlight;
