/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  const resArr = [];
  for (let i = 0; i < arr.length; i++) {
    const arrItem = [];
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        arrItem.push(arr[j]);
      }
    }
    resArr.push(arrItem.join(''));
  }
  return +resArr.sort((a, b) => b - a)[0];
}

module.exports = deleteDigit;
