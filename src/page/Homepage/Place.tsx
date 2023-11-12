import React from "react";
import switchs from "../../img/homepage/Frame 2.svg";
const Place = () => {
  return (
    <div className="flex items-center flex-1">
      <div className="relative px-[20px] py-[15px] max-w-[300px] w-full border-[1px] border-[rgba(0,0,0,0.10)] rounded-xl ">
        <span className="text-[12px] text-[rgba(0,0,0,0.5)] font-semibold uppercase">
          From
        </span>
        <h1 className="text-[#4D46FA] font-semibold text-[24px]">Da Nang</h1>
        <span className="text-[14px] font-semibold">Quang Nam, Viet Nam</span>
        <div className="left absolute border-[1px]  top-[50%] translate-y-[-50%] right-[-1px] w-[30px] h-[60px]  bg-white rounded-bl-[60px] rounded-tl-[60px]"></div>
      </div>
      <div className="">
        <img src={switchs} alt="" className="w-[70px]" />
      </div>
      <div className="relative  px-[40px] py-[15px] max-w-[300px] w-full border-[1px] border-[#4D46FA] rounded-xl">
        <span className="text-[12px] text-[rgba(0,0,0,0.5)] font-semibold uppercase">
          To
        </span>
        <h1 className="text-[#4D46FA] font-semibold text-[24px]">Da Nang</h1>
        <span className="text-[14px] font-semibold">Quang Nam, Viet Nam</span>
        <div className="right absolute border-[1px] border-[#4D46FA]  top-[50%] translate-y-[-50%] left-[-1px] w-[30px] h-[60px]  bg-white rounded-br-[60px] rounded-tr-[60px]"></div>
      </div>
    </div>
  );
};

export default Place;
