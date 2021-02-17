const expect = chai.expect;
describe('getWeatherFor', () => {
  describe('when passed "Sydney"', () => {
    it('should return 25', async () => {
      let data = await getWeatherFor('Sydney')
      expect(data).to.equal(25);
    });
  });
  describe('when passed "Melbourne"', () => {
    it('should return 15', async () => {
      let data = await getWeatherFor('Melbourne')
      expect(data).to.equal(15);
    });
  });
  describe('when passed "London"', () => {
    it('should return City London does not exist in our database', async () => {
     let data = await getWeatherFor('London')
      expect(error).to.equal('City London does not exist in our database');
    });
  });
});

