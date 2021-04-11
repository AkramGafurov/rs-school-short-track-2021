/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let resStr = '';
  let ind = 0;
  let counter = 1;
  while (ind < str.length) {
    if (str[ind] === str[ind + 1]) {
      counter += 1;
      ind += 1;
    } else if (counter === 1) {
      resStr += str[ind];
      ind += 1;
    } else {
      resStr += counter + str[ind];
      ind += 1;
      counter = 1;
    }
  }
  return resStr;
}

module.exports = encodeLine;
