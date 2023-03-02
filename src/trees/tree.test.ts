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

  test('insert', () => {

  });

  test('delete', () => {

  });

  test('find', () => {

  });

  test('levelOrder', () => {

  });

  test('inorder', () => {

  });

  test('preorder', () => {

  });

  test('postorder', () => {

  });

  test('height', () => {

  });

  test('depth', () => {

  });

  test('isBalanced', () => {

  });

  test('rebalance', () => {

  });

});