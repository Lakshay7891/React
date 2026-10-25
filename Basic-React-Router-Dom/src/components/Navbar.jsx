import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-white flex justify-between items-center bg-blue-950 h-20">
      <div className="flex items-center gap-3">
        <img
          className="h-10 w-10 rounded-full"
          src="https://imgs.search.brave.com/aicQ4lw0_Sx21ixcjv0bO6Wb2-3r6LytwlSqslmZszw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXJlYWN0LWljb24t/c3ZnLWRvd25sb2Fk/LXBuZy0yMjYwNTMu/cG5nP2Y9d2VicCZ3/PTEyOA"
          alt="React Logo"
        />
        <h3 className="font-bold">React Router Dom</h3>
      </div>

      <div className="routing-tags flex items-center gap-10 font-semibold text-amber-400">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
