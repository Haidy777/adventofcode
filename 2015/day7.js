const BIN_OPTS = {
	AND: (a, b) => a & b,
	OR: (a, b) => a | b,
	NOT: a => ~a,
	LSHIFT: (a, b) => a << b,
	RSHIFT: (a, b) => a >> b
};

function getAB(input, cmd) {
	return input.split(cmd).map(el => el.trim()).map(el => isNaN(Number(el)) ? el : Number(el));
}

function findValue(wires, wireName) {
	const wire = wires.get(wireName);

	if (typeof wireName === 'number') {
		return wireName;
	}

	if (typeof wire === 'number') {
		return wire;
	}

	if (typeof wire === 'undefined') {
		return undefined
	}

	if (!wire.cmd) {
		wires.set(wireName, findValue(wires, wire));
	} else {
		wires.set(wireName, BIN_OPTS[wire.cmd](findValue(wires, wire.a), findValue(wires, wire.b)));
	}

	return wires.get(wireName);
}

module.exports.part1 = function (input, wireToFind) {
	const instructions = new Map();

	for (const el of input) {
		const [instAndInput, output] = el.split(' -> ');

		if (instAndInput.includes('AND')) {
			const [a, b] = getAB(instAndInput, 'AND');

			instructions.set(output, {
				cmd: 'AND',
				a, b
			});
		} else if (instAndInput.includes('OR')) {
			const [a, b] = getAB(instAndInput, 'OR');

			instructions.set(output, {
				cmd: 'OR',
				a, b
			});
		} else if (instAndInput.includes('NOT')) {
			let a = instAndInput.split(' ')[1].trim();

			if (!isNaN(Number(a))) {
				a = Number(a);
			}

			instructions.set(output, {
				cmd: 'NOT',
				a
			});
		} else if (instAndInput.includes('LSHIFT')) {
			const [a, b] = getAB(instAndInput, 'LSHIFT');

			instructions.set(output, {
				cmd: 'LSHIFT',
				a, b
			});
		} else if (instAndInput.includes('RSHIFT')) {
			const [a, b] = getAB(instAndInput, 'RSHIFT');

			instructions.set(output, {
				cmd: 'RSHIFT',
				a, b
			});
		} else {
			let a = instAndInput.trim();

			if (!isNaN(Number(a))) {
				a = Number(a);
			}

			instructions.set(output, a);
		}
	}

	return findValue(instructions, wireToFind);
};
module.exports.part2 = function (input, valueB, wireToFind) {
	const instructions = new Map();

	for (const el of input) {
		const [instAndInput, output] = el.split(' -> ');

		if (instAndInput.includes('AND')) {
			const [a, b] = getAB(instAndInput, 'AND');

			instructions.set(output, {
				cmd: 'AND',
				a, b
			});
		} else if (instAndInput.includes('OR')) {
			const [a, b] = getAB(instAndInput, 'OR');

			instructions.set(output, {
				cmd: 'OR',
				a, b
			});
		} else if (instAndInput.includes('NOT')) {
			let a = instAndInput.split(' ')[1].trim();

			if (!isNaN(Number(a))) {
				a = Number(a);
			}

			instructions.set(output, {
				cmd: 'NOT',
				a
			});
		} else if (instAndInput.includes('LSHIFT')) {
			const [a, b] = getAB(instAndInput, 'LSHIFT');

			instructions.set(output, {
				cmd: 'LSHIFT',
				a, b
			});
		} else if (instAndInput.includes('RSHIFT')) {
			const [a, b] = getAB(instAndInput, 'RSHIFT');

			instructions.set(output, {
				cmd: 'RSHIFT',
				a, b
			});
		} else {
			let a = instAndInput.trim();

			if (!isNaN(Number(a))) {
				a = Number(a);
			}

			instructions.set(output, a);
		}
	}

	instructions.set('b', valueB);

	return findValue(instructions, wireToFind);
};