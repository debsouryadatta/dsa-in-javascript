var oddEvenList = function(head) {

    let odd = head;
    let even = head.next;
    let evenHead = even;
    while(even!=null && even.next!=null){
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};

console.log(oddEvenList([1,2,3,4,5]));