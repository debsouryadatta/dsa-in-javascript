/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    nums = nums.sort((a,b)=> a-b);
    let start = 0, end = nums.length-1;
    while(start<=end){
        let mid = Math.round((start+end)/2);
        if(nums[mid]<0){
            start = mid+1;
        } else {
            end = mid-1;
        }
    }
    // console.log(start);
    let neg = start;
    while(nums[start] == 0){
        start = start+1;
    }
    let pos = nums.length - start;
    return Math.max(neg,pos);
};