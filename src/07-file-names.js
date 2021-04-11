/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) return names;
  const copyArr = names.slice(0);
  let strCounter = '';
  const res = [names[0]];
  for (let i = 1; i < names.length; i++) {
    let counter = 0;
    for (let j = 0; j < i; j++) {
      if (copyArr[i] === copyArr[j]) {
        counter += 1;
        copyArr[i] += `(${counter})`;
      }
    }
    if (counter !== 0) {
      strCounter = `(${counter})`;
    } else {
      strCounter = '';
    }
    res.push(names[i] + strCounter);
  }
  return res;
}

module.exports = renameFiles;
