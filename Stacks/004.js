var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  for (let i = 0; i < nums1.length; i++) {
    let index = nums2.indexOf(nums1[i]);
    console.log(index);
    let flag = false;
    for (let j = index; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        stack.push(nums2[j]);
        flag = true;
        break;
      }
    }
    if (!flag) {
      stack.push(-1);
    }
  }
  return stack;
};
