import React, { useState, useEffect } from "react";
import bamboo from "../../img/Flight/Rectangle 20.jpg";
import bag from "../../img/Flight/suitcase-2 1.svg";
import eat from "../../img/Flight/cutlery-2 1.svg";
import FlightDetail from "./FlightDetail";
import FareInfo from "./FareInfo";
import moment from "moment";
import { formatMoney } from "../../util/lib";
import { useDispatch, useSelector } from "react-redux";
import { selectIndev, updateFlight } from "../../store/reducer/flightSlice";
const Flight = ({ item, index }: any) => {
  const [tab, setTab] = useState(1);
  const [openShow, setOpenShow] = useState(false);
  const [indexState, setIndexState] = useState(false);
  const indexRedux = useSelector(selectIndev);
  const dispatch = useDispatch();
  const duration = moment.duration(
    moment(item.EndDate).diff(moment(item.StartDate))
  );
  const hours = Math.floor(duration.asHours());
  const minutes = duration.minutes();
  const click = (index: number) => {
    // setIndexState(!indexState);
    if (index === indexRedux) {
      dispatch(
        updateFlight({
          item: {},
          index: -1,
        })
      );
    } else {
      dispatch(
        updateFlight({
          item: item,
          index: index,
        })
      );
    }
  };
  useEffect(() => {
    if (indexRedux === -1) {
      if (indexRedux !== index) {
        dispatch(
          updateFlight({
            item: {},
            index: -1,
          })
        );
      }
    }
  }, [indexRedux]);
  return (
    <div className="p-[15px] bg-white rounded-xl">
      <div className="flex justify-between items-center cursor-pointer gap-x-[60px]">
        <div
          className="flex justify-between items-center  flex-1 cursor-pointer"
          onClick={() => setOpenShow(!openShow)}
        >
          <div className="flex items-center gap-x-[12px]">
            <img src={bamboo} alt="" className="h-full" />
            <h1 className="text-[14px] tracking-[1.4px] uppercase font-semibold">
              {item?.AirlineCode === "VJ" ? "vietjet air" : "Bamboo Airways"}
            </h1>
          </div>
          <div className="flex gap-x-[20px] items-center">
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[14px] mb-[4px]">
                {moment(item.StartDate).hours()}:
                {moment(item.StartDate).minutes()}
              </h1>
              <span className="text-[10px] text-black px-[5px] py-[3px] rounded-[100px] bg-[rgba(77,70,250,0.10)]">
                {item.StartPoint}
              </span>
            </div>
            <div className="flex flex-col items-center gap-y-[3px]">
              <span className="text-[14px] font-light">
                {hours}h{minutes > 0 ? `:${minutes}m` : ""}
              </span>
              <div className="line w-[92px] h-[1px] bg-[#4D46FA]"></div>
              <span className="text-[12px] font-light">Direct</span>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold mb-[4px] text-[14px]">
                {moment(item.EndDate).hours()}:{moment(item.EndDate).minutes()}
              </h1>
              <span className="text-[10px] text-black px-[5px] py-[3px] rounded-[100px] bg-[rgba(77,70,250,0.10)]">
                {item.EndPoint}
              </span>
            </div>
          </div>
          <div className="flex flex-col gapy-[4px]">
            <div className="flex gap-x-[7px] items-center">
              <img src={bag} alt="" />
              <span className="text-[14px] font-light">
                Baggage{" "}
                <span className="text-[#4D46FA] font-semibold">
                  {item.Freebag} + {item.Carryon}
                </span>
              </span>
            </div>
            <div className="flex gap-x-[7px] items-center">
              <img src={eat} alt="" />
              <span className="text-[14px] font-light">
                In-flight{" "}
                <span className="text-[#4D46FA] font-semibold">Meal</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-[4px]">
            {item.ChargeAdult !== 0 && (
              <span className="line_span text-[14px] text-[rgba(0,0,0,0.5)] font-light">
                {formatMoney(item?.ChargeAdult)} vnd
              </span>
            )}
            <span className="text-[14px] text-[#F06336] font-semibold">
              {formatMoney(item?.PriceAdult)} vnd
            </span>
          </div>
        </div>
        <button
          className={`${
            indexRedux === index
              ? "text-white bg-[#F06336]"
              : "text-[#F06336] bg-[rgba(240,99,54,0.10)]"
          } px-[15px] py-[6px] rounded-xl z-30`}
          onClick={() => click(index)}
        >
          Choose
        </button>
      </div>
      <div className="flex items-center gap-x-[30px] text-[12px] font-semibold uppercase mt-[26px] mb-[19px]">
        <h1
          className={`cursor-pointer ${
            tab === 1 ? "underlines text-[#4D46FA]" : "text-[rgba(0,0,0,0.4)]"
          } `}
          onClick={() => setTab(1)}
        >
          FLIGHT DETAIL
        </h1>
        <h1
          className={`cursor-pointer ${
            tab === 2 ? "underlines text-[#4D46FA]" : "text-[rgba(0,0,0,0.4)]"
          } `}
          onClick={() => setTab(2)}
        >
          FARE INFO
        </h1>
      </div>
      {openShow && (
        <>
          {tab === 1 && <FlightDetail item={item} />}
          {tab === 2 && <FareInfo item={item} />}
        </>
      )}
    </div>
  );
};

export default Flight;
