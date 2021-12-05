function part1(input) {
    input = input.split('\n').filter(Boolean).map((i) => i.split('->').map((inp) => inp.trim().split(',').map(Number)));
    const map = new Map();

    for (let [[startX, startY], [endX, endY]] of input) {
        if (startX === endX || startY === endY) {
            if(endX < startX || endY < startY){
                const tempX = startX;
                const tempY = startY;
    
                startX = endX;
                startY = endY;
    
                endX = tempX;
                endY = tempY;
            }
            
            if (startX !== endX) {
                const diff = endX - startX;

                for (let i = 0; i <= diff; i++) {
                    const coords = `${startX + i}x${startY}`;

                    if (map.has(coords)) {
                        map.set(coords, map.get(coords) + 1);
                    } else {
                        map.set(coords, 1);
                    }
                }
            } else if (startY !== endY) {
                const diff = endY - startY;

                for (let i = 0; i <= diff; i++) {
                    const coords = `${startX}x${startY + i}`;

                    if (map.has(coords)) {
                        map.set(coords, map.get(coords) + 1);
                    } else {
                        map.set(coords, 1);
                    }
                }
            }
        }
    }

    return Array.from(map.values()).filter((v) => v >= 2).length;
}

function part2(input) {
}

module.exports = { part1, part2 };
