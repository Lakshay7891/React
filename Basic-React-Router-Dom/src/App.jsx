import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <img
          className="h-100 w-full object-cover"
          src="https://imgs.search.brave.com/-55qWoGPSc2wEc1eRnwOhKq38IU2uG4cqP5nGzHhSHY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWxtYWJldHRlci5j/b20vX25leHQvaW1h/Z2U_dXJsPWh0dHBz/Oi8vZDFmbjZ4dTc1/NHYzMTkuY2xvdWRm/cm9udC5uZXQvbWVk/aXVtX1JlYWN0X0Z1/bmRhbWVudGFsc181/NmUzMmZkOTM5LnBu/ZyZ3PTM4NDAmcT03/NQ"
          alt="React Fundamentals Image"
        />
        <Footer />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
