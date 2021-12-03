const {part1, part2} = require('./day5');

const example1 = [];
const myInput = [];

describe('Day4', () => {
  describe('part1', () => {
    it('Example 1', () => {
      expect(part1(example1)).toEqual(-1);
    });

    it('My Input', () => {
      expect(part1(myInput)).toEqual(-1);
    });
  });

  describe('part2', () => {
    it('Example 1', () => {
      expect(part2(example1)).toEqual(-1);
    });

    it('My Input', () => {
      expect(part2(myInput)).toEqual(-1);
    });
  });
});
