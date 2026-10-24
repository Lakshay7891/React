# API Calls in React.js — Fetch API & Axios (Third Party Library)

---

## 📚 Table of Contents

- [🌐 What Is an API?]
- [⚛️ Why Do We Need API Calls in React?]
- [🔄 How API Calls Work]
- [1️⃣ Fetch API]
- [2️⃣ Axios]
- [⚖️ Fetch vs Axios]
- [⏳ Loading, Error & Data States]
- [🧠 Important Concepts]
- [💡 Best Practices]
- [🎯 Conclusion]

---

## 🌐 What Is an API?

**API (Application Programming Interface)** allows two applications to communicate with each other.

API stand for **Application Programming Interface** which is a **set of rules or protocols** that are used to communicate between two applications.

Two Applications like Frontend and Backend.

In React, APIs are commonly used to retrieve or send data to a backend server.

For example:

- Fetch user details
- Display products
- Send login credentials
- Submit registration forms
- Load comments and posts

**Example API:** `https://jsonplaceholder.typicode.com/users` (Json Placeholder Api)
**Example API:** `https://picsum.photos/v2/list?page=2&limit=100` (Lorem Picsum Api)

This API returns sample user data in JSON format.

---

## Why Do We Need API Calls in React?

React is responsible for building the user interface, but real-world applications often need data from a server or database.

API calls help us:

- Fetch dynamic data from a server.
- Send data to a backend.
- Update the UI with API responses.
- Handle loading states and errors.
- Build real-world applications such as dashboards, e-commerce websites and social media platforms.

---

## How API Calls Work

```text
React Component
      |
      v
  API Request
 (Fetch / Axios)
      |
      v
   API Server
      |
      v
  JSON Response
      |
      v
  React State
      |
      v
  Updated UI
```

---

## 1️⃣ Fetch API

### What is Fetch?

`fetch()` is a built-in JavaScript function used to make HTTP requests. You don't need to install any external library.

### Basic Example

```javascript
const getData = async()=>{
  const response = await fetch('https://picsum.photos/v2/list?page=2&limit=100')
  const data = await response.json()
  console.log(data);
```

### Important Points About Fetch

- Fetch is built into modern browsers.
- It returns a Promise.
- You can use `.then()` or `async/await`.
- You must call `response.json()` to parse JSON.
- HTTP errors such as `404` or `500` do not automatically reject the Fetch Promise. Check `response.ok`.
- Network failures and invalid request URLs can reject the Promise.

---

## 2️⃣ Axios

### What is Axios?

**Axios** is a third-party JavaScript library used to make HTTP requests from browsers and Node.js environments.

It offers convenient methods for handling requests, responses, JSON data and errors.

### Install Axios

```bash
npm install axios
```

### Basic Example

```javascript
const getData = async () => {
  const response = await axios.get(
    "https://picsum.photos/v2/list?page=2&limit=100",
  );
  console.log(response);
};
```

### How Does Axios Work?

1. Install Axios using npm.
2. Import Axios into your component.
3. Use `axios.get()` to send a GET request.
4. Use `await` to wait for the response.
5. Access the response body using `response.data`.
6. Handle request failures using `try...catch`.

### Important Points About Axios

- Axios is a third-party library.
- It returns Promises.
- It works with both `.then()` and `async/await`.
- It automatically parses JSON response data in common JSON-response scenarios.
- It rejects the Promise by default for HTTP status codes outside the accepted 2xx range.
- It supports request configuration, interceptors, timeouts and request cancellation.

---

## ⚖️ Fetch vs Axios

| Feature             | Fetch API             | Axios                                |
| ------------------- | --------------------- | ------------------------------------ |
| Type                | Built-in browser API  | Third-party library                  |
| Installation        | Not required          | `npm install axios`                  |
| Promise support     | Yes                   | Yes                                  |
| `async/await`       | Supported             | Supported                            |
| JSON handling       | Use `response.json()` | Usually automatic                    |
| HTTP error handling | Check `response.ok`   | Rejects non-2xx responses by default |
| Request timeout     | Use `AbortController` | Supports `timeout`                   |
| Interceptors        | Not built in          | Supported                            |
| Extra dependency    | No                    | Yes                                  |

### Which One Should You Use?

**Use Fetch when:**

- You want a lightweight solution.
- Your API requirements are simple.
- You don't want an extra dependency.

**Use Axios when:**

- You prefer a convenient API.
- You need interceptors or shared request configuration.
- Your project has many API requests.
- You want consistent HTTP error handling.

Both are valid choices. Axios is not inherently faster, and Fetch is not inherently bad or outdated.

---

## 🧠 Important Concepts

### 1. Promise

A Promise represents the eventual result of an asynchronous operation.

It can be:

- `pending`
- `fulfilled`
- `rejected`

### 2. Async/Await

`async/await` makes asynchronous code easier to read.

```javascript
async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return await response.json();
}
```

### 3. useEffect

`useEffect()` is commonly used to fetch data after a component mounts or when specified dependencies change.

### 4. useState

`useState()` stores API data, loading status and error messages so React can update the UI.

### 5. HTTP Methods

| Method | Purpose                      |
| ------ | ---------------------------- |
| GET    | Retrieve data                |
| POST   | Create or submit data        |
| PUT    | Replace an existing resource |
| PATCH  | Partially update a resource  |
| DELETE | Delete a resource            |

---

## 💡 Best Practices

- Always handle errors with `try...catch` or an appropriate Promise error handler.
- Check HTTP status when using Fetch.
- Show loading indicators while requests are in progress.
- Use meaningful error messages.
- Store API responses in React state when they need to appear in the UI.
- Use stable keys when rendering lists.
- Avoid unnecessary API calls by using appropriate effect dependencies.
- Cancel or ignore outdated requests when a component unmounts or request parameters change.
- Never expose secret API keys in frontend code.
- Keep API logic reusable when your application grows.

---

## 🎯 Conclusion

API calls are an essential part of modern React development.

Both **Fetch API and Axios** allow you to communicate with backend servers and retrieve or send data.

- **Fetch:** Built-in, lightweight and requires manual HTTP status checking.
- **Axios:** A convenient external library with automatic JSON handling and built-in HTTP error rejection.

Understanding both approaches will help you build dynamic React applications and prepare for frontend and full-stack developer interviews.

---

# Author - Lakshay Khanna | Aspiring Full Stack Development
