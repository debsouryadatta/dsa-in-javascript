/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums = nums.sort((a,b)=> a-b);
    let start = 0, end = nums.length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(mid == nums[mid]){
            start = mid+1;
        } else {
            end = mid-1;
        }
    }
    return start;
};