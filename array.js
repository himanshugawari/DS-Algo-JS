class MyArrays {
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
    const removedItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return removedItem;
  }

  delete(index) {
    const deletedItem = this.data[index];
    this.leftShiftItems(index);
  }

  leftShiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  add(index, item) {
    this.rightShiftItems(index);
    this.data[index] = item;
    return this.length;
  }

  rightShiftItems(index) {
    this.length++;
    for (let i = this.length - 1; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
  }
}

const a = new MyArrays();
console.log(a);
a.push("hello");
console.log(a);
a.push("there");
a.push(",");
a.push("how");
a.push("are");
a.push("you");
console.log(a);

a.pop();
console.log(a);

console.log("Element at position 2 is ", a.get(2));

a.delete(2);
console.log(a);

a.add(1, ",");
console.log(a);

a.delete(2);
console.log(a);

a.add(4, "you");
console.log(a);
