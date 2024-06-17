import loginPageAutomate from '../pageobjects/loginPage.js';

describe("Login Page Test",()=>{

it("Loin with valid credentials", async()=>{
    await loginPageAutomate.gotoLoginpage();
    await loginPageAutomate.loginPageprocedure("tomsmith","SuperSecretPassword!");
    
    

})


})