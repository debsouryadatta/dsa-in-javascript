/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root == null) return [];
    let queue = [];
    let resultArr = [];
    queue.push(root);
    while(queue.length>0){
        let arr = [];
        let length = queue.length;
        for(let i=1; i<=length; i++){
            let temp = queue.shift();
            console.log(temp.val);
            arr.push(temp.val);
            if(temp.left){
                queue.push(temp.left);
            }
            if(temp.right){
                queue.push(temp.right);
            }
        }
        resultArr.push(arr);
    }
    return resultArr;
};