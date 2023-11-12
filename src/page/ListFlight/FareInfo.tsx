import React from "react";
import bamboo from "../../img/Flight/Rectangle 20.jpg";
import { formatMoney } from "../../util/lib";
const FareInfo = ({ item }: any) => {
  return (
    <div className="flex gap-x-[114px] pb-[30px]">
      <div>
        <h1 className="mb-[15px] uppercase text-[14px]">Conditions</h1>
        <div className="">
          <div className="flex items-center gap-x-[12px] mb-[10px]">
            <img src={bamboo} alt="" />
            <div>
              <h1 className="text-[14px] tracking-[1.4px] font-semibold uppercase">
                Bamboo Airways
              </h1>
              <div className="flex text-[12px] font-light gap-x-[5px] items-center">
                <span>{item?.FlightNumber}</span>
                <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
                <span>{item?.GroupClass}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-[15px]">
            <div className="flex gap-x-[6px] items-center">
              <span className="text-[14px] font-light">Ho Chi Minh City</span>
              <div className="line w-[92px] h-[1px] bg-[#4D46FA]"></div>
              <span className="text-[14px] font-light">Hai Phong</span>
            </div>
            <span className="text-[12px] text-[#4D46FA] font-light">
              {item?.GroupClass}
            </span>
          </div>
          <span className="text-[12px] font-light">
            {item.NoRefund ? "Non - Refundable" : ""}
          </span>
        </div>
      </div>
      <div className="max-w-[450px] w-full">
        <h1 className="mb-[15px] uppercase text-[14px]">price details</h1>
        <div>
          <div>
            <div className="flex justify-between items-center">
              <span className="text-[14px] font-light">
                Adult Basic Fare (x1)
              </span>
              <span className="w-[110px] text-[14px] font-semibold">
                {formatMoney(item?.PriceAdult)} vnd
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[14px] font-light">Tax</span>
              <span className="w-[110px] text-[14px] font-light">
                {formatMoney(item?.TaxAdult)} vnd
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[14px] font-light">
                Regular Total Price
              </span>
              <span className="w-[110px] text-[14px] font-light">
                {formatMoney(item?.TaxAdult + item?.PriceAdult)} vnd
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[14px] font-light text-[#F06336]">
                Save
              </span>
              <span className="w-[110px] text-[14px] font-light">
                {formatMoney(
                  item?.TaxAdult +
                    item?.ChargeAdult -
                    (item?.TaxAdult + item?.PriceAdult)
                )}{" "}
                vnd
              </span>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[rgba(0,0,0,0.1)] my-[5px]"></div>
          <div>
            <div className="flex justify-between items-center">
              <span className="text-[14px] font-light">You pay</span>
              <span className="w-[110px] text-[14px] text-[#F06336] font-semibold">
                {formatMoney(item?.TaxAdult + item?.PriceAdult)} vnd
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FareInfo;
