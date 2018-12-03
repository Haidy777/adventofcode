const {part1, part2} = require('./day3');

describe('Day 3 - Part 1', () => {
	describe('Example 1', () => {
		it('should return the overlapping squares', () => {
			expect(part1(['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'])).toBe(4);
		});
	});
});

describe('Day 3 - Part 2', () => {
	describe('Example 1', () => {
		it('should return the overlapping squares', () => {
			expect(part2(['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'])).toBe('#3');
		});
	});
});