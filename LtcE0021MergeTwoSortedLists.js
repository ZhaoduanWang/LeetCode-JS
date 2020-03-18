class ListNode {
    constructor(val, next){
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }
    unshift(val){
        const newHead = new ListNode(val, this.head);
        this.length += 1;
        this.head = newHead;
    }
    output(){
        let cur = this.head;
        while(cur) {
            console.log(cur.val);
            cur = cur.next;
        }
    }
}

var mergeTwoLists = function(l1,l2) {
    let resNode = new ListNode();
    let curNode = resNode;

    while(l1&&l2){
        if (l1.val<l2.val){
            curNode.next = l1;
            l1 = l1.next;
        }else{
            curNode.next = l2;
            l2 = l2.next;
        }
        curNode = curNode.next;
    }

    while(l1){
        curNode.next = l1;
        l1 = l1.next;
    }
    while(l2){
        curNode.next = l2;
        l2 = l2.next;
    }
    return resNode.next;
}

linkedList1 = new LinkedList();
linkedList1.unshift(4);
linkedList1.unshift(2);
linkedList1.unshift(1);
linkedList2 = new LinkedList();
linkedList2.unshift(4);
linkedList2.unshift(3);
linkedList2.unshift(1);

//linkedList1.output();
//linkedList2.output();

let result = mergeTwoLists(linkedList1.head, linkedList2.head);
while(result){
    console.log(`${result.val}->`);
    //serial.println(result.val + '->');
    result = result.next;
}

