const expect = chai.expect;

describe('canGregBuyBeer', () => {
  describe('when greg is 18', () => {
    it('should return "Greg is 18, he can buy beer!"', () => {
      const originalAge = greg.age;
      greg.age = 18
      const result = canGregBuyBeer();

      expect(result).to.equal('Greg is 18, he can buy beer!');
      greg.age = originalAge;
    })
  });
  describe('when greg under 18', () => {
    it('should return "Greg is under 18, he can not buy beer!"', () => {
      const originalAge = greg.age;
      const result = canGregBuyBeer();

      expect(result).to.equal(`Greg is ${greg.age}, he can not buy beer :(`);
      greg.age = originalAge;
    })
  });

});