function sortByPosition(a, b){
    const [aX, aY] = a.split('|').map(Number);
    const [bX, bY] = b.split('|').map(Number);
  if (aY == bY) return aX - bX;
  return aY - bY;
}

function part1 (wire1, wire2){
    const posWire1 = [];
    const crossingPoints = [];
    let x = 0;
    let y = 0;
    
    for(const [direction, ...count] of wire1){
        const realCount = Number(count.join(''));

        for(let i = 0; i < realCount; i++){
            if(direction === 'R'){
                x++;
            } else if (direction === 'L'){
                x--;
            } else if (direction === 'U'){
                y++;
            } else if (direction === 'D'){
                y--;
            }

            posWire1.push(`${x}|${y}`);
        }
    }

    x = 0;
    y = 0;
    for(const [direction, ...count] of wire2){
        const realCount = Number(count.join(''));

        for(let i = 0; i < realCount; i++){
            if(direction === 'R'){
                x++;
            } else if (direction === 'L'){
                x--;
            } else if (direction === 'U'){
                y++;
            } else if (direction === 'D'){
                y--;
            }

            const point = `${x}|${y}`;

            if(posWire1.includes(point)){
                crossingPoints.push(point.split('|').map(Number).map(Math.abs).join('|'));
            }
        }
    }

    crossingPoints.sort(sortByPosition);

    const mostCentered = crossingPoints[0].split('|');

    return Math.abs(Number(mostCentered[0])) + Math.abs(Number(mostCentered[1]));
}

function part2 (wire1, wire2){
    const posWire1 = new Map();
    const crossingSteps = [];
    let x = 0;
    let y = 0;
    let steps = 0;
    
    for(const [direction, ...count] of wire1){
        const realCount = Number(count.join(''));

        for(let i = 0; i < realCount; i++){
            steps++;
            
            if(direction === 'R'){
                x++;
            } else if (direction === 'L'){
                x--;
            } else if (direction === 'U'){
                y++;
            } else if (direction === 'D'){
                y--;
            }

            posWire1.set(`${x}|${y}`, steps);
        }
    }

    x = 0;
    y = 0;
    steps = 0;
    for(const [direction, ...count] of wire2){
        const realCount = Number(count.join(''));

        for(let i = 0; i < realCount; i++){
            steps++;
            
            if(direction === 'R'){
                x++;
            } else if (direction === 'L'){
                x--;
            } else if (direction === 'U'){
                y++;
            } else if (direction === 'D'){
                y--;
            }

            const point = `${x}|${y}`;

            if(posWire1.has(point)){
                crossingSteps.push(posWire1.get(point) + steps);
            }
        }
    }

    return crossingSteps.sort((a,b)=>a-b)[0];
}

module.exports = {part1, part2};