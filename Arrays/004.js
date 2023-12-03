/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let a=0;
    let b=0
    let c=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            a++;
        } else if(nums[i]===1){
            b++;
        } else if(nums[i]===2){
            c++;
        }
    }
  for (let i = 0; i < nums.length; i++) {
    i < a ? (nums[i] = 0) : i < a + b ? (nums[i] = 1) : (nums[i] = 2);}
  return nums;
};