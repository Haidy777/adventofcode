function calcCoords(x, y, el) {
	if (el === '^') {
		y += 1;
	} else if (el === 'v') {
		y -= 1;
	} else if (el === '>') {
		x += 1
	} else if (el === '<') {
		x -= 1;
	}

	return {x, y};
}

module.exports.part1 = function (input) {
	input = input.split('');

	const visitedHouses = new Map([['0x0', 1]]);
	let x = 0;
	let y = 0;

	for (const el of input) {
		const newCoords = calcCoords(x, y, el);

		x = newCoords.x;
		y = newCoords.y;

		const currentXY = `${x}x${y}`;

		if (visitedHouses.has(currentXY)) {
			visitedHouses.set(currentXY, visitedHouses.get(currentXY) + 1);
		} else {
			visitedHouses.set(currentXY, 1);
		}
	}

	return visitedHouses.size;
};

module.exports.part2 = function (input) {
	input = input.split('');

	const visitedHouses = new Map([['0x0', 2]]);
	let coordsSanta = {x: 0, y: 0};
	let coordsRoboSanta = {x: 0, y: 0};
	let turn = true;

	for (const el of input) {
		if (turn) { //santas turn
			coordsSanta = calcCoords(coordsSanta.x, coordsSanta.y, el);
			const {x, y} = coordsSanta;
			const currentXY = `${x}x${y}`;

			if (visitedHouses.has(currentXY)) {
				visitedHouses.set(currentXY, visitedHouses.get(currentXY) + 1);
			} else {
				visitedHouses.set(currentXY, 1);
			}

			turn = false;
		} else { //robo santas turn
			coordsRoboSanta = calcCoords(coordsRoboSanta.x, coordsRoboSanta.y, el);

			const {x, y} = coordsRoboSanta;
			const currentXY = `${x}x${y}`;

			if (visitedHouses.has(currentXY)) {
				visitedHouses.set(currentXY, visitedHouses.get(currentXY) + 1);
			} else {
				visitedHouses.set(currentXY, 1);
			}

			turn = true;
		}
	}

	return visitedHouses.size;
};