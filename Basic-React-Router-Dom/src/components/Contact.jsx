import React from "react";
import "../assets/contactPage.jpg";

const Contact = () => {
  return (
    <>
      <div className="h-screen w-full">
        <div>
          <h1 className="text-white text-5xl font-bold  text-center bg-amber-600">
            Contact Page
          </h1>
        </div>

        <div className="flex gap-5">
          <div className="left h-full w-[50%] bg-blue-900">
            <img
              className="w-full object-cover overflow-hidden"
              src="https://imgs.search.brave.com/_1s05bUOQHfVmZ0gM5FI6bt2beZNIH2ZFa67LzPNlWM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90YWls/Z3JpZHMuY29tL19u/ZXh0L2ltYWdlP3Vy/bD1odHRwczovL2Fw/aS50YWlsZ3JpZHMu/Y29tL2ltYWdlcy9w/cm9kdWN0LzEyYzNj/MjAwLTg4YzYtNDRl/Mi1iM2NlLTRlYmFh/Y2UxOTk3Ny5qcGcm/dz0zODQwJnE9NzU"
              alt=""
            />

            <div className="text-white flex flex-col justify-between gap-5 font-bold">
              <h1>Name : Lakshay Khanna</h1>
              <h1>Email Address : lakshaykhanna42@gmail.com</h1>
              <h1>Gender : Male</h1>
              <h1>Relationship Status : Unmarried </h1>
            </div>
          </div>

          <div className="right">
            <img
              className="w-full object-cover"
              src="https://imgs.search.brave.com/JFfUPXkk9WzWemJdm4zj4osU7EIOg2R486tHjwGpuyk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waHBw/b3QuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI1LzA5L3Jl/YWN0LWNvbnRhY3Qt/Zm9ybS1vdXRwdXQt/NTUweDM1Ny5wbmc"
              alt=""
            />

            <div className="text-white font-semibold.">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
              asperiores aliquam necessitatibus optio sed odit alias ullam
              harum?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
