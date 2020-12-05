module.exports.part1 = function (input) {
    input = input.map((i) => {
        const row = parseInt(i.slice(0, 7).replace(/F/g, '0').replace(/B/g, '1'), 2) * 8;
        const col = parseInt(i.slice(7).replace(/L/g, '0').replace(/R/g, '1'), 2);

        return row + col;
    });

    return Math.max(...input);
};

module.exports.part2 = function (input) {
    input = input.map((i) => {
        const row = parseInt(i.slice(0, 7).replace(/F/g, '0').replace(/B/g, '1'), 2) * 8;
        const col = parseInt(i.slice(7).replace(/L/g, '0').replace(/R/g, '1'), 2);

        return row + col;
    });

    input = input.sort((a, b) => a - b);

    return input.reduce((last, current, index, allSeats) =>
        !index || last !== undefined || allSeats[index - 1] + 1 === current ? last : allSeats[index - 1] + 1
        , undefined);
};