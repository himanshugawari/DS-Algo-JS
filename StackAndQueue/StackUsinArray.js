class Stack {
  constructor(size) {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
    return this;
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  pop() {
    this.data.pop();
    return this;
  }
}

const myStack = new Stack();
console.log(myStack.peek());
console.log(myStack.push("google"));
console.log(myStack.push("udemy"));
console.log(myStack.push("discord"));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
