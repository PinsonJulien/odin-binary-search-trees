export default class Node {
  public data: any;
  public left: Node|null;
  public right: Node|null;

  constructor(data: any, left: Node|null = null, right: Node|null = null) {
    this.data = data;

    if (left) this.left = left;
    if (right) this.right = right;
  }
}