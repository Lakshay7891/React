import React from "react";

const Home = () => {
  return (
    <div className="bg-black h-screen w-full text-white ">
      <h1 className=" flex justify-center items-center bg-red-400 text-center text-5xl text-bold uppercase h-30">
        Welcome to Basic React Router Dom Concept.
      </h1>
      <img
        className="h-full w-full object-cover overflow-hidden"
        src="https://imgs.search.brave.com/11PutV6WUhedVA_muIFuJdnmghjSaIwOkptMDY5sXU0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3luY2Z1c2lvbi5j/b20vYmxvZ3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMTAv/UmVhY3QtUm91dGVy/LXZzLi1SZWFjdC1S/b3V0ZXItRE9NLnBu/Zw"
        alt="React Router Dom"
      />
    </div>
  );
};

export default Home;
