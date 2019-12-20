const OPCODES = {
    ADD: '01',
    MULTIPLY: '02',
    TAKE_INPUT: '03',
    PUT_OUTPUT: '04',
    FINISHED: '99',
};

const PARAMETER_MODES = {
    POSITION: '0',
    IMMEDIEATE: '1',
};

function parameterValueByParameterMode (input, parameter, parameterMode){
    if(parameterMode === PARAMETER_MODES.POSITION){
        return Number(input[parameter]);
    } else if (parameterMode === PARAMETER_MODES.IMMEDIEATE){
        return Number(parameter);
    }
}

function part1 (input) {
    const inputClone = [...input];

    for(let i = 0; i <= inputClone.length;){
        const instr = `${inputClone[i]}`;
        const opcode = instr.slice(-2);
        const parameters = instr.slice(0, -2).split('').map((p)=>Number(p));
        const parsedParameterValues = {
            1: undefined,
            2: undefined,
            3: undefined,
            4: undefined,
        };
        
        switch (parameters.length){
            case 1:
                parsedParameterValues['1'] = parameterValueByParameterMode(input, parameters[0], parameters[0]);
                break;
            case 2:
                parsedParameterValues['1'] = parameterValueByParameterMode(input, parameters[1], parameters[1]);
                parsedParameterValues['2'] = parameterValueByParameterMode(input, parameters[0], parameters[0]);
                break;
            case 3:
                parsedParameterValues['1'] = parameterValueByParameterMode(input, parameters[2], parameters[2]);
                parsedParameterValues['2'] = parameterValueByParameterMode(input, parameters[1], parameters[1]);
                parsedParameterValues['3'] = parameterValueByParameterMode(input, parameters[0], parameters[0]);
                break;
            case 4:
                parsedParameterValues['1'] = parameterValueByParameterMode(input, parameters[3], parameters[3]);
                parsedParameterValues['2'] = parameterValueByParameterMode(input, parameters[2], parameters[2]);
                parsedParameterValues['3'] = parameterValueByParameterMode(input, parameters[1], parameters[1]);
                parsedParameterValues['4'] = parameterValueByParameterMode(input, parameters[0], parameters[0]);
                break;
        }

        throw parsedParameterValues;
    }

    return false;
}

function part2 (input) {
    return false;
}

module.exports = {part1, part2};