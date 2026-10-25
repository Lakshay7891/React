import React from "react";

const FooterSection = () => {
  return (
    <div className=" a w-full  bg-amber-100 h-37 flex gap-2 items-center">
      <div className="left h-full w-1/2 ">
        <div className="flex flex-col justify-between items-start  h-full">
          <h2 className="text-blue-500 font-semibold uppercase ">About Us</h2>
          <h1 className="font-bold text-xl">
            We are a Team Of{" "}
            <span className="text-blue-600 text-2xl font-bold">Creative</span>{" "}
            Developers.
          </h1>
          <p className="text-gray-600">
            At TechHUb, we are passionate about building innovative web
            solutions.
          </p>
          <button className=" pppp  text-white rounded-xl font-semibold text-xl bg-blue-900">
            Learn More
          </button>
        </div>
      </div>

      <div className="right h-full w-1/2 bg-green-200">
        <img
          className=" object-cover h-full"
          src="https://imgs.search.brave.com/77dd5TVaoYQUMS8Pe4vZwYlf3ZLSDpQZPvVutDFltyc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmdp/bWFnZXMuY29tL2lt/YWdlcy90aHVtYm5h/aWwvdGVjaC1zdXBw/b3J0LXRlYW0td29y/a2luZy10b2dldGhl/ci1oa2s3Y3F4dDJr/MGpiZWtyLnBuZw"
          alt="Footer Right Image"
        />
      </div>
    </div>
  );
};

export default FooterSection;
