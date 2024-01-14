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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    const dfs = (root, sum)=> {
        if(root == null) return false;

        sum+=root.val;
        if(root.left == null && root.right == null){
            return sum == targetSum;
        }
        const left = dfs(root.left, sum);
        const right = dfs(root.right, sum);
        console.log(left, right);
        return (left || right);
    }
    return dfs(root,0);
};