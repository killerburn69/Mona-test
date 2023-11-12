import React from "react";
import calender from "../../img/homepage/calendar-3 1.svg";
const Time = () => {
  return (
    <div className="px-[20px] py-[15px] flex gap-x-[60px] border-[1px] border-[rgba(0,0,0,0.10)] rounded-xl flex-1">
      <div className="">
        <span className="text-[12px] text-[rgba(0,0,0,0.5)] font-semibold uppercase">
          Departure
        </span>
        <div className="flex gap-x-[10px] items-center">
          <h1 className="text-[#4D46FA] font-semibold text-[24px]">
            Fri, 22 Mar, 2022
          </h1>
          <img src={calender} alt="" />
        </div>
        <div className="flex gap-x-[10px] items-center">
          <div className="flex flex-col items-center">
            <span className=" text-[14px] font-semibold">Prev</span>
            <div className="w-[37px] h-[1px] bg-black mt-[2px]"></div>
          </div>
          <div className="flex flex-col items-center">
            <span className=" text-[rgba(0,0,0,0.4)] text-[14px] font-semibold">
              Next
            </span>
            <div className="w-[37px] h-[1px] bg-black mt-[2px]"></div>
          </div>
        </div>
      </div>
      <div className="">
        <span className="text-[12px] text-[rgba(0,0,0,0.5)] font-semibold uppercase">
          Departure
        </span>
        <div className="flex gap-x-[10px] items-center">
          <h1 className="text-[#4D46FA] font-semibold text-[24px]">
            Fri, 22 Mar, 2022
          </h1>
          <img src={calender} alt="" />
        </div>
        <div className="flex gap-x-[10px] items-center">
          <div className="flex flex-col items-center">
            <span className=" text-[14px] font-semibold">Prev</span>
            <div className="w-[37px] h-[1px] bg-black mt-[2px]"></div>
          </div>
          <div className="flex flex-col items-center">
            <span className=" text-[rgba(0,0,0,0.4)] text-[14px] font-semibold">
              Next
            </span>
            <div className="w-[37px] h-[1px] bg-black mt-[2px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
