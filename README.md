# Custom HashMap Implementation in JavaScript

This project is a **custom-built HashMap** (a key-value data structure) written from scratch in JavaScript. It includes core features like hashing, collision handling, dynamic resizing, and a clean, object-oriented structure — all built without relying on native `Map` or `Object` storage.

## Features

- Custom hash function
- Handles collisions using buckets (separate chaining)
- Dynamically resizes based on load factor
- Supports setting, getting, checking, and listing keys/values
- Fully encapsulated using private class fields

---

## Class Design

The main class is `HashMap`, which supports the following methods:

### Public Methods

| Method            | Description                            |
| ----------------- | -------------------------------------- |
| `set(key, value)` | Inserts or updates a key-value pair    |
| `get(key)`        | Retrieves a value by key               |
| `has(key)`        | Checks if a key exists                 |
| `length()`        | Returns total number of entries        |
| `clear()`         | Returns all entries from the array     |
| `remove(key)`     | Removes a key-value pair (optional)    |
| `entries()`       | Returns all `[key, value]` pairs       |
| `keys()`          | Returns all the keys in an array       |
| `values()`        | Returns all the values in an array     |
| `resize()`        | Double capacity when threshold reached |

## Example Usage

```js
const map = new HashMap(0.75, 4);

map.set("apple", 1);
map.set("banana", 2);
map.set("orange", 3);

console.log(map.get("banana")); // ➜ 2
console.log(map.has("orange")); // ➜ true
console.log(map.length()); // ➜ 3
```

---

## Building your own hashmap helps you learn:

- Hashing and collisions
- How dynamic resizing works
- Object-oriented design in JS
- How to build data structures from scratch

---

## Important to Note

- This is a learning project inspired by [The Odin Project](https://www.theodinproject.com/).
- Built with modern JavaScript (ES2022+), including private class fields (`#`).
- No external libraries or dependencies required.
