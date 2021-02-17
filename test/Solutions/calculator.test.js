import { assert } from 'chai';
import { expect } from 'chai';

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
  describe('#subtract', () => {
    describe('when passed a string as a number', () => {
      it('should throw an error', () => {
        const calculator = new Calculator();
        expect(() => calculator.subtract('5', 2)).to.throw();
        expect(() => calculator.subtract(5, '2')).to.throw();
      });
    });

    describe('when passed two numbers', () => {
      it('should not throw an error', () => {
        const calculator = new Calculator();
        expect(() => calculator.subtract(5, 2)).not.to.throw();
      });

      it('should subtract the numbers together', () => {
        const calculator = new Calculator();
        const result = calculator.subtract(5, 2);
        expect(result).to.equal(3);
      });
    });
  });

  describe('#multiply', () => {
    describe('when passed a string as a number', () => {
      it('should throw an error', () => {
        const calculator = new Calculator();
        expect(() => calculator.multiply('3', 2)).to.throw();
        expect(() => calculator.multiply(3, '2')).to.throw();
      });
    });

    describe('when passed two numbers', () => {
      it('should not throw an error', () => {
        const calculator = new Calculator();
        expect(() => calculator.multiply(3, 2)).not.to.throw();
      });

      it('should multiply the numbers together', () => {
        const calculator = new Calculator();
        const result = calculator.multiply(3, 2);
        expect(result).to.equal(6);
      });
    });
  });


});