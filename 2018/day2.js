module.exports.part1 = function (input) {
	let twoEntries = 0;
	let threeEntries = 0;

	for (const boxId of input) {
		const chars = boxId.split('');
		const charCount = {};

		for (const char of chars) {
			if (charCount[char]) {
				charCount[char]++;
			} else {
				charCount[char] = 1;
			}
		}

		const hasTwoEntries = Object.values(charCount).some(count => count === 2);
		const hasThreeEntries = Object.values(charCount).some(count => count === 3);

		if (hasTwoEntries) {
			twoEntries++;
		}

		if (hasThreeEntries) {
			threeEntries++;
		}
	}

	return twoEntries * threeEntries;
};

module.exports.part2 = function (input) {
	let result = null;

	for (const boxId of input) {
		const splittedBoxId = boxId.split('');

		for (const otherBoxId of input) {
			if (boxId === otherBoxId) {
				break;//the same should not be used
			}

			const diff = [];
			const otherSplittedBoxId = otherBoxId.split('');

			for (let i = 0; i < otherSplittedBoxId.length; i++) {
				if (splittedBoxId[i] !== otherSplittedBoxId[i]) {
					diff.push(splittedBoxId[i]);

					if (diff.length >= 2) {
						break; //as no more than one diff is allowed
					}
				}
			}

			if (diff.length === 1) {
				result = boxId.replace(diff[0], '');
				break;
			}
		}
	}

	return result;
};