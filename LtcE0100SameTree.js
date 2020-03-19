//       1        1
//     2   3    2    3

//       1        1
//     2             2

//       1        1
//     2   1    1    2

class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }    
}

let input1Tree1 = new Node(1);
input1Tree1.left = new Node(2);
input1Tree1.right = new Node(3);
let input1Tree2 = new Node(1);
input1Tree2.left = new Node(2);
input1Tree2.right = new Node(3);

let input2Tree1 = new Node(1);
input2Tree1.left = new Node(2);
let input2Tree2 = new Node(1);
input2Tree2.right = new Node(2);

let input3Tree1 = new Node(1);
input3Tree1.left = new Node(2);
input3Tree1.right = new Node(1);
let input3Tree2 = new Node(1);
input3Tree2.left = new Node(1);
input3Tree2.right = new Node(3);

var isSameTree = function(p, q){
    if (p===null || q===null)
        return p===q;
    if (p.val!=q.val)
        return false;
    
    return( isSameTree(p.left, q.left) && isSameTree(p.right, q.right) );
}

console.log(isSameTree(input1Tree1, input1Tree2));
console.log(isSameTree(input2Tree1, input2Tree2));
console.log(isSameTree(input3Tree1, input3Tree2));