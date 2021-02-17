const expect = chai.expect;

describe('canGregBuyBeer', () => {
  describe('canBuyBeer function should return:', () => {
    it('should return true if age > 17', () => {
      expect(canBuyBeer(18)).to.equal(true);
    });
    it('should return false if age =< 17', () => {
      expect(canBuyBeer(17)).to.equal(false);
    });
  });
  describe('can Greg buy beer?', () => {
    it('if > 17 yes', () => {
      const originalAge = greg.age;
      greg.age = 18;

      expect(canGregBuyBeer()).to.equal(
        `Greg is ${greg.age}, he can buy beer!`
      );
      greg.age = originalAge;
    });
    it('if =< 17 no', () => {
      const originalAge = greg.age;
      greg.age = 17;

      expect(canGregBuyBeer()).to.equal(
        `Greg is ${greg.age}, he can not buy beer :(`
      );
      greg.age = originalAge;
    });
    it('if passed a string as an age', () => {
      const originalAge = greg.age;
      greg.age = '17';
      console.log(canGregBuyBeer());
      expect(canGregBuyBeer()).to.equal(
        `Greg is ${greg.age}, he can not buy beer :(`
      );
      greg.age = originalAge;
    });
  });
});