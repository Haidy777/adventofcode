const {part1, part2} = require('./day4');

describe('Day 4 - Part 1', () => {
	describe('Example 1', () => {
		it('should calculate a hash with 5 zeros at the beginning', () => {
			expect(part1('abcdef')).toBe(609043);
		});
	});

	describe('Example 2', () => {
		it('should calculate a hash with 5 zeros at the beginning', () => {
			expect(part1('pqrstuv')).toBe(1048970);
		});
	});
});

describe('Day 4 - Part 2', () => {
	describe('Example 1', () => {
		it('should calculate a hash with 6 zeros at the beginning', () => {
			expect(part2('abcdef')).toBe(6742839);
		});

		it('should calculate a hash with 6 zeros at the beginning', () => {
			expect(part2('pqrstuv')).toBe(5714438);
		});
	});
});