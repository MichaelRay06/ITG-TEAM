const {browser, element, ExpectedConditions} = require('protractor');
const EC = ExpectedConditions;

class PasswordHome{



/*
constructor(){
    this.passwordField=  element(by.id('ap_password'));
    this.singInLink= element(by.id('signInSubmit'));
    }
*/

    async getPasswordFiels(password){
        const passwordField= await  element(by.id('ap_password'));
  await  browser.wait(EC.visibilityOf(passwordField),15000)
        return passwordField.sendKeys(password)

    }

    async getSingInLink(){
        const singInLink= await element(by.id('signInSubmit'));
        await browser.wait(EC.elementToBeClickable(singInLink),15000)
        return await singInLink.click();

    }








}

module.exports =new PasswordHome();