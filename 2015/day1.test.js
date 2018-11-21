const {part1, part2} = require('./day1');

describe('Day 1 - Part 1', () => {
	describe('Example 1', () => {
		it('should return floor 0', () => {
			expect(part1('(())')).toBe(0);
			expect(part1('()()')).toBe(0);
		});
	});

	describe('Example 2', () => {
		it('should return floor 3', () => {
			expect(part1('(((')).toBe(3);
			expect(part1('(()(()(')).toBe(3);
		});
	});

	describe('Example 3', () => {
		it('should return floor 3', () => {
			expect(part1('))(((((')).toBe(3);
		});
	});

	describe('Example 4', () => {
		it('should return floor -1', () => {
			expect(part1('())')).toBe(-1);
			expect(part1('))(')).toBe(-1);
		});
	});

	describe('Example 5', () => {
		it('should return floor -3', () => {
			expect(part1(')))')).toBe(-3);
			expect(part1(')())())')).toBe(-3);
		});
	});
});

describe('Day 1 - Part 2', () => {
	describe('Example 1', () => {
		it('should return when floor -1 is entered', () => {
			expect(part2(')')).toBe(1);
		});
	});

	describe('Example 2', () => {
		it('should return when floor -1 is entered', () => {
			expect(part2('()())')).toBe(5);
		});
	});
});