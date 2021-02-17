const expect = chai.expect;
const assert = chai.assert;

describe('GradeBook', () => {
    describe('when passed three string', () => {
        it('should throw error if string',()=>{
            expect(() => findMean('1',2,20)).to.throw();
            expect(() => findMean(1,'2',20)).to.throw();
            expect(() => findMean(1,2,'20')).to.throw();
            expect(() => findMean('1','2','20')).to.throw();
        });
    });
    describe('when passed three numbers', () => {
        it('should not throw an error', () => {
          expect(() => findMean(60,60,60)).not.to.throw();
        });
    });
    
    it('should return grade A',()=>{
        const result = findMean(98,97,99);
        expect(result).to.equal('A');
    });
    it('should return grade B',()=>{
        const result = findMean(80,82,88);
        expect(result).to.equal('B');
    });
    it('should return grade C',()=>{
        const result = findMean(70,72,78);
        expect(result).to.equal('C');
    });
    it('should return grade D',()=>{
        const result = findMean(60,60,60);
        expect(result).to.equal('D');
    });
    it('should return grade F',()=>{
        const result = findMean(50,32,48);
        expect(result).to.equal('F');
    });
});


describe('summation', () => {
    describe('when passed string', () => {
        it('should throw error if string', () => {
            expect(() => summation('10')).to.throw();
        });
    });
    describe('when passed one number', () => {
        it('should not throw an error', () => {
          expect(() => summation(10)).not.to.throw();
        });
    });
    it('should return summation',()=>{
        const result = summation(4);
        expect(result).to.equal(10);
    })
});

describe('even-odd', () => {
    describe('when passed string', () => {
        it('should throw error if string', () => {
            expect(() => evenOdd('10')).to.throw();
        });
    });
    it('should return even',()=>{
        expect(evenOdd(4)).to.equal('even');
    });
    it('should return odd',()=>{
        expect(evenOdd(5)).to.equal('odd');
    })
});

describe('Repeat', () => {
    it('should return hello 3 times',()=>{
        expect(repeatValue('Hello',3)).to.equal('HelloHelloHello');
    });
});


