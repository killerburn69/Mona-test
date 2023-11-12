import React, { useState } from "react";
import arrowDown from "../../img/homepage/Vector 1.svg";
const FitlerBar = () => {
  const [dropDownChild, setDropDownChild] = useState(false);
  const [dropDownBusiness, setDropDownBusiness] = useState(false);
  return (
    <div className="flex gap-x-[50px] mb-[21px]">
      <div>
        <div className="flex items-center gap-x-[20px]">
          <div className="radio-check">
            <input type="radio" name="check" id="1" />
            <label htmlFor="1">One way / Round-trip</label>
          </div>
          <div className="radio-check">
            <input type="radio" name="check" id="2" defaultChecked />
            <label htmlFor="2">Multi-city</label>
          </div>
        </div>
      </div>
      <div
        className="relative cursor-pointer"
        onClick={() => setDropDownChild(!dropDownChild)}
      >
        <div className="flex gap-x-[5px] items-center">
          <span className="font-semibold">
            <span className="text-[#4D46FA]">02</span> Adult,{" "}
            <span className="text-[#4D46FA]">01</span> children
          </span>
          <img
            src={arrowDown}
            alt=""
            className={`${
              dropDownChild ? "rotate-180" : ""
            } transition-transform ease-in-out duration-200`}
          />
        </div>
        {dropDownChild && (
          <div className="absolute p-3 z-10 top-[100%] left-0 bg-white rounded-lg shadow-lg w-[200px]">
            <div className="flex flex-col">
              <span>List</span>
              <span>List</span>
              <span>List</span>
              <span>List</span>
            </div>
          </div>
        )}
      </div>
      <div
        className="relative cursor-pointer"
        onClick={() => setDropDownBusiness(!dropDownBusiness)}
      >
        <div className="flex gap-x-[5px] items-center">
          <span className="font-semibold">Business Class</span>
          <img
            src={arrowDown}
            alt=""
            className={`${
              dropDownBusiness ? "rotate-180" : ""
            } transition-transform ease-in-out duration-200`}
          />
        </div>
        {dropDownBusiness && (
          <div className="absolute z-10 p-3 top-[100%] left-0 bg-white rounded-lg shadow-lg w-[200px]">
            <div className="flex flex-col">
              <span>List</span>
              <span>List</span>
              <span>List</span>
              <span>List</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FitlerBar;
