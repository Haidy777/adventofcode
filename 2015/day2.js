function calcSide(a, b) {
	return a * b;
}

module.exports.part1 = function (input) {
	let neededSquareFeet = 0;

	for (const packDim of input) {
		const packDimSplit = packDim.split('x').map(Number);
		const [l, w, h] = packDimSplit;
		let smallestSide = calcSide(l, w);

		neededSquareFeet += 2 * smallestSide;

		const sideB = calcSide(w, h);

		if (sideB < smallestSide) {
			smallestSide = sideB;
		}

		neededSquareFeet += 2 * sideB;

		const sideC = calcSide(h, l);

		if (sideC < smallestSide) {
			smallestSide = sideC;
		}

		neededSquareFeet += 2 * sideC;

		neededSquareFeet += smallestSide;
	}

	return neededSquareFeet;
};

module.exports.part2 = function (input) {
	let neededFeet = 0;

	for (const packDim of input) {
		const packDimSplit = packDim.split('x').map(Number);
		const [l, w, h] = packDimSplit;
		const smallestSide = Math.min(...packDimSplit);

		packDimSplit.splice(packDimSplit.indexOf(smallestSide), 1);

		const secondSmallestSide = Math.min(...packDimSplit);

		neededFeet += (2 * smallestSide) + (2 * secondSmallestSide);

		neededFeet += l * w * h;

	}

	return neededFeet;
};