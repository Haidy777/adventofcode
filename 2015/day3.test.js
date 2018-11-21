const {part1, part2} = require('./day3');

describe('Day 3 - Part 1', () => {
	describe('Example 1', () => {
		it('should deliver presents to two houses', () => {
			expect(part1('>')).toBe(2);
		});
	});

	describe('Example 2', () => {
		it('should deliver presents to four houses', () => {
			expect(part1('^>v<')).toBe(4);
		});
	});

	describe('Example 3', () => {
		it('should deliver presents to two houses', () => {
			expect(part1('^v^v^v^v^v')).toBe(2);
		});
	});
});

describe('Day 3 - Part 2', () => {
	describe('Example 1', () => {
		it('should deliver presents to three houses', () => {
			expect(part2('^v')).toBe(3);
		});
	});

	describe('Example 2', () => {
		it('should deliver presents to three houses', () => {
			expect(part2('^>v<')).toBe(3);
		});
	});

	describe('Example 3', () => {
		it('should deliver presents to 11 houses', () => {
			expect(part2('^v^v^v^v^v')).toBe(11);
		});
	});
});