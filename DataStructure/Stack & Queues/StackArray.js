class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    const lastestArr = this.peek();
    this.array.pop();
    return lastestArr;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();
console.log(myStack.push('Discord'));
console.log(myStack.push('Udemy'));
console.log(myStack.push('google'));
console.log('peek', myStack.peek());
console.log('pop', myStack.pop());
console.log('peek', myStack.peek());
