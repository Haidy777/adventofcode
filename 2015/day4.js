const {createHash} = require('crypto');

function md5(data) {
	return createHash('md5').update(data).digest('hex');
}

function hashHas5Zeros(hash) {
	return hash.startsWith('00000');
}

function hashHas6Zeros(hash) {
	return hash.startsWith('000000');
}

module.exports.part1 = function (input) {
	let count = 0;

	while (!hashHas5Zeros(md5(`${input}${count}`))) {
		count++;
	}

	return count;
};

module.exports.part2 = function (input) {
	let count = 0;

	while (!hashHas6Zeros(md5(`${input}${count}`))) {
		count++;
	}

	return count;
};