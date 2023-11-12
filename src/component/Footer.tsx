import React from "react";
import call from "../img/footer/Group.svg";
import emall from "../img/footer/email-4.svg";
import facebook from "../img/footer/facebook-3 1.svg";
import insta from "../img/footer/instagram-4 1.svg";
import Wrapper from "./Wrapper";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const pathname = useLocation();
  const isFlight = pathname.pathname === "/";
  return (
    <div className={` ${isFlight ? "bg-white" : "bg-[#F4F2F9] pt-[50px]"}`}>
      <Wrapper>
        <div
          className={`flex justify-between items-center text-[14px] font-normal pb-[41px]`}
        >
          <div className="flex items-center gap-x-[30px]">
            <div className="flex items-center gap-x-[5px]">
              <img src={call} alt="" />
              <span>Call us: +84 908 02 02 58</span>
            </div>
            <div className="flex items-center gap-x-[5px]">
              <img src={emall} alt="" />
              <span>Email: chucinog@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-x-[10px]">
            <span>Follow us</span>
            <div className="w-[40px] h-[1px] bg-black"></div>
            <div className="flex items-center gap-x-[10px]">
              <img src={facebook} alt="" />
              <img src={insta} alt="" />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
