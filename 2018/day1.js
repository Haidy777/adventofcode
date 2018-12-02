module.exports.part1 = function (changes) {
	return changes.reduce((prev, curr) => prev + curr, 0);
};

module.exports.part2 = function (changes) {
	const seenFreq = new Set();
	let frequency = 0;

	seenFreq.add(0);

	while (true) {
		for (const change of changes) {
			frequency += change;

			if (seenFreq.has(frequency)) {
				return frequency;
			}

			seenFreq.add(frequency);
		}
	}
};