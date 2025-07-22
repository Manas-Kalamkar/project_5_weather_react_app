import { useState } from "react";
import React from 'react';
import sun from "../assets/animations/sunny.json"
import Lottie from 'lottie-react';

const Home = () => {
  return (
    <div>
      {/* home page */}
      <div id="homePage" className="flex m-4 mt-24 lg:ml-16 justify-around">
        {/* leftside of homepage */}
        <div id="leftSide" className="flex flex-col gap-6">
          {/* Heading */}
          <div
            id="heading"
            className="text-3xl font-extrabold w-[18ch] break-words whitespace-normal lg:text-6xl items-center  tracking-widest xl:ml-5  xl:text-[5.4rem] lg:leading-[5.4rem]"
          >
            Stay Ahead of the Weather, Wherever You Are.
          </div>
          {/* SubHeading */}
          <div
            id="subHeading"
            className="break-words lg:w-[40ch] whitespace-normal text-2xl"
          >
            Get accurate, real-time forecasts with Weather .From temperature and
            wind to detailed weather trends — all in one place.
          </div>
          {/* Check for forcast button for taking input */}
        </div>
        {/* right side of homepage */}
        <div id="rightSide" className="hidden md:inline-block">
          {/* sun's animation */}
          <Lottie
            renderer="svg"
            animationData={sun}
            background="transparent"
            speed="0.5"
            autoPlay=""
            loop=""
            className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[650px] xl:h-[650px] items-center  "
          />
        </div>
      </div>
    </div>
  )
}

export default Home