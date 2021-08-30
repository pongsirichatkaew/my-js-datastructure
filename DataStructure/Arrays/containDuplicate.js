var containsDuplicate = function (nums) {
  const numsObj = {};
  for (let index = 0; index < nums.length; index++) {
    if (numsObj[nums[index]]) {
      return true;
    }
    numsObj[nums[index]] = true;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 4]));

// 1,000 elements (Set is 7x faster):
// Set: 0.15ms
// Object: 1.02ms

// 10,000 elements:
// Set: 0.87ms
// Object: 0.88ms

// 100,000 elements:
// Set: 10.91ms
// Object: 7.58ms

// 1,000,000 elements (Object is almost 3x faster):
// Set: 166.79ms
// Object: 59.55ms

// 10,000,000 elements (Object about 5x faster):
// Set: 3,575.32ms (3.5 seconds!)
// Object: 678.08ms