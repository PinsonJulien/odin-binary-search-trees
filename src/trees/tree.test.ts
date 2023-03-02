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

    test('the root property of the tree object is the lowest value.', () => {
      tree = new Tree([4, 7, 4, 23, 8, 9, 1, 3, 5, 7, 9, 67, 6345, 324]);
      expect(tree.root.data).toEqual(1);
    });

    test('the root tree is properly balanced and has been sorted and duplicates have been removed.', () => {
      tree = new Tree([4000, 4, 6, 5, 4, 2, 1, 8, 4000])
      // the tree will not contain the 4000 and 4 values twice.
      // the tree will be sorted.

    /** The tree will look like so : 
     * 
     *                1
     *        2               4
     *    5       6       8       40000
     */

      const root = tree.root;
      const {left, right} = root;

      // root value
      expect(root.data).toEqual(1);
      // root left
      expect(left.data).toEqual(2);
      // root right
      expect(right.data).toEqual(4);

      // root left left
      expect(left.left.data).toEqual(5);
      // root left right
      expect(left.right.data).toEqual(6);
      
      // root right left
      expect(right.left.data).toEqual(8);
      // root right right
      expect(right.right.data).toEqual(4000);
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