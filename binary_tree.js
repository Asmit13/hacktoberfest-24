class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertRecursive(this.root, newNode);
    }
  }

  insertRecursive(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertRecursive(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertRecursive(node.right, newNode);
      }
    }
  }

  search(data) {
    return this.searchRecursive(this.root, data);
  }

  searchRecursive(node, data) {
    if (node === null) {
      return false;
    }

    if (node.data === data) {
      return true;
    } else if (data < node.data) {
      return this.searchRecursive(node.left, data);
    } else {
      return this.searchRecursive(node.right, data);
    }
  }

  delete(data) {
    this.root = this.deleteRecursive(this.root, data);
  }

  deleteRecursive(node, data) {
    if (node === null) {
      return node;
    }

    if (data < node.data) {
      node.left = this.deleteRecursive(node.left, data);
    } else if (data > node.data) {
      node.right = this.deleteRecursive(node.right, data);
    } else {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      node.data = this.minValue(node.right);
      node.right = this.deleteRecursive(node.right, node.data);
    }

    return node;
  }

  minValue(node) {
    if (node.left === null) {
      return node.data;
    } else {
      return this.minValue(node.left);
    }
  }

  inorderTraversal(node) {
    if (node === null) {
      return;
    }

    this.inorderTraversal(node.left);
    console.log(node.data);
    this.inorderTraversal(node.right);
  }

  preorderTraversal(node) {
    if (node === null) {
      return;
    }

    console.log(node.data);
    this.preorderTraversal(node.left);
    this.preorderTraversal(node.right);
  }

  postorderTraversal(node) {
    if (node === null) {
      return;
    }

    this.postorderTraversal(node.left);
    this.postorderTraversal(node.right);
    console.log(node.data);
  }
}

// Example usage
let bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log("Inorder Traversal:");
bst.inorderTraversal(bst.root);

console.log("Preorder Traversal:");
bst.preorderTraversal(bst.root);

console.log("Postorder Traversal:");
bst.postorderTraversal(bst.root);

console.log("Searching for 70:", bst.search(70));
console.log("Searching for 100:", bst.search(100));

bst.delete(30);
console.log("After deleting 30:");
bst.inorderTraversal(bst.root);
