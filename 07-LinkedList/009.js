/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    let curr = head;
    let arr = [];
    while(curr){
        let temp = curr.next,flag = 0;
        while(temp){
            if(temp.val>curr.val){
                arr.push(temp.val);
                flag = 1;
                break;
            }
            temp = temp.next;
        }
        if(flag == 0) arr.push(0); 
        curr = curr.next;
    }
    return arr;
};