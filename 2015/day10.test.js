const {part1, part2} = require('./day10');

describe('Day 10 - Part 1', () => {
	describe('Example 1', () => {
		it('should return a length of 2', () => {
			expect(part1('1', 1)).toBe(2);
		});
	});
	
	describe('Example 2', () => {
		it('should return a length of 2', () => {
			expect(part1('11', 1)).toBe(2);
		});
	});
	
	describe('Example 3', () => {
		it('should return a length of 4', () => {
			expect(part1('21', 1)).toBe(4);
		});
	});
	
	describe('Example 4', () => {
		it('should return a length of 6', () => {
			expect(part1('1211', 1)).toBe(6);
		});
	});
	
	describe('Example 5', () => {
		it('should return a length of 6', () => {
			expect(part1('111221', 1)).toBe(6);
		});
	});
	
	describe('Example 6', () => {
		it('should return a length of 6', () => {
			expect(part1('1113222113', 40)).toBe(-1);
		});
	});
});