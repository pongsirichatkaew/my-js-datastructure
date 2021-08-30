var twoSum = function (nums, target) {
  const objDiff = {};
  for (let index = 0; index < nums.length; index++) {
    if (objDiff[`${nums[index]}`] !== undefined) {
      return [objDiff[nums[index]], index];
    }
    const diff = target - nums[index];
    objDiff[diff] = index;
  }
};

console.log(twoSum([3, 2, 1, 3], 3));
