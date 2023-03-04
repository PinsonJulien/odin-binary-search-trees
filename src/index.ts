import Tree from "./trees/tree";

// function to generate an array of random numbers
function getRandomNumbersArray(length: number): number[] {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

// create a binary search tree from an array of random numbers
const randomNumArray = getRandomNumbersArray(10);
const tree = new Tree(randomNumArray);

// confirm that the tree is balanced
console.log("Is the tree balanced? ", tree.isBalanced());

// print out all elements in level, pre, post, and in order
console.log('Level order: ', tree.levelOrder());
console.log('Pre order: ', tree.preorder());
console.log('Post order: ', tree.postorder());
console.log('In order: ', tree.inorder());

// unbalance the tree by adding several numbers > 100
tree.insert(150);
tree.insert(200);
tree.insert(175);

// confirm that the tree is unbalanced
console.log("Is the tree unbalanced? ", tree.isBalanced());

// balance the tree by calling rebalance
tree.rebalance();

// confirm that the tree is balanced
console.log("Is the tree balanced after rebalancing? ", tree.isBalanced());

// print out all elements in level, pre, post, and in order
console.log('Level order: ', tree.levelOrder());
console.log('Pre order: ', tree.preorder());
console.log('Post order: ', tree.postorder());
console.log('In order: ', tree.inorder());