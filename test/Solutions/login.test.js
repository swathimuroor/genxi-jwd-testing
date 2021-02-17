
const expect = chai.expect;

describe("login", () => {
    describe("when the user logs in successfully", () => {
      it("should resolve a token", () => {
            let response = { token: "123" };
            let loginValue = new Promise((resolve, reject) => {
            resolve(response);
            });
            let spy = chai.spy.on(Api, "login", (returns) => loginValue);
    
            return login("test", "test").then((response) => {
            expect(response).to.equal("123");
            });
       });
    });
  });

//   describe('getUserLogin', () => {
//     describe('user found', () => {
//         it('should return token',() => {

//             // we have to make sure that the spy to set value as per user defined value.

//           return  login('eve.holt@reqres.in','greg')
//             .then((response) => {
//              expect(response).to.equal('QpwL5tke4Pnpja7X4');
//             })
//         });
//     });

    describe('incorrect email and password', () => {
        it('should return error',() => {
            let response = { error: "user not found" };
            let loginValue = new Promise((resolve, reject) => {
            resolve(response);
            });
        
            let spy = chai.spy.on(Api, "loginError", (returns) => loginValue);
            
            expect( () => {
                login('eve.holtrtrt@reqres.in','dgasfdgsafdfsadsad').to.throw(
                    Error, `Oops! Incorrect username or password. Check your details and try again.`
                )
            });
        });
    });

    describe('password not found', () => {
        it('should return error',() => {

           // after(() => chai.spy.restore(wh)) // use this!

        let response = { error: "Missing password" };
        let loginValue = new Promise((resolve, reject) => {
          resolve(response);
        });
        let spy = chai.spy.on(Api, response.error , (returns) => loginValue);
        expect( () => {
            login('eve.holtrtrt@reqres.in','').to.throw(
                Error,  `Oops! Missing password, make sure to fill in your password and try again.`
            )
        });
        after(() => chai.spy.restore(response.error))

    });

  });