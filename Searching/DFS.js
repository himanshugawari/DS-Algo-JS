class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BreadthFirstSearch {
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

  //         9
  //     4         20
  // 1      6  15   170

  DFSInorder() {
    return traverseInOrder(this.root, []);
  }
  DFSPreorder() {
    return traversePreOrder(this.root, []);
  }
  DFSPostOrder() {
    return traversePostOrder(this.root, []);
  }
}

function traverseInOrder(node, list) {
  console.log(node.value);
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}
function traversePreOrder(node, list) {
  console.log(node.value);
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}
function traversePostOrder(node, list) {
  console.log(node.value);
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}

const myDfs = new BreadthFirstSearch();
console.log(myDfs.lookup(0));
console.log(myDfs.insert(9));
console.log(myDfs.insert(4));
console.log(myDfs.insert(6));
console.log(myDfs.insert(20));
console.log(myDfs.insert(170));
console.log(myDfs.insert(15));
console.log(myDfs.insert(1));
console.log(myDfs.DFSInorder());
console.log(myDfs.DFSPreorder());
console.log(myDfs.DFSPostOrder());

//         9
//     4         20
// 1      6  15   170

// BFS [9,4,20,1,6,15,170]

// DFS Inorder[1,4,6,9,15,20,170]
// DFS Preorder[9,4,1,6,20,15,170]
// DFS Postorder[1,6,4,15,170,20,9]
