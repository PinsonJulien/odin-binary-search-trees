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

  public insert(value: any) : void {

  }

  public delete(value: any) : void {

  }

  public find(value: any) : Node {
    return;
  }

  public levelOrder(fct: Function): Array<any> {
    return []
  }

  public inorder(fct: Function): Array<any> {
    return [];
  }

  public preorder(fct: Function): Array<any> {
    return [];
  }

  public postorder(fct: Function): Array<any> {
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