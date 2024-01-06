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
 * @return {number[]}
 */
let recur = (root,arr)=> {
    if(root == null) return;

    recur(root.left,arr);
    arr.push(root.val);
    recur(root.right,arr);
}

var inorderTraversal = function(root) {
    let arr = [];
    recur(root,arr);
    return arr;
};