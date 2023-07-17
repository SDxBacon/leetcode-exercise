/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let output = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let mid = i + 1;
    let right = nums.length - 1;
    while (mid < right) {
      let sum = nums[i] + nums[mid] + nums[right];
      if (sum > 0) right -= 1;
      else if (sum < 0) mid += 1;
      else {
        output.push([nums[i], nums[mid], nums[right]]);
        mid += 1;
        right -= 1;
        while (nums[mid] == nums[mid - 1]) mid++;
      }
    }
  }

  return output;
};

// export for test
export default threeSum;
