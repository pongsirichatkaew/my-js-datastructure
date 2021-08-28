class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    console.log(index);
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArr = new MyArray();
myArr.push(1);
myArr.push(2);
myArr.push('you');
myArr.push('hi');
myArr.pop();
myArr.delete(0);
console.log(myArr);
// console.log(myArr.length);

// Pros:
// Fast lookups
// Fast push/ pop
// Ordered

// Cons
// Slow inserts
// Slow deletes
// Fixed Size * if using static array
