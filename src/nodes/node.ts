export default class Node {
  public data: any;
  public left: Node|null;
  public right: Node|null;

  constructor(data: any, left: Node|null = null, right: Node|null = null) {
    this.data = data;
    
    this.left = left;
    this.right = right;
  }
}