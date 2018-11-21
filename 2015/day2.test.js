const {part1, part2} = require('./day2');

describe('Day 2 - Part 2', ()=>{
    describe('Example 1', ()=>{
        it('should return the needed wrapping paper', ()=>{
            expect(part1(['2x3x4'])).toBe(58);
        });
        
        it('should return the needed wrapping paper', ()=>{
            expect(part1(['1x1x10'])).toBe(43);
        });
    });
});

describe('Day 2 - Part 2', ()=>{
    describe('Example 1', ()=>{
        it('should return the needed ribbon', ()=>{
            expect(part2(['2x3x4'])).toBe(34);
        });
        
        it('should return the needed ribbon', ()=>{
            expect(part2(['1x1x10'])).toBe(14);
        });
    });
});