/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let curr=headA,a=1,b=1;
    while(curr){
        a++;
        curr=curr.next;
    }
    curr=headB;
    while(curr){
        b++;
        curr=curr.next;
    }
    let diff = Math.abs(a-b);
    while(diff--){
        if(a>b){
            headA=headA.next;
        } else{
            headB=headB.next;
        }
    }
    while(headA && headB){
        if(headA===headB){
            return headA;
        }
        headA=headA.next;
        headB=headB.next;
    }
    return null;
};