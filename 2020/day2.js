module.exports.part1 = function (input) {
  let validPasswords = 0;

  for (const i of input) {
    const split = i.split(':');
    const [cond, char] = split[0].split(' ');
    const [min, max] = cond.split('-').map(Number);
    const pwCharCount = split[1].split('').filter((pwChar) => pwChar === char).length;

    if (pwCharCount >= min && pwCharCount <= max) {
      validPasswords++;
    }
  }

  return validPasswords;
};

module.exports.part2 = function (input) {
  let validPasswords = 0;

  for (const i of input) {
    const split = i.split(':');
    const [cond, char] = split[0].split(' ');
    const [pos1, pos2] = cond.split('-').map(Number);
    const pw = split[1].trim().split('');

    if (pw[pos1 - 1] === char && !(pw[pos2 - 1] === char)) {
      validPasswords++;
    } else if (pw[pos2 - 1] === char && !(pw[pos1 - 1] === char)) {
      validPasswords++;
    }
  }

  return validPasswords;
};
