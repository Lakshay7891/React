import React from "react";

const About = () => {
  return (
    <>
      <div className="text-white text-3xl font-bold bg-red-950 text-center h-20 flex items-center justify-center ">
        <h1>About Me !!</h1>
      </div>

      <div className="two flex gap-5">
        <div className="bg-black h-screen w-[50%]">
          <img
            className="object-cover"
            src="https://cdn.pixabay.com/photo/2023/02/10/19/34/aesthetic-7781518_1280.jpg"
            alt="Image"
          />
          <p className="text-white font-semibold text-justify">
            React is a popular JavaScript library used to build fast,
            interactive, and dynamic user interfaces. It helps developers create
            reusable components, manage application state, and efficiently
            update the UI. React makes web development easier, more organized,
            and scalable. It is widely used for building modern single-page
            applications and responsive websites. It also supports hooks,
            virtual DOM, and seamless integration with APIs.{" "}
          </p>
        </div>

        <div className="bg-black h-screen w-[50%]">
          <h2 className="text-amber-500 font-bold text-center text-4xl  ">
            About The React
          </h2>
          <p className="text-white text-justify font-semibold">
            About React.js React.js is a popular, open-source JavaScript library
            developed by Facebook (now Meta) for building modern, interactive,
            and dynamic user interfaces. It is widely used in frontend
            development to create fast, responsive, and user-friendly web
            applications. React follows a component-based architecture, allowing
            developers to divide a website into small, reusable components. This
            approach makes code easier to maintain, understand, and reuse across
            different parts of an application. React also uses JSX, which allows
            developers to write HTML-like syntax directly within JavaScript. One
            of React's important features is the Virtual DOM, which helps update
            the user interface efficiently when application data changes. React
            provides Hooks such as `useState` and `useEffect` to manage state
            and handle side effects in functional components. React also
            supports one-way data flow, making applications easier to debug and
            manage. Developers can integrate React with APIs using the built-in
            Fetch API or libraries like Axios to retrieve and display dynamic
            data. React is suitable for building single-page applications,
            dashboards, e-commerce websites, and many other web projects. It can
            also be combined with technologies such as Node.js, Express.js,
            MongoDB, and Next.js to develop full-stack applications. Overall,
            React.js is a powerful tool that simplifies frontend development and
            helps developers build scalable, reusable, and high-performance web
            applications.
          </p>

          <h3 className="text-amber-500 font-bold text-5xl text-center">
            Author-Lakshay Khanna
          </h3>
        </div>
      </div>
    </>
  );
};

export default About;
