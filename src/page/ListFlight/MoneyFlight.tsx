import React from "react";
import bamboo from "../../img/Flight/Rectangle 20.jpg";
import { useSelector } from "react-redux";
import { selectFlight, selectIndev } from "../../store/reducer/flightSlice";
import moment from "moment";
import { formatMoney } from "../../util/lib";
const MoneyFlight = () => {
  const flight: any = useSelector(selectFlight);
  const indexRedux = useSelector(selectIndev);
  const duration = moment.duration(
    moment(flight.EndDate).diff(moment(flight.StartDate))
  );
  const hours = Math.floor(duration.asHours());
  const minutes = duration.minutes();
  console.log(
    "🚀 ~ file: MoneyFlight.tsx:8 ~ MoneyFlight ~ indexRedux:",
    indexRedux
  );

  console.log(flight);

  return (
    <div className="rounded-xl overflow-hidden">
      <div className="bg-white">
        <h1 className="text-[14px] tracking-[1.4px] font-semibold uppercase p-[15px]">
          your flights
        </h1>
        <div className="w-full h-[1px] bg-[rgba(0,0,0,0.1)]"></div>
        <div className="p-[15px]">
          <div className="grid grid-cols-[30px_1fr] gap-x-[12px] items-center mb-[16px]">
            <div className=" w-[30px] h-[30px] flex justify-center items-center bg-[#979797] rounded-full">
              <p className="text-[14px] font-semibold text-white">01</p>
            </div>
            <div className="flex flex-col ">
              <span className="text-[14px] font-light">
                {moment(flight.StartDate).format("ddd, DD MMM, YYYY")}
              </span>
              <span className="text-[14px] font-semibold">
                Da Nang - Ho Chi Minh
              </span>
            </div>
          </div>
          <div className="flex gap-x-[12px] items-center mb-[10px]">
            <img src={bamboo} alt="" />
            <div className="flex flex-col">
              <h1 className="text-[14px] uppercase font-semibold">
                Bamboo Airways
              </h1>
              <span className="underline text-[#4D46FA] text-[12px] font-semibold">
                Details
              </span>
            </div>
          </div>
          <div className="flex gap-x-[20px] items-center mb-[20px]">
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[14px] mb-[4px]">
                {" "}
                {moment(flight.StartDate).hours()}:
                {moment(flight.StartDate).minutes()}
              </h1>
              <span className="text-[10px] text-black px-[5px] py-[3px] rounded-[100px] bg-[rgba(77,70,250,0.10)]">
                DAD
              </span>
            </div>
            <div className="flex flex-col items-center gap-y-[3px] flex-1">
              <span className="text-[14px] font-light">
                {hours}h{minutes > 0 ? `:${minutes}m` : ""}
              </span>
              <div className="line w-full h-[1px] bg-[#4D46FA]"></div>
              <span className="text-[12px] font-light">Direct</span>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold mb-[4px] text-[14px]">
                {moment(flight.EndDate).hours()}:
                {moment(flight.EndDate).minutes()}
              </h1>
              <span className="text-[10px] text-black px-[5px] py-[3px] rounded-[100px] bg-[rgba(77,70,250,0.10)]">
                DAD
              </span>
            </div>
          </div>
          <button className="w-full py-[10px] px-[16px] bg-[rgba(77,70,250,0.10)] rounded-xl text-[#4D46FA] text-[12px] font-semibold">
            Change departure flight
          </button>
          <div className="w-full h-[1px] bg-[rgba(0,0,0,0.1)] my-[15px]"></div>
          {flight.ReturnFlight && (
            <div className="grid grid-cols-[30px_1fr] gap-x-[12px] items-center">
              <div className=" w-[30px] h-[30px] flex justify-center items-center bg-[#4D46FA] rounded-full">
                <p className="text-[14px] font-semibold text-white">02</p>
              </div>
              <div className="flex flex-col ">
                <span className="text-[14px] font-light">
                  Fri, 11 Feb, 2022
                </span>
                <span className="text-[14px] font-semibold">
                  Ho Chi Minh - Da Nang
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="p-[15px] bg-[#F8F8F8] flex flex-col">
        <span className="text-[14px] font-light">Subtotal</span>
        <span className="text-[14px] font-semibold text-[#F06336]">
          {formatMoney(flight?.TaxAdult + flight?.PriceAdult)} vnd
        </span>
      </div>
    </div>
  );
};

export default MoneyFlight;
