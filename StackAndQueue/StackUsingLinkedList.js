class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.top = node;
      this.bottom = node;
    } else {
      // this.top.next = node;
      // this.top = node;
      const holdingPointer = this.top;
      this.top = node;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack Empty";
    }
    console.log(this.top.value);
    return this.top;
  }

  // pop() {
  //   if(!this.top){
  //     return null;
  //   }
  //   let currentNode = this.bottom;
  //   while (currentNode.next !== this.top) {
  //     currentNode = currentNode.next;
  //   }
  //   let temp = this.top;
  //   delete this.top;
  //   this.top = currentNode;
  //   this.top.next = null;
  //   this.length--;
  //   return temp;
  // }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }

  printStack() {
    const stackElements = [];
    let currentNode = this.bottom;
    while (currentNode !== null) {
      stackElements.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(stackElements);
  }
}

const myStack = new Stack();
console.log(myStack.isEmpty());
console.log(myStack.peek());
console.log(myStack.push("google"));
myStack.printStack();
console.log(myStack.push("udemy"));
myStack.printStack();
console.log(myStack.push("discord"));
myStack.printStack();
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
myStack.printStack();

// console.log(myStack.isEmpty());
// myStack.push(9);
// myStack.push(5);
// console.log(myStack.isEmpty());
// myStack.push(10);
// myStack.push(8);
// myStack.push(0);
// myStack.printStack();
// myStack.peek();
// myStack.printStack();
// console.log(myStack.pop());
// myStack.printStack();
// myStack.peek();
