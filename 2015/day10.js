function manipulate (input){
    input = input.split('');
    
    let manipulated = '';
    let last = -1;
    let cnt = 1;
    
    for(let i = 0; i < input.length; i++){
        const current = input[i];
        
        if(current === last){
            cnt++;
        }else{
            manipulated += `${cnt}${current}`;
            cnt = 1;
        }
        
        last = current;
    }
    
    return manipulated;
}

module.exports.part1 = function (input, runs){
    for(let i = 0; i < runs; i++){
        input = manipulate(input);
    }
    
    return input.length;
};