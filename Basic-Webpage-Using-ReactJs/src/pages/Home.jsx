import React from "react";

const Home = () => {
  return (
    <>
      <div className="routing bg-amber-700 text-white font-bold flex items-center justify-center">
        <h1 className="text-5xl text-white ">Advanced Routing in ReactJs</h1>
      </div>

      <div className=" flex gap-5 imgg  w-full">
        <img
          className=" w-1/2 h-1/2 object-cove"
          src="https://imgs.search.brave.com/44Xt2lti_cCnk1m6X7bzTTp612tqfhKA6nTv5uXdt_E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oYWNr/ZXJub29uLmltZ2l4/Lm5ldC9pbWFnZXMv/QmY2eGJQbWh0VGNB/Umx6TlhNMm9rdEVa/dWgyMi0zNGIybnY5/LmpwZWc_YXV0bz1m/b3JtYXQmZml0PW1h/eCZ3PTM4NDA"
          alt="Advanced Routing in ReactJs"
        />
        <p className="font-semibold">
          Advanced Routing in React.js is used to manage complex navigation in a
          web application. It includes Nested Routes, which allow us to create
          routes inside other routes. Dynamic Routes help us access different
          pages or data using URL parameters. The `useParams()` Hook is used to
          retrieve parameters from the URL, while the `useNavigate()` Hook
          allows us to navigate programmatically from one page to another. React
          Router DOM provides these powerful features to make applications more
          dynamic, interactive, and user-friendly. Advanced Routing helps
          developers organize multiple pages efficiently and create a smooth
          navigation experience for users.Advanced Routing in React.js also
          helps us manage layouts and navigation more efficiently. With Nested
          Routes, we can create common layouts such as a navbar, sidebar, or
          dashboard that remain visible while the content changes. Dynamic
          Routes allow us to build reusable pages for different users, products,
          or blog posts using unique IDs. The `useParams()` Hook extracts these
          values from the URL, and `useNavigate()` helps us redirect users after
          actions like login, registration, or form submission. We can also use
          route protection to restrict access to specific pages. These features
          make React applications organized, scalable, and easier to maintain.
        </p>
      </div>

      <div className="footer flex justify-center items-center">
        <p className="text-black  font-bold text-3xl ">
          All Copyright &copy; Claims are reserved by{" "}
          <span className="text-4xl text-blue-800 font-bold">
            Lakshay Khanna
          </span>
        </p>
      </div>
    </>
  );
};

export default Home;
