class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // if starting with empty tree, make new val the root
    if (!this.root){
      this.root = new Node(val)
      return this
    }

    // else, start at root
    let currentNode = this.root
    while (currentNode){
      if (val < currentNode.val){
        // check if there is a node to the left of currentNode
        // if not, assign it to the left
        if (!currentNode.left){
          currentNode.left = new Node(val)
          return this
        }
        currentNode = currentNode.left
      } else {
        // check if there is a node to the right of currentNode
        // if not, assign it to the right
        if (!currentNode.right){
          currentNode.right = new Node(val)
          return this
        } 
        currentNode = currentNode.right
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (!this.root) {
      this.root = new Node(val)
      return this
    }

    const searchNodes = (node) => {
      if (val < node.val) {
        if (!node.left){
          node.left = new Node(val)
          return this
        }
        searchNodes(node.left)
      } else {
        if (!node.right){
          node.right = new Node(val)
          return this
        }
        searchNodes(node.right)
      }
    }
    return searchNodes(this.root)
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return undefined

    let currentNode = this.root
    while (currentNode){
      if (currentNode.val === val) return currentNode
      if (currentNode.val > val) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    const findVal = (node) => {
      if (!node) return undefined
      if (node.val === val) return node
      return node.val > val ? findVal(node.left) : findVal(node.right) // why does this require return?
    }
    return findVal(this.root)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let nodesList = []
    const traverse = (node) => {
      nodesList.push(node.val)
      if (node.left) traverse(node.left)
      if (node.right)traverse(node.right)
    }
  traverse(this.root)
  return nodesList
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let nodesList = []
    const traverse = (node) => {
      if (node.left) traverse(node.left)
      nodesList.push(node.val)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return nodesList
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let nodesList = []
    const traverse = (node) => {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      nodesList.push(node.val)
    }
    traverse(this.root)
    return nodesList
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let toVisitQueue = [this.root]
    let nodesList = []
    
    while (toVisitQueue.length){
      let current = toVisitQueue.shift()
      nodesList.push(current.val)
      if (current.left) toVisitQueue.push(current.left)
      if (current.right) toVisitQueue.push(current.right)
    }
    return nodesList
  }


  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
