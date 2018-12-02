const {part1, part2} = require('./day2');

describe('Day 2 - Part 1', () => {
	describe('Example 1', () => {
		it('should return a rudimentary checksum', () => {
			expect(part1(['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab'])).toBe(12);
		});
	});
});

describe('Day 2 - Part 2', () => {
	describe('Example 1', () => {
		it('should return the common letters of the ids', () => {
			expect(part2(['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz'])).toBe('fgij');
		});
	});
});