/** @format */
import React from "react";
import phoneImage from "../images/crypto-phone.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

function Main() {
  return (
    <main className="mt-[80px]">
      <div className="flex items-center">
        <h2 className="text-[60px] font-[500]">
          Jump start your <br /> crypto career by investing with us.
        </h2>
        <img src={phoneImage} alt="" className="h-[480px] w-[380px]" />
      </div>
      <div>
        <h1>The world fastest crypto investment app</h1>
        {/* <AnimationOnScroll animateIn="animate__bounceIn"> */}
        {/* </AnimationOnScroll> */}
      </div>
      {/*  */}
    </main>
  );
}

export default Main;
