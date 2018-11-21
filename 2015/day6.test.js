const {part1, part2} = require('./day6');

describe('Day 6 - Part 1', () => {
	describe('Example 1', () => {
		it('should turn on all lights', () => {
			expect(part1(['turn on 0,0 through 999,999'])).toBe(1000000);
		});
	});

	describe('Example 2', () => {
		it('should turn on 1000 lights', () => {
			expect(part1(['toggle 0,0 through 999,0'])).toBe(1000);
		});
	});

	describe('Example 3', () => {
		it('should turn off 1 light', () => {
			expect(part1(['turn off 499,499 through 500,500'])).toBe(0);
		});
	});
});

describe('Day 6 - Part 2', () => {
	describe('Example 1', () => {
		it('should return the total brightness', () => {
			expect(part2(['turn on 0,0 through 0,0'])).toBe(1);
		});
	});

	describe('Example 2', () => {
		it('should return the total brightness', () => {
			expect(part2(['toggle 0,0 through 999,999'])).toBe(2000000);
		});
	});
});