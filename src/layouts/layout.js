
import React from "react";
//components
import Navbar from "../components/Navbar/navbar";
import HeroCarousal from "../components/HeroCarousel/Hero_Carousal";
const DefaultLayout = (props) => {
  return (
    <div>
      <Navbar />
      <HeroCarousal />
      {props.children}
    </div>
  );
};

export default DefaultLayout;