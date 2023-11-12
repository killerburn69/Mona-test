import React from "react";
import bamboo from "../../img/Flight/Rectangle 20.jpg";
import moment from "moment";
const FlightDetail = ({ item }: any) => {
  const duration = moment.duration(
    moment(item.EndDate).diff(moment(item.StartDate))
  );
  const hours = Math.floor(duration.asHours());
  const minutes = duration.minutes();

  return (
    <div className="pb-[12px]">
      <div className="flex gap-x-[106px]">
        <div className="flex gap-x-[25px]">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-y-[2px]">
              <h1 className="text-[14px] font-semibold uppercase">
                {moment(item.StartDate).hours()}:
                {moment(item.StartDate).minutes()}
              </h1>
              <span className="text-[12px] font-light">
                {moment(item.StartDate).format("DD MMM")}
              </span>
            </div>
            <div className="mb-[51px] mt-[32px] text-[14px] font-light">
              {hours}h{minutes > 0 ? `:${minutes}m` : ""}
            </div>
            <div className="flex flex-col gap-y-[2px]">
              <h1 className="text-[14px] font-semibold uppercase">
                {" "}
                {moment(item.EndDate).hours()}:{moment(item.EndDate).minutes()}
              </h1>
              <span className="text-[12px] font-light">
                {moment(item.EndDate).format("DD MMM")}
              </span>
            </div>
          </div>

          <div className="line_detail h-[149px] w-[1px] bg-[#4D46FA] mt-[12px]"></div>
          <div className="flex flex-col justify-between">
            <div className="mb-[104px]">
              <h1 className="text-[14px] font-semibold">
                Ho Chi Minh City ({item.StartPoint})
              </h1>
              <span className="text-[12px] font-light">Tansonnhat Intl</span>
            </div>
            <div className="text-[14px] font-semibold ">
              <h1>Hai Phong City ({item.EndPoint})</h1>
              <span className="text-[12px] font-light">Catbi Intl</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[10px] flex-1">
          <div className="flex items-center gap-x-[12px]">
            <img src={bamboo} alt="" />
            <div>
              <h1 className="text-[14px] tracking-[1.4px] font-semibold uppercase">
                {item?.AirlineCode === "VJ" ? "vietjet air" : "Bamboo Airways"}
              </h1>
              <div className="flex text-[12px] font-light gap-x-[5px] items-center">
                <span>{item?.FlightNumber}</span>
                <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
                <span>{item?.GroupClass}</span>
              </div>
            </div>
          </div>
          <div className="p-[15px] bg-[#F4F2F9] rounded-xl flex gap-x-[65px]">
            <div className="flex flex-col font-light text-[14px] gap-y-[4px]">
              <span>
                Baggage{" "}
                <span className="font-semibold text-[#4D46FA]">
                  {item.Freebag} + {item.Carryon}
                </span>
              </span>
              <span>
                In-flight{" "}
                <span className="font-semibold text-[#4D46FA]">Meal</span>
              </span>
              <span>
                In-flight{" "}
                <span className="font-semibold text-[#4D46FA]">
                  Entertainment
                </span>
              </span>
            </div>
            <div className="flex flex-col font-light text-[14px] gap-y-[4px]">
              <span>
                Aircraft{" "}
                <span className="font-semibold text-[#4D46FA]">
                  Airbus {item.RelatedFlights[0].Plane}
                </span>
              </span>
              <span>
                Seat layout{" "}
                <span className="font-semibold text-[#4D46FA]">
                  {" "}
                  {item.RelatedFlights[0].SeatClass}
                </span>
              </span>
              <span>
                Seat pitch{" "}
                <span className="font-semibold text-[#4D46FA]">
                  29 inches (standard)
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetail;
