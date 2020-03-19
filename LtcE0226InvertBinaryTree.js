// Input:
//         4
//       2   7
//     1  3 6  9

// Output:
//         4
//       7   2
//     9  6 3  1

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

let inputTree = new Node(4);
inputTree.left = new Node(2);
inputTree.right = new Node(7);
inputTree.left.left = new Node(1);
inputTree.left.right = new Node(3);
inputTree.right.left = new Node(6);
inputTree.right.right = new Node(9);

outputTreeArray = []
outputTree(inputTree);
console.log(outputTreeArray);

var invertTree = function(root){
    if (root===null) return root;

    let l = invertTree(root.left);
    let r = invertTree(root.right);
    
    root.right = l;
    root.left = r;

    return root;
}

invertTree(inputTree);
outputTreeArray = [];
outputTree(inputTree);
console.log(outputTreeArray);