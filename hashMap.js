export default class hashMap {
  #load_factor;
  #capacity;

  constructor(load_factor, capacity) {
    this.#load_factor = load_factor;
    this.#capacity = capacity;
  }

  hash(key) {
    let hashCode = 0;

    const prime = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (prime * hashCode + key.charCodeAt(i)) % this.#capacity;
    }

    return hashCode;
  }
}
