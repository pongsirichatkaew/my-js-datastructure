var maxSubArray = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let max = nums[0];
  let sum = max;

  for (let index = 1; index < nums.length; index++) {
    if (nums[index] > sum + nums[index]) {
      sum = nums[index];
    } else {
      sum = sum + nums[index];
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSubArray([1]));
