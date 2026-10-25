import React from "react";

const Navbar = () => {
  return (
    <div className=" m flex justify-between items-center text-white bg-white">
      <h3>
        <span className="font-bold text-xl text-black">Tech</span>
        <span className="font-semibold text-xl text-blue-600">Hub</span>
      </h3>
      <div className="flex  items-center gap-5 font-semibold text-black">
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Services</h4>
        <h4>Projects</h4>
        <h4>Contact</h4>
      </div>

      <button className="rounded bg-blue-800 p">Get Started</button>
    </div>
  );
};

export default Navbar;
