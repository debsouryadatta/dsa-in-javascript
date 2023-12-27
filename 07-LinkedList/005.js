// Without using new Node
let merge = (list1, list2)=> {
    if(list1.next == null){
        list1.next = list2;
        return list1;
    }
    let curr1=list1.next, curr2 = list2, temp=list1;
    while(curr1 && curr2){
        if(curr1.value <= curr2.value){
            temp.next = curr1;
            temp = curr1;
            curr1 = curr1.next;
            if(curr1 == null){
                temp.next = curr2;
                break;
            }
        } else {
            temp.next = curr2;
            temp = curr2;
            curr2 = curr2.next;
            if(curr2 == null){
                temp.next = curr1;
                break;
            }
        }
    }
    return list1;
}
var mergeTwoLists = function(list1, list2) {
    if(list1 == null && list2) return list2;
    if(list2 == null && list1) return list1;
    if(list1 == null && list2 == null) return null;

    if(list1.value < list2.value){
        return merge(list1, list2);
    } else {
        return merge(list2, list1);
    }
};


// Using new Node
// var mergeTwoLists = function(list1, list2) {
//     const head = new ListNode(Infinity);
//     let curr = head;

//     while(list1 && list2){
//         if(list1.val < list2.val){
//             curr.next = list1;
//             list1 = list1.next;
//         } else {
//             curr.next = list2;
//             list2 = list2.next;
//         }
//         curr = curr.next;
//     }
//     if(list1 == null) curr.next = list2;
//     else curr.next = list1;

//     return head.next;
// };