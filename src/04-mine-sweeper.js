/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = [];
  for (let i = 0; i < matrix.length; i++) {
    res.push([]);
  }
  for (let j = 0; j < res.length; j++) {
    for (let a = 0; a < matrix[0].length; a++) {
      res[j][a] = 0;
    }
  }
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row].includes(true)) {
      for (let col = 0; col < matrix[0].length; col++) {
        if (matrix[row][col] === true) {
          if (row === 0 && col === 0) {
            res[row][col + 1] += 1;
            res[row + 1][col] += 1;
            res[row + 1][col + 1] += 1;
          } else if (row === 0 && col === matrix[0].length - 1) {
            res[row - 1][col - 1] += 1;
            res[row - 1][col] += 1;
            res[row][col - 1] += 1;
          } else if (row === matrix.length - 1 && col === 0) {
            res[row - 1][col] += 1;
            res[row - 1][col + 1] += 1;
            res[row][col + 1] += 1;
          } else if (row === matrix.length - 1 && col === matrix[0].length - 1) {
            res[row - 1][col - 1] += 1;
            res[row - 1][col] += 1;
            res[row][col - 1] += 1;
          } else {
            res[row - 1][col - 1] += 1;
            res[row - 1][col] += 1;
            res[row - 1][col + 1] += 1;
            res[row][col - 1] += 1;
            res[row][col + 1] += 1;
            res[row + 1][col - 1] += 1;
            res[row + 1][col] += 1;
            res[row + 1][col + 1] += 1;
          }
        }
      }
    }
  }
  return res;
}

module.exports = minesweeper;
