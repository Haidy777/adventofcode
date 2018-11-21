const DISSALLOWED = ['ab', 'cd', 'pq', 'xy'];
const DOUBLE_LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('').map(i => `${i}${i}`);
const VOWELS = /[aeiou]/g;
const PAIR = /([a-z][a-z]).*\1/;
const REPEAT = /([a-z])[a-z]\1/;

function checkForCertain(el, checkList) {
	let containsCertain;

	for (const notAllowed of checkList) {
		containsCertain = el.includes(notAllowed);

		if (containsCertain) {
			break;
		}
	}

	return containsCertain;
}

function has3Vowels(el) {
	const matching = el.match(VOWELS);

	return !!(matching && matching.length >= 3);
}

module.exports.part1 = function (input) {
	let niceStrings = 0;

	for (const el of input) {
		if (!checkForCertain(el, DISSALLOWED) && checkForCertain(el, DOUBLE_LETTERS) && has3Vowels(el)) {
			niceStrings++;
		}
	}

	return niceStrings;
};

module.exports.part2 = function (input) {
	let niceStrings = 0;

	for (const el of input) {
		if (PAIR.test(el) && REPEAT.test(el)) {
			niceStrings++;
		}
	}

	return niceStrings;
};