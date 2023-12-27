var middleNode = function(head) {
    if(head == null || head.next == null){
        return head;
    }
    let fast = head;
    let slow = head;

    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};