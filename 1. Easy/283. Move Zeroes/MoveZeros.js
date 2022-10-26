/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zeroes = 0;
  const length = nums.length;

  for (let i = 0; i < length; i += 1) {
    const currValue = nums[i];

    /** current value is zero */
    if (currValue === 0) {
      zeroes += 1;
      continue;
    }

    /**
     * current value is not zero
     */
    // haven't find zeroes yet, do nothing
    if (zeroes === 0) continue;

    // otherwise, swapping
    nums[i - zeroes] = nums[i];
    nums[i] = 0;
  }

  return nums;
};
