import Node from "../nodes/node";
import Tree from "./tree";

describe('Tree', () => {
  let tree: Tree;

  beforeEach(() => {});

  describe('constructor', () => {
    test('the root property of the tree object is a Node object', () => {
      tree = new Tree([1, 2]);
      expect(tree.root).toBeInstanceOf(Node);
    });

    test('the root tree is properly balanced and has been sorted and duplicates have been removed.', () => {
      tree = new Tree([14, 8, 2, 14, 12, 4, 6, 10, 2])
      // the tree will not contain the 4000 and 4 values twice.
      // the tree will be sorted.

    /** The tree will look like so : 
     * 
     *                8
     *        4               12
     *    2       6       10       14
     */

      const root = tree.root;
      const {left, right} = root;

      // root value
      expect(root.data).toEqual(8);
      // root left
      expect(left.data).toEqual(4);
      // root right
      expect(right.data).toEqual(12);

      // root left left
      expect(left.left.data).toEqual(2);
      // root left right
      expect(left.right.data).toEqual(6);

      // root right left
      expect(right.left.data).toEqual(10);
      // root right right
      expect(right.right.data).toEqual(14);
    });

  });

  describe('insert', () => { 
    test('should insert a value into an empty tree', () => {
      const tree = new Tree();
      tree.insert(5);

      const { root }  = tree;
      expect(root.data).toEqual(5);
      expect(root.left).toBeNull();
      expect(root.right).toBeNull();
    });

    test("should insert a smaller value to the left", () => {
      const tree = new Tree([5]);
      tree.insert(2);

      const { root } = tree;
      expect(root.left?.data).toEqual(2);
    });

    test("should insert a larger value to the right", () => {
      const tree = new Tree([5]);
      tree.insert(10);

      const { root } = tree;
      expect(root.right?.data).toEqual(10);
    });

    test("should insert a value at the correct position in a larger tree", () => {
      const tree = new Tree([5, 2, 7, 1, 3, 6, 8]);
      tree.insert(4);

      expect(tree.root.left?.right?.right?.data).toEqual(4);
    });

  });

  describe('delete', () => {

  });

  describe('find', () => {

  });

  describe('levelOrder', () => {

  });

  describe('inorder', () => {

  });

  describe('preorder', () => {

  });

  describe('postorder', () => {

  });

  describe('height', () => {

  });

  describe('depth', () => {

  });

  describe('isBalanced', () => {

  });

  describe('rebalance', () => {

  });

});