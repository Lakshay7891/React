#  React Router DOM – Basic Routing

##  About

React Router DOM is a popular library used in React applications to navigate between different pages without reloading the entire website. It helps to create a Single Page Application (SPA) by displaying different components based on the URL.

##  Features

- 🔹 Simple routing in React
- 🔹 `BrowserRouter` to wrap the application
- 🔹 `Routes` and `Route` to define different pages
- 🔹 `Link` to navigate between pages without reloading
- 🔹  Easy navigation and better user experience

##  Installation

Install React Router DOM using npm:

```bash
npm install react-router-dom     
```

### It is a third party library that is used to perform basic to advanced routing in ReactJs.

##  1. Wrap the Application with BrowserRouter

In `main.jsx`, import `BrowserRouter` and wrap your `App` component with it.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

**Explanation:** `BrowserRouter` enables routing in your React application and allows components to access routing features.

## 🛣️ 2. Create Routes

In `App.jsx`, use `Routes` and `Route` to define different pages.

```jsx
import { Routes, Route } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
```

**Explanation:**

- `Routes`: Contains all the routes of the application.
- `Route`: Defines a URL path and the component to display.
- `path`: Specifies the URL.
- `element`: Specifies the React component to render.

## 🔗 3. Use the Link Component

The `Link` component is used to navigate between pages without reloading the entire website.

```jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {' | '}
      <Link to="/about">About</Link>
      {' | '}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
```

**Explanation:**

- `Link`: Navigates users to another route.
- `to`: Specifies the destination URL.
- It avoids the full-page reload caused by normal HTML navigation using an `<a>` tag.

##  Why Use Link Instead of an Anchor Tag?

| Link Component | Anchor Tag |
|---|---|
| Uses client-side navigation | Usually triggers a full-page navigation |
| Keeps the React application loaded | Reloads the document for a different page |
| Provides a smooth navigation experience | May cause a full-page refresh |

##  Basic Routing Flow

1. Install `react-router-dom`.
2. Wrap the `App` component with `BrowserRouter`.
3. Define routes using `Routes` and `Route`.
4. Use `Link` to navigate between pages.
5. Visit the corresponding URL to display the correct component.

##  Conclusion

React Router DOM makes navigation easy in React applications. By using `BrowserRouter`, `Routes`, `Route`, and `Link`, we can create multiple pages and navigate between them without reloading the entire website.

**Happy Coding!**

If you find this helpful, don't forget to star the repository!

**LK Signing Off** | **Aspiring Full Stack Development**