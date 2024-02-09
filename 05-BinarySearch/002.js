/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums = nums.sort((a,b)=> a-b);
    let start = 0, end = nums.length-1;
    let arr = [];
    if(!nums.includes(target)) return arr;

    while(start<=end){
        let mid = Math.round((start+end)/2);
        if(nums[mid] === target){
            arr.push(mid);
            start = mid-1;
            end = mid+1;
            while(nums[start] == target){
                arr.push(start);
                start = start-1;
            }
            while(nums[end] == target){
                arr.push(end);
                end = end+1;
            }
            break;
        }
        else if(nums[mid]<target){
            start = mid+1;
        }
        else if(nums[mid]>target){
            end = end-1;
        }
    }
    return arr.sort((a,b)=> a-b);
};