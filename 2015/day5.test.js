const {part1, part2} = require('./day5');

describe('Day 5 - Part 1', () => {
	describe('Example 1', () => {
		it('should say there is one nice string', () => {
			expect(part1(['ugknbfddgicrmopn'])).toBe(1);
		});
	});

	describe('Example 2', () => {
		it('should say there is one nice string', () => {
			expect(part1(['aaa'])).toBe(1);
		});
	});

	describe('Example 3', () => {
		it('should say there is no nice string', () => {
			expect(part1(['jchzalrnumimnmhp'])).toBe(0);
		});
	});

	describe('Example 4', () => {
		it('should say there is no nice string', () => {
			expect(part1(['haegwjzuvuyypxyu'])).toBe(0);
		});
	});

	describe('Example 5', () => {
		it('should say there is no nice string', () => {
			expect(part1(['dvszwmarrgswjxmb'])).toBe(0);
		});
	});
});

describe('Day 5 - Part 2', () => {
	describe('Example 1', () => {
		it('should say there is one nice string', () => {
			expect(part2(['qjhvhtzxzqqjkmpb'])).toBe(1);
		});
	});

	describe('Example 2', () => {
		it('should say there is one nice string', () => {
			expect(part2(['xxyxx'])).toBe(1);
		});
	});

	describe('Example 3', () => {
		it('should say there is no nice string', () => {
			expect(part2(['uurcxstgmygtbstg'])).toBe(0);
		});
	});

	describe('Example 4', () => {
		it('should say there is no nice string', () => {
			expect(part2(['ieodomkazucvgmuy'])).toBe(0);
		});
	});
});