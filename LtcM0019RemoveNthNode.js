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
            process.stdout.write(`${cur.val}`);
            cur = cur.next;
            if(cur!=null) 
                process.stdout.write(`->`);
            else
                process.stdout.write(`\n`);
        }
    }
}

var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let l = dummyHead;
    let r = dummyHead;

    for (let i=1; i<=n+1; i++){
        r = r.next;
    }
    while(r){
        l = l.next;
        r = r.next;
    }
    l.next = l.next.next;
    
    return dummyHead.next;
}

linkedList1 = new LinkedList();
linkedList1.unshift(5);
linkedList1.unshift(4);
linkedList1.unshift(3);
linkedList1.unshift(2);
linkedList1.unshift(1);

linkedList1.output();

let result = removeNthFromEnd(linkedList1.head, 2);
while(result){
    process.stdout.write(`${result.val}`);
    result = result.next;
    if(result!=null) 
        process.stdout.write(`->`);
    else
        process.stdout.write(`\n`);
}

