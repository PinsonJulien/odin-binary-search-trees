import Node from "../nodes/node";

export default class Tree {
  public root: Node = null;

  constructor(arr: Array<any> = []) {
    if (!arr.length) return;

    // Sort and remove duplicates
    const sorted = [
      ...new Set(
        arr.sort((a, b) => a - b)
      )
    ];

    this.root = this.buildTree(sorted);
  }

  private buildTree(arr: Array<any> = []) : Node|null {
    if (!arr.length) return null;

    const mid = Math.floor(arr.length / 2);
    return new Node(
      arr[mid],
      this.buildTree(arr.slice(0, mid)),
      this.buildTree(arr.slice(mid + 1))
    );
  }

  public insert(data: any) : void {
    if (!this.root) {
      this.root = new Node(data);
      return;
    }

    this.recursiveInsert(data, this.root);
  }

  private recursiveInsert(data: any, node: Node): void {
    if (data < node.data) {
      if (!node.left) 
        node.left = new Node(data);
      else 
        this.recursiveInsert(data, node.left);
    }

    else {
      if (!node.right) 
        node.right = new Node(data);
      else 
        this.recursiveInsert(data, node.right);
    }
  }

  public delete(data: any) : boolean {
    if (!this.root) return false;

    let current = this.root;
    let parent: Node|null = null;
    let isLeftChild = false;
  
    // Find the node to be deleted
    while (current && current.data !== data) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        isLeftChild = true;
      } else {
        current = current.right;
        isLeftChild = false;
      }
    }
  
    // If the node is not found, return false
    if (!current) return false;

    let replacementNode = null;
  
    // Case 1: The node to be deleted has no children
    if (!current.left && !current.right)
      replacementNode = null;

    // Case 2: The node to be deleted has only one child
    else if (!current.left || !current.right)
      replacementNode = current.left || current.right;

    // Case 3: The node to be deleted has two children
    else {
      let successorParent = current;
      let successor = current.right;
  
      while (successor.left) {
        successorParent = successor;
        successor = successor.left;
      }
  
      if (successor !== current.right) {
        successorParent.left = successor.right;
        successor.right = current.right;
      }
  
      successor.left = current.left;

      replacementNode = successor;
    }

    if (current === this.root)
      this.root = replacementNode;
    else if (isLeftChild)
      parent.left = replacementNode;
    else
      parent.right = replacementNode;

    return true;
  }

  public find(value: any) : Node | null {
    if (!this.root) return null;

    let current = this.root;
    while (current) {
      if (value === current.data)
        return current;

      current = (value < current.data) 
        ? current.left 
        : current.right;
    }
  
    return null;
  }

  public levelOrder(fct?: Function): Array<any> {
    if (!this.root)
      return [];

    const queue: Node[] = [ this.root ];
    const values: Array<any> = [];

    while (queue.length) {
      const node = queue.shift();
      values.push(node.data);

      if (node.left)
        queue.push(node.left);

      if (node.right)
        queue.push(node.right);

      if (fct)
        fct(node);
    }

    return values;
  }

  public inorder(fct?: Function): Array<any> | void {
    const result = [];
    const traverse = (node: Node) => {
      if (!node) return;
      traverse(node.left);

      if (fct) fct(node);
      else result.push(node.data);

      traverse(node.right);
    };

    traverse(this.root);

    if (!fct)
      return result;
  }

  public preorder(fct?: Function): Array<any> | void {
    const result = [];

    const traverse = (node) => {
      if (!node) return;

      if (fct) fct(node);
      else result.push(node.data);

      traverse(node.left);
      traverse(node.right);
    };
  
    traverse(this.root);

    if (!fct) 
      return result;
  }

  public postorder(fct?: Function): Array<any> {
    return [];
  }

  public height(node: Node): number {
    return 0;
  }

  public depth(node: Node): number {
    return 0;
  }

  public isBalanced(): boolean {
    return true;
  }

  public rebalance(): void {}

  // Copied from the assignment, with added types.
  public prettyPrint(node: Node, prefix = '', isLeft = true) {
    if (node.right !== null)
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│ ' : ' '}`, false);

    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    
    if (node.left !== null)
      this.prettyPrint(node.left, `${prefix}${isLeft ? ' ' : '│ '}`, true);     
  }
}