const {part1, part2} = require('./day14');

describe('Day 14 - Part 1', () => {
	describe('Example 1', () => {
		it('should list Comet at the winner', () => {
			expect(
			    part1(
			        [
			            {name: 'Comet', speed: 14, duration: 10, rest: 127, durationCount: 0, restCount: 0, distance: 0, isResting: false},
			            {name: 'Dancer', speed: 16, duration: 11, rest: 162, durationCount: 0, restCount: 0, distance: 0, isResting: false}
			        ], 1000)
			).toBe(1120);
		});
	});
	
	describe('Example 2', () => {
		it('should list Comet at the winner', () => {
			expect(
			    part1(
			        [
			            {name: 'Vixen', speed: 19, duration: 7, rest: 124, durationCount: 0, restCount: 0, distance: 0, isResting: false},
			            {name: 'Rudolph', speed: 3, duration: 15, rest: 28, durationCount: 0, restCount: 0, distance: 0, isResting: false},
			            {name: 'Donner', speed: 19, duration: 9, rest: 164, durationCount: 0, restCount: 0, distance: 0, isResting: false},
			            {name: 'Blitzen', speed: 19, duration: 9, rest: 158, durationCount: 0, restCount: 0, distance: 0, isResting: false},
			            {name: 'Comet', speed: 13, duration: 7, rest: 82, durationCount: 0, restCount: 0, distance: 0, isResting: false},
			            {name: 'Cupid', speed: 25, duration: 6, rest: 145, durationCount: 0, restCount: 0, distance: 0, isResting: false},
			            {name: 'Dasher', speed: 14, duration: 3, rest: 38, durationCount: 0, restCount: 0, distance: 0, isResting: false},
			            {name: 'Dancer', speed: 3, duration: 16, rest: 37, durationCount: 0, restCount: 0, distance: 0, isResting: false},
			            {name: 'Prancer', speed: 25, duration: 6, rest: 143, durationCount: 0, restCount: 0, distance: 0, isResting: false}
			        ], 2503)
			).toBe(-1);
		});
	});
});