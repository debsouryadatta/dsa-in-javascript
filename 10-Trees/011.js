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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let total = 0;
    const dfs = (root, isLeft)=> {
        if(root === null) return;

        if(isLeft && !root.left && !root.right) total = total + root.val;
        dfs(root.left, true);
        dfs(root.right, false);

        return;
    }
    dfs(root, false);
    return total;
};