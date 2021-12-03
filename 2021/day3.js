function part1 (input) {
  input = input.map((i) => i.split('').map(Number));

  const length = input[0].length;
  const commons = [];

  for (let i = 0; i < length; i++) {
    commons.push({0: 0, 1: 0});
  }

  for (const inp of input) {
    for (let i = 0; i < length; i++) {
      if (inp[i]) {
        commons[i][1]++;
      } else {
        commons[i][0]++;
      }
    }
  }

  let numb = '';

  for (let i = 0; i < length; i++) {
    numb += commons[i][0] > commons[i][1] ? 0 : 1;
  }

  let numbInvert = '';

  for (const inp of numb.split('')) {
    numbInvert += inp === '1' ? '0' : '1';
  }

  numb = parseInt(numb, 2);
  numbInvert = parseInt(numbInvert, 2);

  return numb * numbInvert;
}

function findCommon (input, position) {
  const length = input[0].length;
  const commons = [];

  for (let i = 0; i < length; i++) {
    commons.push({0: 0, 1: 0});
  }

  for (const inp of input) {
    for (let i = 0; i < length; i++) {
      if (inp[i]) {
        commons[i][1]++;
      } else {
        commons[i][0]++;
      }
    }
  }

  return commons[position][0] > commons[position][1] ? 0 : 1;
}

function part2 (input) {
  let oxyValue = input.map((i) => i.split('').map(Number));
  let co2Value = input.map((i) => i.split('').map(Number));
  let counter = 0;

  while (oxyValue.length > 1) {
    const common = findCommon(oxyValue, counter);

    oxyValue = oxyValue.filter((inp) => inp[counter] === common);

    counter++;
  }

  oxyValue = parseInt(oxyValue[0].join(''), 2);

  counter = 0;
  while (co2Value.length > 1) {
    const common = findCommon(co2Value, counter) ? 0 : 1;

    co2Value = co2Value.filter((inp) => inp[counter] === common);

    counter++;
  }

  co2Value = parseInt(co2Value[0].join(''), 2);

  return oxyValue * co2Value;
}

module.exports = {part1, part2};
