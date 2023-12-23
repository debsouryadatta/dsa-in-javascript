// Maximum Subarray - Brute Force

var maxSubArray = function(nums) {
    let max=Number.MIN_SAFE_INTEGER;
    for(let i=0;i<nums.length;i++){
        let sum = 0;
        for(let j=i;j<nums.length;j++){
            sum+=nums[j];
            console.log(nums[j]);
            if(sum>max) max=sum;
            // (sum>max) && (max=sum);
        }
    }
    return max;
};

console.log(maxSubArray([-1]));


// Maximum Subarray - Optimal(Kandane's Algo)

var maxSubArray = function(nums) {
    let sum=0;
    let max=Number.MIN_SAFE_INTEGER;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        if(sum>max){
            max=sum;
        }
        if(sum<0){
            sum=0;
        }
    }
    return max;
}