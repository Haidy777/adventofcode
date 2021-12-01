function part1 (input) {
  return input.reduce((current, next, idx, arr) => {
    if (next > arr[idx - 1]) {
      return current + 1;
    }

    return current;
  }, 0);
}

function part2 (input) {
  const tripletSums = [];

  for (let i = 0; i < input.length; i++) {
    const triplet = [input[i], input[i + 1], input[i + 2]].filter(Boolean);

    if (triplet.length === 3) {
      tripletSums.push(triplet.reduce((prev, next) => prev + next, 0));
    }
  }

  return part1(tripletSums);
}

module.exports = {part1, part2};
