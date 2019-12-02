const ADD = 1;
const MULTI = 2;
const FINISHED = 99;

function part1 (input){
    const inputClone = [...input];

    for(let i = 0; i <= inputClone.length; i+=4){
        const opcode = inputClone[i];
        const pos1Val = inputClone[inputClone[i + 1]];
        const pos2Val = inputClone[inputClone[i + 2]];
        const dest = inputClone[i + 3];

        if(opcode === ADD){
            inputClone[dest] = pos1Val + pos2Val;
        } else if(opcode === MULTI) {
            inputClone[dest] = pos1Val * pos2Val;
        } else if(opcode === FINISHED) {
            break;
        }
    }

    return inputClone[0];
}

function part2 (input, expected){
    let result = [];
    
    for(let noun = 0; noun < 100; noun++){
        for(let verb = 0; verb < 100; verb++){
            const clonedInput = [...input];
            clonedInput[1] = noun;
            clonedInput[2] = verb;
            
            if(expected === part1(clonedInput)){
                result[0] = noun;
                result[1] = verb;
                break;
            }
        }

        if(result.length){
            break;
        }
    }

    return Number(`${result[0]}${result[1]}`);
}

module.exports = {part1, part2};