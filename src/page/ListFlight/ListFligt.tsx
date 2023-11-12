import React, { CSSProperties, useEffect, useState } from "react";
import axios from "axios";
import Wrapper from "../../component/Wrapper";
import switchs from "../../img/Flight/Frame 4.svg";
import search from "../../img/Flight/search-6 1.svg";
import arrowDown from "../../img/homepage/Vector 1.svg";
import Flight from "./Flight";
import MoneyFlight from "./MoneyFlight";
import { ClipLoader, HashLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { selectIndev } from "../../store/reducer/flightSlice";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const ListFligt = () => {
  const [dataFlight, setDataFlight] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const index = useSelector(selectIndev);
  const endpoint = "https://api-erp.monamedia.net/graphql";
  const headers = {
    "content-type": "application/json",
  };
  const graphqlQuery = {
    operationName: "getFlights",
    query: `query getFlights($currentPage: Int, $pageSize: Int) {
        Flights(currentPage: $currentPage, pageSize: $pageSize) {
          currentPage
          count
          items {
            AirlineCode
            Carryon
            ChargeAdult
            ChargeChild
            ChargeInfant
            CompareMode
            DayChange
            Duration
            EndDate
            EndPoint
            FareBasis
            FareClass
            FareRule
            FareType
            FeeAdult
            FeeChild
            FeeInfant
            FlightId
            FlightNumber
            Freebag
            GroupClass
            HasChangedClass
            HasDownStop
            MarketingAirline
            NoRefund
            OperatingAirline
            Plane
            PriceAdult
            PriceChild
            PriceInfant
            Promo
            RelatedFlights {
              AirlineCode
              Carryon
              Duration
              EndPoint
              EndTime
              FlightNumber
              Freebag
              Index
              Plane
              SeatClass
              StartPoint
              StartTime
            }
            ReturnFlight
            SeatRemain
            SessionId
            StartDate
            StartPoint
            StopOvernight
            Stops
            TaxAdult
            TaxChild
            TaxInfant
          }
          pageSize
          total
        }
      }`,
    variables: {
      currentPage: 2,
      pageSize: 6,
    },
  };
  const getDataFlight = async () => {
    const response: any = await axios({
      url: endpoint,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
    setIsLoading(false);
    setDataFlight(response?.data);
    // alert(JSON.stringify(response));
  };
  useEffect(() => {
    setIsLoading(true);
    getDataFlight();
  }, []);
  return (
    <div className=" ">
      <div className="bg-white py-[20px]">
        <Wrapper>
          <div className="flex w-full items-center justify-between">
            <div className="flex gap-x-[69px]">
              <div>
                <h1 className="text-[#4D46FA] font-semibold">Da Nang (DAD)</h1>
                <span className="text-[14px] text-black font-light">
                  Fri, 22 Mar, 2022
                </span>
              </div>
              <img src={switchs} alt="" />
              <div>
                <h1 className="text-[#4D46FA] font-semibold">
                  Ho Chi Minh (SGN)
                </h1>
                <span className="text-[14px] text-black font-light">
                  Fri, 22 Mar, 2022
                </span>
              </div>
            </div>
            <div className="flex items-center gap-x-[15px] text-[14px]">
              <span>Round-trip</span>
              <div className="h-[24px] w-[1px] bg-[rgba(0,0,0,0.1)]"></div>
              <div>
                <span className="text-[#4D46FA] font-semibold">02 </span>Adult,{" "}
                <span className="text-[#4D46FA] font-semibold">01 </span>
                children
              </div>
              <div className="h-[24px] w-[1px] bg-[rgba(0,0,0,0.1)]"></div>
              <span>Business Class</span>
            </div>
            <button className="px-[16px] py-[10px] bg-[#F06336] rounded-xl flex items-center gap-x-[10px] text-[14px] text-white">
              <span>Change Flight</span>
              <img src={search} alt="" />
            </button>
          </div>
        </Wrapper>
      </div>
      <div className="bg-[#F4F2F9] w-full h-full pt-[15px]">
        <Wrapper>
          <div className="flex gap-x-[10px]">
            <div className="flex-1">
              <div className="flex items-center text-[12px] justify-end mb-[5px]">
                <span className="uppercase space-x-[1.2px]  text-[rgba(0,0,0,0.5)] font-semibold mr-[14px]">
                  Filter
                </span>
                <div className="flex font-light items-center max-w-[120px] w-full justify-between px-[15px] py-[8px] rounded-xl bg-white mr-[5px]">
                  <span>Transit</span>
                  <img src={arrowDown} alt="" />
                </div>
                <div className="flex font-light items-center max-w-[120px] w-full justify-between px-[15px] py-[8px] rounded-xl bg-white mr-[5px]">
                  <span>Time</span>
                  <img src={arrowDown} alt="" />
                </div>
                <div className="flex font-light items-center max-w-[120px] w-full justify-between px-[15px] py-[8px] rounded-xl bg-white mr-[5px]">
                  <span>Airline</span>
                  <img src={arrowDown} alt="" />
                </div>
                <div className="flex font-light items-center max-w-[120px] w-full justify-between px-[15px] py-[8px] rounded-xl bg-white">
                  <span>Low Price</span>
                  <img src={arrowDown} alt="" />
                </div>
              </div>
              <div>
                {isLoading ? (
                  <HashLoader
                    color="#4D46FA"
                    loading={isLoading}
                    cssOverride={override}
                    size={40}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                ) : (
                  <div className="flex flex-col gap-y-[10px]">
                    {dataFlight.data?.Flights.items.map(
                      (item: any, index: any) => (
                        <Flight item={item} key={index} index={index} />
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="max-w-[270px] w-full">
              {index !== -1 && <MoneyFlight />}
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default ListFligt;
