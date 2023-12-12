// function rotate(arr , k){


//   shift function in javascript removes the first element of the array and returns it
// Brute Force
    // while(k!=0){
    //     let temp = arr.pop();
    //     arr.unshift(temp);
    //     console.log(temp, arr);
    //     k--;
    // }
    // return arr;
// }


var rotate = function(nums, k) {
    while (nums.length <= k) {
        k = k - nums.length;
    }
    const temp = nums.splice(0, nums.length-k)
    nums.push(...temp)
    return nums;
};

console.log(rotate([1,2,3,4,5,6,7], 3));