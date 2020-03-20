//         3                    
//      4      5                4
//    1   2                   1    2
// return true

//         3
//      4      5                4
//    1    2                  1    2
//        0
// return false

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

let s1 = new Node(3);
s1.left = new Node(4);
s1.right = new Node(5);
s1.left.left = new Node(1);
s1.left.right = new Node(2);
outputTreeArray = []
outputTree(s1);
console.log(outputTreeArray);

let t1 = new Node(4)
t1.left = new Node(1);
t1.right = new Node(2);
outputTreeArray = []
outputTree(t1);
console.log(outputTreeArray);

var isSubtree = function(s, t){

}