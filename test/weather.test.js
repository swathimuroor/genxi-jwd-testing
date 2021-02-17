const expect = chai.expect;

describe('getWeatherFor', () => {
    describe('when passed "Sydney"', () => {
      it('should return 25', () => {
        getWeatherFor('Sydney')
          .then((temp) => {
            expect(temp).to.equal(25);
          });
      });
    });
    describe('when passed "Melbourne"', () => {
        it('should return 15', () => {
          getWeatherFor('Melbourne')
            .then((temp) => {
              expect(temp).to.equal(15);
            });
        });
      });
      describe('when passed "Brisbane"', () => {
        it('should return error', () => {
          return getWeatherFor('Brisbane')
            .then((temp) => {
              throw new Error ('No result expected.')
              .catch( (temp) =>{
                expect(temp).to.equal(`City Brisbane does not exist in our database`)
              }
                 
              );
            });
        });
      });
  });