/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let n = nums.length;
    let ind=-1;
    for(let i=n-2; i>=0; i--){
        if(nums[i]<nums[i+1]){
            ind=i;
            break;
        }
    }
    if(ind==-1){
        nums.reverse();
        return nums;
    }
    for(let i=n-1; i>ind; i--){
        if(nums[i]>nums[ind]){
            [nums[i], nums[ind]] = [nums[ind], nums[i]];
            break;
        }
    }
    nums.splice(ind + 1, n - ind - 1, ...nums.slice(ind + 1).reverse());
    return nums;
};
