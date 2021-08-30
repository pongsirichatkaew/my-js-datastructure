// IN JS hashTable = js object
// Set = only keys are store
// Map = order js object

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // _ stands for private properties you should not access to that even if you can, it's common standard
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      // To prevent collision on hash table
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    // O(1)
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket.length) {
      for (let index = 0; index < currentBucket.length; index++) {
        if (currentBucket[index][0] === key) {
          return currentBucket[index][1];
        }
      }
    }
    // No colision it's O(1)
    // If it's colision it's O(n)
    return undefined;
  }

  // Keys() with no collision
  // keys() {
  //   const keysArray = [];
  //   console.log('length', this.data.length);
  //   console.log('data', this.data);
  //   for (let index = 0; index < this.data.length; index++) {
  //     console.log(this.data[index]);
  //     if (this.data[index]) {
  //       keysArray.push(this.data[index][0][0]);
  //     }
  //   }
  //   return keysArray;
  // }

  // Keys() with prevent Collision
  keys() {
    if (!this.data.length) {
      return undefined;
    }
    let result = [];
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0]);
          }
        } else {
          result.push(this.data[i][0]);
        }
      }
    }
    return result;
  }
}

const myHashTable = new HashTable(2);
// myHashTable._hash('grapes');
myHashTable.set('grapes', 10000);
console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 9);
console.log(myHashTable.get('apples'));
console.log(myHashTable.keys());

// PROS
// Fast lookups*
// Fast inserts
// Flexible Keys

// Cons
// Unordered
// Slow key iteration
