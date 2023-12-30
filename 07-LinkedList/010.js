/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

var reverseBetween = function(head, left, right) {
    const dummy = new ListNode(0,head);
    let leftPrev=dummy, curr=head;
    // Phase1 -> Reach left position
    for(let i=1;i<=left-1;i++){
        leftPrev = curr;
        curr = curr.next;
    }

    // Phase2 -> Reverse from left to right
    let prev = null;
    for(let i=1;i<=right-left+1;i++){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // Phase3 -> Update Pointers
    leftPrev.next.next = curr;
    leftPrev.next = prev;
    return dummy.next;
};