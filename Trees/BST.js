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

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
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
console.log(myBst.remove(20));
console.log(myBst.lookup(9));

//         9
//     4         20
// 1      6  15   170
