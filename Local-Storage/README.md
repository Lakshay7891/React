
#  React Local Storage

---

## Table of Contents

- [ Introduction]
- [1. setItem()]
- [2. getItem()]
- [3. removeItem()]
- [4. clear()]
- [ Complete Example]

---

## Introduction

Local Storage is a browser feature/storage that allows JavaScript to store data as key-value pairs. The data normally remains available even after refreshing or reopening the browser.

| Method | Description |
|---|---|
| `setItem()` | Stores data |
| `getItem()` | Retrieves stored data |
| `removeItem()` | Removes a specific item |
| `clear()` | Removes all local storage items for the current origin |

---

##  1. setItem()

The `setItem()` method stores data in Local Storage.

**Syntax:**
```javascript
localStorage.setItem("key", "value");
```

**Example:**
```javascript
localStorage.setItem("username", "Lakshay");
```

**Output:** Stores `"Lakshay"` with the key `"username"`.

---

##  2. getItem()

The `getItem()` method retrieves data using its key.

**Syntax:**
```javascript
localStorage.getItem("key");
```

**Example:**
```javascript
const username = localStorage.getItem("username");

console.log(username);
```

**Output:**
```text
Lakshay
```

If the key does not exist, `getItem()` returns `null`.

---

##  3. removeItem()

The `removeItem()` method deletes a specific item from Local Storage.

**Syntax:**
```javascript
localStorage.removeItem("key");
```

**Example:**
```javascript
localStorage.removeItem("username");
```

**Result:** The item with the key `"username"` is deleted.

---

##  4. clear()

The `clear()` method removes all Local Storage entries for the current origin.

**Syntax:**
```javascript
localStorage.clear();
```

**Example:**
```javascript
localStorage.setItem("username", "Lakshay");
localStorage.setItem("language", "JavaScript");

localStorage.clear();
```

**Result:** All Local Storage entries for the current origin are removed.

 Use `clear()` carefully because it also removes entries created by other parts of your application on the same origin.

---

## 💻 Complete Example

```javascript
// 1. Store data
localStorage.setItem("username", "Lakshay");

// 2. Retrieve data
console.log(localStorage.getItem("username"));

// 3. Remove a specific item
localStorage.removeItem("username");

// 4. Clear all local storage entries
localStorage.clear();
```

---

##  Author

**Lakshay Khanna**

Aspiring Full Stack Developer | JavaScript | React | Next.js

---

