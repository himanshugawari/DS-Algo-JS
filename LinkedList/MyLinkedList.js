// 10-->5-->16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LikedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  prepend(value) {
    // const node = {
    //   value: value,
    //   next: null,
    // };
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  append(value) {
    // const node = {
    //   value: value,
    //   next: null,
    // };
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  insert(index, value) {
    //check params
    if (index >= this.length) {
      return this.append(value);
    }
    if (index <= 1) {
      return this.prepend(value);
    }
    // const node = {
    //   value: value,
    //   next: null,
    // };
    const node = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    node.next = leader.next;
    leader.next = node;
    this.length++;
  }

  traverseToIndex(index) {
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  removeFirst() {
    const currentNode = this.head;
    this.head = this.head.next;
    this.length--;
  }

  removeLast() {
    const leader = this.traverseToIndex(this.length - 2);
    leader.next = null;
    this.tail = leader;
    this.length--;
  }

  remove(index) {
    if (index == 0) {
      return this.removeFirst();
    }
    if (index == this.length - 1) {
      return this.removeLast();
    }
    const leader = this.traverseToIndex(index - 1);
    leader.next = leader.next.next;
    this.length--;
  }

  printList() {
    const listValues = [];
    let temp = this.head;
    while (temp !== null) {
      listValues.push(temp.value);
      temp = temp.next;
    }
    console.log(listValues);
  }
}

const myLinkedList = new LikedList(10);
console.log(myLinkedList);
myLinkedList.prepend(2);
console.log(myLinkedList);
myLinkedList.append(16);
console.log(myLinkedList);
myLinkedList.append(50);
console.log(myLinkedList);
myLinkedList.prepend(1);
console.log(myLinkedList);
myLinkedList.insert(2, 99);
console.log(myLinkedList);
myLinkedList.insert(20, 88);
console.log(myLinkedList);
myLinkedList.printList();
myLinkedList.removeFirst();
console.log(myLinkedList);
myLinkedList.printList();
myLinkedList.removeLast();
console.log(myLinkedList);
myLinkedList.printList();
myLinkedList.remove(2);
console.log(myLinkedList);
myLinkedList.printList();
myLinkedList.remove(0);
console.log(myLinkedList);
myLinkedList.printList();
myLinkedList.remove(2);
console.log(myLinkedList);
myLinkedList.printList();
