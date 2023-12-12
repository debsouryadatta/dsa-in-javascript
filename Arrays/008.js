var removeElement = function(nums, val) {
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==val){
            count++;
            nums[i]=Number.MIN_SAFE_INTEGER;
        }
    }
    nums.sort((a,b) => a-b);
    for(let i=0;i<count;i++){
        nums.shift();
    }
    return nums;
};

console.log(removeElement([3,2,2,3], 3));