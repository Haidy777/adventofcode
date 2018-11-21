module.exports.part1 = function (input) {
    input = input.split('');
    
    const UP = input.filter(el=>el === '(').length;
    const DOWN = input.filter(el=>el === ')').length;
    
    return (0 + UP - DOWN);
};

module.exports.part2 = function (input){
    input = input.split('');
    
    let count = 0;
    let finalPos = -1;
    
    for(let i = 1; i <= input.length; i++){
        const el = input[i-1];
        
        if(el === '('){
            count++;
        } else if(el === ')'){
            count--;
        }
        
        if(count === -1){
            finalPos = i;
            break;
        }
    }
    
    return finalPos;
}