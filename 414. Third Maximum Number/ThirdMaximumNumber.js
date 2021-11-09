/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let min, mid, max;

  for (let num of nums) {
    // ignore
    if (num === min || num === mid || num === max) continue;

    /**
     * if max is empty, or current number > max.
     * shifting max to mid, mid to min, and replacing max with current number
     */
    if (max === undefined || num > max) {
      min = mid;
      mid = max;
      max = num;
    } else if (mid === undefined || num > mid) {
      /**
       * if mid is empty, or current number > mid.
       * shifting mid to min, and replacing mid with current number
       */
      min = mid;
      mid = num;
    } else if (min === undefined || num > min) {
      /**
       * if min is empty, or current number > min.
       * replacing mid with current number
       */
      min = num;
    }
  }

  /**
   * As the problem request:
   * `If the third maximum does not exist, return the maximum number.`
   */
  if (mid === undefined || min === undefined) {
    return max;
  }

  /**
   * return the third distinct maximum number in this array
   */
  return min;
};
