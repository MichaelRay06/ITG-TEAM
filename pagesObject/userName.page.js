const {browser, element, ExpectedConditions} = require('protractor');
const EC = ExpectedConditions;

class UserNamePage{

/*constructor(){
    this.usernameField =element(by.id('ap_email'));
    this.continueLink =element(by.id('continue'));
   }*/



 async getUserNameField(username){
    const usernameField = await element(by.id('ap_email'));
    await browser.wait(EC.visibilityOf(usernameField), 15000)
    return usernameField.sendKeys(username)
}

async getContinueLink() {
    const continueLink = await element(by.id('continue'));
    await browser.wait(EC.elementToBeClickable(continueLink), 15000)
    return await continueLink.click();


    }



}
module.exports= new UserNamePage();

