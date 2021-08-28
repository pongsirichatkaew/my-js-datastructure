var moveZeroes = function (nums) {
  let length = nums.length;
  let count = 0;
  if (length === 1) {
    return nums;
  }
  for (let index = 0; index < length; index++) {
    if (nums[index] !== 0) {
      nums[count] = nums[index];
      count++;
      console.log('nums', nums);
    }
  }
  for (let j = count; j < length; j++) {
    nums[j] = 0;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
