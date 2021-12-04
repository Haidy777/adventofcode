function part1 ([drawnNumbers, boards]) {
    for(const drawnNumber of drawnNumbers){        
        for(const board of boards){
            for(const col of board){
                for(let row of col){                    
                    if(drawnNumber === row){
                        row = -1;
                    }
                }
            }
        }

        console.log(boards);
    }
}

function part2 ([drawnNumbers, boards]) {
}

module.exports = {part1, part2};
