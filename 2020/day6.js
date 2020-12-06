const _ = require('lodash');

module.exports.part1 = function (input) {
    let responseCount = 0;

    for (const i of input) {
        responseCount += (new Set(i.split(''))).size;
    }

    return responseCount;
};

module.exports.part2 = function (input) {
    let responseCount = 0;

    input = input.map((group)=>{
        return group.map((person)=>{
            return person.split('').sort((a,b) => a-b).join('');
        })
    });

    for (const group of input) {
        if (group.length === 1) {
            responseCount += (new Set(group[0].split(''))).size;
        } else {
            const [firstPerson, ...otherPersons] = group;
            let everyAnswer = group[0].split('');

            for(const person of otherPersons){
                everyAnswer = _.intersection(everyAnswer, person.split(''));
            }

            responseCount += everyAnswer.length;
        }
    }

    return responseCount;
};