module.exports.part1 = function (input) {
  const map = [];
  let trees = 0;

  for (const i of input) {
    map.push(i.split(''));
  }

  let x = 0;
  let y = 0;
  for (; y < map.length;) {
    const line = map[y];

    if (x >= line.length) {
      x -= line.length;
    }

    if (line[x] === '#') {
      trees++;
    }

    x += 3;
    y += 1;
  }

  return trees;
};

module.exports.part2 = function (input) {
  const sets = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
  const map = [];
  let totalTrees = [];

  for (const i of input) {
    map.push(i.split(''));
  }

  for (const [right, down] of sets) {
    let x = 0;
    let y = 0;
    let trees = 0;

    for (; y < map.length;) {
      const line = map[y];

      if (x >= line.length) {
        x -= line.length;
      }

      if (line[x] === '#') {
        trees++;
      }

      x += right;
      y += down;
    }

    totalTrees.push(trees);
  }

  return totalTrees.reduce((a, b) => a * b, 1);
};
