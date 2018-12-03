function getCoords (x, y){
    return `${x}x${y}`;
}

module.exports.part1 = function (input){
    const fabricMap = new Map();
    
    for(const instr of input){
        let [,,position, size] = instr.split(' ');
        
        size = size.split('x').map(Number);
        position = position.split(':')[0].split(',').map(Number);
        
        for(let i = 0; i < size[0]; i++){
            for(let j = 0; j < size[1]; j++){
                const coords = getCoords(position[0] + i, position[1] + j);
                
                if(fabricMap.has(coords)){
                    fabricMap.set(coords, fabricMap.get(coords) + 1);
                }else{
                    fabricMap.set(coords, 1);
                }
            }
        }
    }
    
    let moreThanTwo = 0;
    
    for(const val of fabricMap.values()){
        if(val >= 2){
            moreThanTwo++;
        }
    }
    
    return moreThanTwo;
};

module.exports.part2 = function (input){
    const fabricMap = new Map();
    
    for(const instr of input){
        let [id,,position, size] = instr.split(' ');
        
        size = size.split('x').map(Number);
        position = position.split(':')[0].split(',').map(Number);
        
        for(let i = 0; i < size[0]; i++){
            for(let j = 0; j < size[1]; j++){
                const coords = getCoords(position[0] + i, position[1] + j);
                
                if(fabricMap.has(coords)){
                    fabricMap.set(coords, {id: [...fabricMap.get(coords).id, id], count: fabricMap.get(coords).count + 1});
                }else{
                    fabricMap.set(coords, {id: [id], count: 1});
                }
            }
        }
    }
    
    for(const instr of input){
        const id = instr.split(' ')[0];
        let overlapped = false;
        
        for(const [key, value] of fabricMap.entries()){
            if(value.id.includes(id) && value.id.length > 1){
                overlapped = true;
                break;
            }
        }
        
        if(!overlapped){
            return id;
        }
    }
};