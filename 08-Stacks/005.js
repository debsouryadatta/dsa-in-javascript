var nextGreaterElements = function(nums) {
    let stack = [];
    for(let i=0;i<nums.length;i++){
        let flag = false;
        for(let j=i+1;j<nums.length;j++){
            if(nums[j]>nums[i]){
                stack.push(nums[j]);
                flag=true;
                break;
            }
        }
        if(flag===false){
            for(let k=0;k<i;k++){
                if(nums[k]>nums[i]){
                    stack.push(nums[k]);
                    flag=true;
                    break;
                } 
            }
        }
        if(flag===false){
            stack.push(-1);
        }
    }
    return stack;
};