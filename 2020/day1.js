module.exports.part1 = function (input) {
  let a = 0;
  let b = 0;

  for (let i = 0; i < input.length; i++) {
    a = input[i];

    for (let j = 0; j < input.length; j++) {
      b = input[j];

      if (a + b === 2020) {
        break;
      }
    }

    if (a + b === 2020) {
      break;
    }
  }

  return a * b;
};

module.exports.part2 = function (input) {
  const combinations = new Map();

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      for (let k = 0; k < input.length; k++) {
        combinations.set(input[i] + input[j] + input[k], input[i] * input[j] * input[k]);
      }
    }
  }

  for (const [key, value] of combinations.entries()) {
    if (key === 2020) {
      return value;
    }
  }
};
