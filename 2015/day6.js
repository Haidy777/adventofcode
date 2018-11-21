module.exports.part1 = function (input) {
	const lights = new Map();

	for (const el of input) {
		let cmd = 'toggle';
		let [instAndStart, maxXY] = el.split('through');

		instAndStart = instAndStart.split(' ');

		maxXY = maxXY.split(',').map(Number);

		let minXY = instAndStart[1];

		if (instAndStart[1] === 'on' || instAndStart[1] === 'off') {
			minXY = instAndStart[2];
			cmd = instAndStart[1].trim();
		}

		minXY = minXY.split(',').map(Number);

		for (let x = minXY[0]; x <= maxXY[0]; x++) {
			for (let y = minXY[1]; y <= maxXY[1]; y++) {
				const currentCoords = `${x}x${y}`;
				let currentState = false;

				if (lights.has(currentCoords)) {
					currentState = lights.get(currentCoords);
				} else {
					lights.set(currentCoords, false);
				}

				if (cmd === 'toggle') {
					currentState = !currentState;
				} else if (cmd === 'on') {
					currentState = true;
				} else if (cmd === 'off') {
					currentState = false;
				}

				lights.set(currentCoords, currentState);
			}
		}
	}

	return Array.from(lights.values()).filter(Boolean).length;
};

module.exports.part2 = function (input) {
	const lights = new Map();

	for (const el of input) {
		let cmd = 'toggle';
		let [instAndStart, maxXY] = el.split('through');

		instAndStart = instAndStart.split(' ');

		maxXY = maxXY.split(',').map(Number);

		let minXY = instAndStart[1];

		if (instAndStart[1] === 'on' || instAndStart[1] === 'off') {
			minXY = instAndStart[2];
			cmd = instAndStart[1].trim();
		}

		minXY = minXY.split(',').map(Number);

		for (let x = minXY[0]; x <= maxXY[0]; x++) {
			for (let y = minXY[1]; y <= maxXY[1]; y++) {
				const currentCoords = `${x}x${y}`;
				let currentBrightness = 0;

				if (lights.has(currentCoords)) {
					currentBrightness = lights.get(currentCoords);
				} else {
					lights.set(currentCoords, 0);
				}

				if (cmd === 'toggle') {
					currentBrightness += 2;
				} else if (cmd === 'on') {
					currentBrightness++;
				} else if (cmd === 'off') {
					currentBrightness--;
					if (currentBrightness < 0) {
						currentBrightness = 0;
					}
				}

				lights.set(currentCoords, currentBrightness);
			}
		}
	}

	return Array.from(lights.values()).reduce((prev, next) => prev + next, 0);
};