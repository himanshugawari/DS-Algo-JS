// Perfectly balanced binary tree
// no. of nodes at levels
// level 0: 2^0 = 1;
// level 1: 2^1 = 2;
// level 2: 2^2 = 4;
// level 3: 2^3 = 8;

// Node. of nodes in a tree=2^height-1
// log nodes=height

// log 100=2
// 10^2=100

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
    } else {
      let curentNode = this.root;
      while (true) {
        if (value < curentNode.value) {
          //Left
          if (!curentNode.left) {
            curentNode.left = node;
            return this;
          }
          curentNode = curentNode.left;
        } else {
          //Right
          if (!curentNode.right) {
            curentNode.right = node;
            return this;
          }
          curentNode = curentNode.right;
        }
      }
    }
    return this;
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        //found
        return currentNode;
      } else if (value < currentNode.value) {
        //left
        currentNode = currentNode.left;
      } else {
        //right
        currentNode = currentNode.left;
      }
    }
    return false;
    // while (true) {
    //   if (currentNode.value === value) {
    //     //found
    //     return currentNode;
    //   } else if (value < currentNode.value) {
    //     //left
    //     if (currentNode.left) {
    //       currentNode = currentNode.left;
    //     } else {
    //       return false;
    //     }
    //   } else {
    //     //right
    //     if (currentNode.right) {
    //       currentNode = currentNode.left;
    //     } else {
    //       return false;
    //     }
    //   }
    // }
  }
}

const myBst = new BinarySearchTree();
console.log(myBst.lookup(0));
console.log(myBst.insert(9));
console.log(myBst.insert(4));
console.log(myBst.insert(6));
console.log(myBst.insert(20));
console.log(myBst.insert(170));
console.log(myBst.insert(15));
console.log(myBst.insert(1));
console.log(myBst.lookup(4));
console.log(myBst.lookup(9));
console.log(myBst.lookup(0));

//         9
//     4         20
// 1      6  15   170
