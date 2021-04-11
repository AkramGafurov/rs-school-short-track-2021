/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainListCounter = {};
  const domainsList = [];
  for (let i = 0; i < domains.length; i++) {
    domainsList.push(domains[i].split('.').reverse());
  }
  for (let j = 0; j < domainsList.length; j++) {
    for (let a = 1; a <= domainsList[j].length; a++) {
      const subDomain = domainsList[j].slice(0, a).join('.');
      if (`.${subDomain}` in domainListCounter) {
        domainListCounter[`.${subDomain}`] += 1;
      } else {
        domainListCounter[`.${subDomain}`] = 1;
      }
    }
  }
  return domainListCounter;
}

module.exports = getDNSStats;
