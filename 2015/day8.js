module.exports.part1 = function (input) {
	let stringLength = 0;

	for (const el of input) {
		let realString = el;

		if(realString.includes('\"')){
			realString = realString.replace(/\"/g, '1');
		}

		realString = realString.replace(/\\/g, '');

		realString = realString.replace(/[^\x00-\x7F]/g, '1');

		// if (realString.match(/\x/g)) {
		// 	while (realString.match(/\x/g)) {
		// 		let idx = realString.indexOf(/\x/);
		//
		// 		realString = realString.slice(idx, idx + 4);
		// 		realString += '1';
		// 	}
		// }

		stringLength += (2 + el.length) - realString.length;
	}

	return stringLength;
};
module.exports.part2 = function (input) {
};