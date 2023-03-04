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

    test("delete node with no children", () => {
      const tree = new Tree([2, 4, 6]);
      tree.delete(6);
      /**
      *        4
      *      /  
      *     2     
      */
      expect(tree.root.right).toBeNull();
    });

    test("delete node with one child", () => {
      const tree = new Tree([1, 2, 4, 6]);
      tree.delete(2);
      /**
      *        4
      *      /   \
      *     1     6
      */     
      expect(tree.root.left?.data).toEqual(1);
      expect(tree.root.left?.left).toBeNull();
      expect(tree.root.left?.right).toBeNull();
    });

    test("delete node with two children - case 1", () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
      tree.delete(2);
      /*
              4
            /   \
           3     6
          /     / \
         1     5   7
      */
      expect(tree.root.left?.data).toBe(3);
      expect(tree.root.left?.left?.data).toBe(1);
    });

    test("delete node with two children - case 2", () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
      tree.delete(4);
      /*
              5
            /   \
           2     6
          / \     \
         1   3     7
      */
      expect(tree.root.data).toBe(5);
      expect(tree.root.right?.left).toBeNull();
      expect(tree.root.right?.right?.data).toEqual(7);
      expect(tree.root.left?.data).toEqual(2);
      expect(tree.root.left?.left?.data).toEqual(1);
      expect(tree.root.left?.right?.data).toEqual(3);
    });

  });

  describe('find', () => {
    test('Find method should return the node with the given value', () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8]);
      const node = tree.find(6);
      expect(node).not.toBeNull();
      expect(node?.data).toEqual(6);
    });

    test('Find method should return null when given value is not in the tree', () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8]);
      let node = tree.find(9);
      expect(node).toBeNull();

      node = tree.find(0);
      expect(node).toBeNull();
    });

    test('Find method should return null when the tree is empty', () => {
      const tree = new Tree();
      const node = tree.find(6);
      expect(node).toBeNull();
    });

    test('Find method should return the root node when the value is the root value', () => {
      const tree = new Tree([2, 4, 6]);
      const node = tree.find(4);
      expect(node).not.toBeNull();
      expect(node?.data).toEqual(4);
    });

  });

  describe("levelOrder", () => {
    it("should return an array of node values in level order", () => {
      const tree = new Tree([5, 3, 7, 2, 4, 6, 8]);
      
      const values = tree.levelOrder();
      expect(values).toEqual([5, 3, 7, 2, 4, 6, 8]);
    });
  
    it("should apply the provided function to each node in level order", () => {
      const tree = new Tree([5, 3, 7, 2, 4, 6, 8]);

      const values: number[] = [];
      const fn = (node: Node) => values.push(node.data);
  
      tree.levelOrder(fn);
  
      expect(values).toEqual([5, 3, 7, 2, 4, 6, 8]);
    });
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