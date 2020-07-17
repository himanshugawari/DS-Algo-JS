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
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  append(value) {
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

  //   reverse() {
  //     if (!this.head.next) {
  //       return this.head;
  //     }
  //     let first = this.head;
  //     console.log(first.value);
  //     this.tail = this.head;
  //     console.log(this.tail.value);
  //     let second = first.next;
  //     console.log(second.value);
  //     while (second) {
  //       const temp = second.next;
  //       console.log(temp);
  //       second.next = first;
  //       console.log(second.next.value);
  //       first = second;
  //       console.log(first.value);
  //       second = temp;
  //       console.log(second);
  //     }
  //     this.head.next = null;
  //     console.log(this.head.next);
  //     this.head = first;
  //     console.log(this.head.value);
  //   }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      //console.log(second);
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
}

const myLinkedList = new LikedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(2);
myLinkedList.remove(2);
myLinkedList.printList();
myLinkedList.reverse();
myLinkedList.printList();
