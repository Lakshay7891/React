import React from "react";
import HeroImage from "../assets/Hero-Section-Image.png";

const HeroSection = () => {
  return (
    <div className="w-full bg-blue-200 h-60 flex gap-10">
      <div className="left w-1/2 h-full  flex flex-col justify-between t">
        <h2 className="text-blue-600 text-xl font-semibold">
          Welcome To TechHub
        </h2>
        <h2 className="font-bold text-4xl">
          Build Your{" "}
          <span className="text-blue-800 text-4xl font-bold">Ideas</span> <br />{" "}
          Into Reality
        </h2>
        <p className="text-gray-600">
          We Create modern web solutions to help you grow your business and
          bring your ideas to life with clean design and powerful technology.
        </p>

        <div className="g flex gap-10 text-white ">
          <button className="cursor-pointer bg-blue-800 rounded-2xl b">
            Get Started
          </button>
          <button className="cursor-pointer bg-blue-800 rounded-2xl b">
            Watch Demo
          </button>
        </div>
      </div>

      <div className="right  w-1/2 flex justifu-between gap-30">
        <img className="h-full object-cover" src={HeroImage} alt="Image" />
        <ul className="flex flex-col justify-between font-bold f  ">
          <li>Fast</li>
          <li>Modern</li>
          <li>Secure</li>
          <li>Scalable</li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
