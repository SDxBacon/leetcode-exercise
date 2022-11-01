enum Direction {
  Left = -1,
  Right = 1,
}

const Stuck = -1;

/**
 * findBall function, entry function
 */
function findBall(grid: number[][]): number[] {
  const [rows, columns] = [grid.length, grid[0].length];
  const result: number[] = [];

  for (let i = 0; i < columns; i += 1) {
    let currRow = 0;
    let currCol = i;

    while (currRow < rows) {
      const currVal = grid[currRow][currCol];

      // If current value is open to left, grid[currRow][currCol - 1] has to open to left,
      // so that we are able to reach next level
      if (currVal === Direction.Left) {
        if (currCol - 1 >= 0 && grid[currRow][currCol - 1] === Direction.Left) {
          currRow += 1; // move to next level
          currCol -= 1; // shift to left column
        } else {
          break;
        }
      }
      // On the opposite, if current value is open to right, grid[currRow][currCol + 1] has to open to right, also.
      // So that we are able to reach next level
      else {
        if (
          currCol + 1 < columns &&
          grid[currRow][currCol + 1] === Direction.Right
        ) {
          currRow += 1; // move to next level
          currCol += 1; // shift to right column
        } else {
          break;
        }
      }
    }

    result[i] = currRow === rows ? currCol : Stuck;
  }

  return result;
}
