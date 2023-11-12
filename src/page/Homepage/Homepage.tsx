import React from "react";
import Wrapper from "../../component/Wrapper";
import Navbar from "../../component/Navbar";
import Title from "./Title";
import Footer from "../../component/Footer";
import BroadFlight from "./BroadFlight";

const Homepage = () => {
  return (
    <Wrapper>
      <Title />
      <BroadFlight />
    </Wrapper>
  );
};

export default Homepage;
