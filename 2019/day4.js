function isValidPart1 (pw){
    let nextIsSame = false;
    let nextIsIncreasing = true;

    for(let i = 0; i < pw.length; i++){
        if(pw[i] === pw[i + 1]){
            nextIsSame = true;
        }

        if(Number(pw[i]) > Number(pw[i+1])){
            nextIsIncreasing = false;
        }
    }

    return nextIsSame && nextIsIncreasing;
}

function isValidPart2 (pw){
    let nextIsSameButNotMoreThanTwo = false;
    let nextIsIncreasing = true;

    for(let i = 0; i < pw.length; i++){
        const previous = pw[i - 1];
        const current = pw[i];
        const next = pw[i + 1];
        const nextNext = pw[i + 2];

        if(previous !== current && current === next && current !== nextNext){
            nextIsSameButNotMoreThanTwo = true;
        }

        if(Number(current) > Number(next)){
            nextIsIncreasing = false;
        }
    }

    return nextIsSameButNotMoreThanTwo && nextIsIncreasing;
}

function part1 (start, end){
    let passwordCount = 0;

    for(let i = start; i <= end; i++){
        if(isValidPart1(`${i}`)){
            passwordCount++;
        }
    }

    return passwordCount;
}

function part2 (start, end){
    let passwordCount = 0;

    for(let i = start; i <= end; i++){
        if(isValidPart2(`${i}`)){
            passwordCount++;
        }
    }

    return passwordCount;
}

module.exports = {part1, part2};