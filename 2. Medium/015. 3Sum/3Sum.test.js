import { default as threeSum } from "./3Sum";

/**
 * Example 1:
 *
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 */
describe("testing Example 1", () => {
  test("Expected: [[-1,-1,2],[-1,0,1]]", () => {
    const input = [-1, 0, 1, 2, -1, -4];
    const expected = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];

    expect(threeSum(input)).toEqual(expected);
  });
});

/**
 * Example 2:
 *
 * Input: nums = [0,1,1]
 * Output: []
 */
describe("testing Example 2", () => {
  test("Expected: []", () => {
    const input = [0, 1, 1];
    const expected = [];
    expect(threeSum(input)).toEqual(expected);
  });
});

/**
 * Example 3:
 *
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 */
describe("testing Example 3", () => {
  test("Expected: [[0,0,0]]", () => {
    const input = [0, 0, 0];
    const expected = [[0, 0, 0]];
    expect(threeSum(input)).toEqual(expected);
  });
});
