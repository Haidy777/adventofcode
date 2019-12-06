const {part1, part2} = require('./day4');

const input = [134792, 675810];

describe('Day 4 - Part 1', ()=>{
	it('Example 1', ()=>{
		expect(part1(111111, 111111)).toBe(1);
	});
	it('Example 2', ()=>{
		expect(part1(223450, 223450)).toBe(0);
	});
	it('Example 3', ()=>{
		expect(part1(123789, 123789)).toBe(0);
	});
	it('My Input', ()=>{
		expect(part1(input[0], input[1])).toBe(1955);
	});
});

describe('Day 4 - Part 2', ()=>{
	it('Example 1', ()=>{
		expect(part2(112233, 112233)).toBe(1);
	});
	it('Example 2', ()=>{
		expect(part2(123444, 123444)).toBe(0);
	});
	it('Example 3', ()=>{
		expect(part1(111122, 111122)).toBe(1);
	});
	it('My Input', ()=>{
		expect(part2(input[0], input[1])).toBe(1319);
	});
});