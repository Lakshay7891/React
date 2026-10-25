import React from "react";

const MainSection = () => {
  return (
    <div className=" pp w-full h-30  flex items-center justify-between text-black bg-white">
      <div className="flex flex-col gap-3">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src="https://imgs.search.brave.com/BSng5DJyYxXAiWZTzKXo5ghQ2krZ5WpFeA_3HSncQ94/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXJlYWN0LWljb24t/c3ZnLWRvd25sb2Fk/LXBuZy0yMjYwNTMu/cG5nP2Y9d2VicCZ3/PTEyOA"
          alt="React Logo"
        />
        <h2>Web Development</h2>
        <p>Modern and Responsive Web Applications.</p>
      </div>

      <div className="flex flex-col gap-3">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src="https://imgs.search.brave.com/i0Jspo9r5IaU5aaq7L7Xtkj5-KeN7crNQ6Rw3kJs7sU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvdWktdXgt/ZGVzaWduLWlsbHVz/dHJhdGlvbi1zdmct/ZG93bmxvYWQtcG5n/LTE1NDM1Mzc0LnBu/Zw"
          alt="React Logo"
        />
        <h2>UI/UX Design</h2>
        <p>Beautiful and user-friendly.</p>
      </div>

      <div className="flex flex-col gap-3">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src="https://imgs.search.brave.com/6JTLQVuCAGs_j0oGT1Q0fD7OqdZbMZ60AnOiHQsn1Q0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvdWktdXgt/ZGVzaWduLWlsbHVz/dHJhdGlvbi1zdmct/ZG93bmxvYWQtcG5n/LTYwMjQ2MjMucG5n"
          alt="React Logo"
        />
        <h2>Cloud Solutions.</h2>
        <p>Scalable and secure opeations.</p>
      </div>

      <div className="flex flex-col gap-3">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src="https://imgs.search.brave.com/77tcvnMJD0_gnmZivwB55D6tjOX9HMgCGkZSZiYR6V0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/dGVtcGxhdGUvMjAx/OTAzMTYvb3VybWlk/L3BuZ3RyZWUtY29u/c3VsdGluZy1sb2dv/LWltYWdlXzgwNDQ5/LmpwZw"
          alt="React Logo"
        />
        <h2>Consulting</h2>
        <p>Expert Advice for your business growth.</p>
      </div>
    </div>
  );
};

export default MainSection;
