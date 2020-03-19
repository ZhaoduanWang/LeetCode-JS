//         3
//      9      20
//    4   6  15   7
//[ [3],[9,20],[4,6,15,7] ]

class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }    
}

let outputTreeArray;
var outputTree = function (root){
    if (root!=null) outputTreeArray.push(root.val);

    if (root.left!=null)
        outputTree(root.left);
    if (root.right!=null)
        outputTree(root.right);
}

let inputTree = new Node(3);
inputTree.left = new Node(9);
inputTree.right = new Node(20);
inputTree.left.left = new Node(4);
inputTree.left.right = new Node(6);
inputTree.right.left = new Node(15);
inputTree.right.right = new Node(7);

outputTreeArray = []
outputTree(inputTree);
console.log(outputTreeArray);

//https://repl.it/@khancode/102-Binary-Tree-Level-Order-Traversal
var levelOrder = function(root){
    if (root===null) return;

    const queue = [];
    const level = [];
    queue.push(root);
    level.push(0);

    while (queue.length>0){
        let currNode = queue.shift();
        let depth = level.shift();

        process.stdout.write(`${depth}:${currNode.val} `);
        if (currNode.left!=null) { queue.push(currNode.left); level.push(depth+1); }
        if (currNode.right!=null) { queue.push(currNode.right); level.push(depth+1); }
    }
}

levelOrder(inputTree);