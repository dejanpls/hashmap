export default class hashMap {
  #load_factor;
  #capacity;
  #buckets;

  constructor(load_factor, capacity) {
    this.#load_factor = load_factor;
    this.#capacity = capacity;
    this.#buckets = Array.from({ length: this.#capacity }, () => []);
  }

  hash(key) {
    let hashCode = 0;

    const prime = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (prime * hashCode + key.charCodeAt(i)) % this.#capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.#buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [storedKey, storedValue] = bucket[i];

      if (storedKey === key) {
        bucket[i][1] = value;
        return;
      }
    }

    bucket.push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.#buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [storedKey, storedValue] = bucket[i];

      if (storedKey === key) return bucket[i][1];
    }

    return null;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.#buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [storedKey, storedValue] = bucket[i];

      if (storedKey === key) return true;
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.#buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [storedKey, storedValue] = bucket[i];

      if (storedKey === key) {
        bucket.pop(index);
        return true;
      }
    }

    return false;
  }
}
