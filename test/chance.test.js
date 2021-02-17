const expect = chai.expect;

describe('headsOrTails', () => {
  describe('when the coin flip is true', () => {
    it('should return heads', () => {
      // spy on coin.flip and change its return value to always be true
      const spy = chai.spy.on(coin, 'flip', (returns) => true);
      const result = headsOrTails();

      expect(result).to.equal('heads');
      chai.spy.restore(coin);
    });
  });
  describe('when the coin flip is false', () => {
    it('should return tails', () => {
      // spy on coin.flip and change its return value to always be true
      const spy = chai.spy.on(coin, 'flip', (returns) => false);
      const result = headsOrTails();

      expect(result).to.equal('tails');
      chai.spy.restore(coin);
    });
  });
});