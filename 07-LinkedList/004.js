var reverseList = function(head) {
    if(head == null || head.next == null){
        return head;
    }
    let prev=null,curr=head,temp;
    while(curr){
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
};