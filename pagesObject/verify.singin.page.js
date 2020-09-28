const {browser, element, ExpectedConditions} = require('protractor');
const EC = ExpectedConditions;


class VerifySingingPage{

    constructor(){
      this.verifySingInLink= element(by.css('a#nav-link-accountList'));
    }

    getVerifySingIn(){
        browser.wait(EC.visibilityOf(this.verifySingInLink),15000)
        return this.getVerifySingIn().getText();
    }

    }
    module.exports= new VerifySingingPage();