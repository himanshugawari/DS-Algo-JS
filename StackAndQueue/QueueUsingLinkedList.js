class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enque(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this.length;
  }

  dequeue() {
    const currentNode = this.head;
    this.head = this.head.next;
    this.head.previous = null;
    this.length--;
    return currentNode;
  }

  printQueue() {
    let queueItems = [];
    let first = this.head;
    while (first !== null) {
      queueItems.push(first.value);
      first = first.next;
    }
    console.log(queueItems);
  }
}

const myQueue = new Queue();
myQueue.enque(5);
myQueue.enque(4);
myQueue.enque(15);
myQueue.printQueue();
myQueue.dequeue();
myQueue.printQueue();
myQueue.dequeue();
myQueue.printQueue();
