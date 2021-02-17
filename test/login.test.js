const { expect } = chai;
describe('login', () => {
    afterEach(() => {
        chai.spy.restore(Api);
    });
    describe('when the user logs in successfully', () => {
        it('should resolve a token', () => {
            const response = { token: '123' };
            const loginValue = new Promise((resolve, reject) => resolve(response));
            const spy = chai.spy.on(Api, 'login', () => loginValue);
            return login('test', 'test').then((response) => {
                expect(response).to.equal('123');
            });
        });
    });
    describe('when the user uses an incorrect email', () => {
        it('should reject with an error message', () => {
            const response = { error: 'user not found' };
            const loginValue = new Promise((resolve, reject) => {
                resolve(response);
            });
            const spy = chai.spy.on(Api, 'login', (returns) => loginValue);
           return login('test', 'test')
            .then(console.log('hi'))
            .catch(response => expect(response.message).to.equal('Oops! Incorrect username or password. Check your details and try again.'))
        });
    });
    describe('when the password is not passed', () => {
        it('should reject with an error message', () => {
            const response = { error: 'Missing password' };
            const loginValue = new Promise((resolve, reject) => resolve(response));
            const spy = chai.spy.on(Api, 'login', () => loginValue);
               return login('text')
                .then(()=> console.log('not supposed to work'))
                .catch(error => expect(error.message).to.equal('Oops! Missing password, make sure to fill in your password and try again.'))
        });
    });
});