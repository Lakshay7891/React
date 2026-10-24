import React from "react";

const App = () => {
  
  // It is used to clear all the data that are saved in localStorage.
  localStorage.clear();

  // It is used to set all the data in the localStorage.
  localStorage.setItem("name", "Lakshay Khanna");
  localStorage.setItem("age", 23);
  localStorage.setItem("Gender", "Male");
  localStorage.setItem("Relationship Status", "Unmarried");

  // It is used to get all the data from the localStorage.

  const name = localStorage.getItem("name");
  console.log(`User data is : ${name}`);

  const age = localStorage.getItem("age");
  console.log(`User data is : ${age}`);

  const Gender = localStorage.getItem("Gender");
  console.log(`User data is : ${data}`);

  const RelationshipStatus = localStorage.getItem("RelationshipStatus");
  console.log(`User data is : ${RelationshipStatus}`);

  //// It is used to clear all the data that are saved in localStorage.

  localStorage.removeItem("name");
  localStorage.removeItem("age");
  localStorage.removeItem("Gender");
  localStorage.removeItem("RelationshipStatus");


  // We can also print the objects in the localStorage.

  const data = {
    name: "Lakshay Khanna",                     // This is the object of data.
    class:"Btech CSE",
    gender:"Male",
    relationshipStatus:"Unmarried",
    bloodGroup:"A+"
  }



  localStorage.setItem("user", JSON.stringify(data))

  const getData = JSON.parse(localStorage.getItem("user"))

  //These are the 4 methods of localStorage.

  return (
    <div className="text-white bg-black h-screen w-full flex items-center justify-center text-4xl font-bold">
      <h1 className="bg-amber-600 px-4 py-7">Learn About Local Storages.</h1>
    </div>
  );
};

export default App;
