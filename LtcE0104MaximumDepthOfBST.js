//       3
//     9   20
//       15   7

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }    
}

let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

var maxDepth = function(root){
    if (root===null) return 0;

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    return Math.max(left, right) + 1;
}


let depth = maxDepth(root);
process.stdout.write(`depth=${depth}\n`);