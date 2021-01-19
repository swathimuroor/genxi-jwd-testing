const expect = chai.expect;

describe('Calculator', () => {
  describe('#add', () => {
    describe('when passed a string as a number', () => {
      it('should throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.add('1', 2)).to.throw();
        expect(() => calculator.add(1, '2')).to.throw();
      });
    });

    describe('when passed two numbers', () => {
      it('should not throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.add(1, 2)).not.to.throw();
      });

      it('should add the numbers together', () => {
        const calculator = new Calculator();

        const result = calculator.add(1, 2);

        expect(result).to.equal(3);
      });
    });
  });
});