function part1 (input) {
  input = input.map((i)=>i.split(' ')).map((i)=>[i[0], Number(i[1])]);

  let horizontal = 0;
  let depth = 0;

  for(const [command, amount] of input){
    switch (command){
      case 'forward':
        horizontal += amount;
        break;
      case 'down':
        depth += amount;
        break;
      case 'up':
        depth -= amount;
        break;
    }
  }

  return horizontal * depth;
}

function part2 (input) {
  input = input.map((i)=>i.split(' ')).map((i)=>[i[0], Number(i[1])]);

  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  for(const [command, amount] of input){
    switch (command){
      case 'forward':
        horizontal += amount;

        if(aim){
          depth += aim * amount;
        }

        break;
      case 'down':
        aim += amount;
        break;
      case 'up':
        aim -= amount;
        break;
    }
  }

  return horizontal * depth;
}

module.exports = {part1, part2};
