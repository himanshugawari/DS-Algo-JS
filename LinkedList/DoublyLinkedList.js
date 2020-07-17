class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLikedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head.previous = node;
    this.head = node;
    this.length++;
    return this;
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    node.previous = this.tail;
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
    const node = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    node.previous = leader;
    node.next = leader.next;
    const temp = leader.next;
    leader.next = node;
    temp.previous = node;
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
    // const currentNode = this.head;
    this.head = this.head.next;
    this.head.previous = null;
    this.length--;
  }

  removeLast() {
    this.tail = this.tail.previous;
    this.tail.next = null;
    this.length--;
  }

  remove(index) {
    if (index == 0) {
      return this.removeFirst();
    }
    if (index == this.length - 1) {
      return this.removeLast();
    }
    const leader = this.traverseToIndex(index);
    console.log(leader);
    const todelete = leader.next;
    const follower = todelete.next;
    leader.next = todelete.next;
    follower.previous = todelete.previous;
    this.length--;
  }

  printListAscending() {
    const listValues = [];
    let temp = this.head;
    while (temp !== null) {
      listValues.push(temp.value);
      temp = temp.next;
    }
    console.log(listValues);
  }

  printListDescending() {
    const listValues = [];
    let temp = this.tail;
    while (temp !== null) {
      listValues.push(temp.value);
      temp = temp.previous;
    }
    console.log(listValues);
  }
}

const doublyLinkedList = new DoublyLikedList(10);
console.log(doublyLinkedList);
doublyLinkedList.prepend(2);
console.log(doublyLinkedList);
doublyLinkedList.append(16);
console.log(doublyLinkedList);
doublyLinkedList.append(50);
console.log(doublyLinkedList);
doublyLinkedList.prepend(1);
console.log(doublyLinkedList);
doublyLinkedList.printListAscending();
doublyLinkedList.printListDescending();
doublyLinkedList.insert(2, 99);
console.log(doublyLinkedList);
doublyLinkedList.insert(20, 88);
console.log(doublyLinkedList);
doublyLinkedList.printListAscending();
doublyLinkedList.printListDescending();
doublyLinkedList.removeFirst();
console.log(doublyLinkedList);
doublyLinkedList.printListAscending();
doublyLinkedList.printListDescending();
doublyLinkedList.removeLast();
console.log(doublyLinkedList);
doublyLinkedList.printListAscending();
doublyLinkedList.printListDescending();
doublyLinkedList.remove(2);
console.log(doublyLinkedList);
doublyLinkedList.printListAscending();
doublyLinkedList.printListDescending();
doublyLinkedList.remove(0);
console.log(doublyLinkedList);
doublyLinkedList.printListAscending();
doublyLinkedList.printListDescending();
doublyLinkedList.remove(2);
console.log(doublyLinkedList);
doublyLinkedList.printListAscending();
doublyLinkedList.printListDescending();
