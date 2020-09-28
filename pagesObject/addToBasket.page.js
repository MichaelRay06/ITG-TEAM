
const {browser, element, ExpectedConditions, protractor} = require('protractor');
const EC = ExpectedConditions;

class AddToBasketPage{

    async getAddToBasketLink() {
        const addBasketLink = await  browser.element(by.css('a-button.a-spacing-small.a-button-primary.a-button-icon')).click();
        await browser.wait(EC.visibilityOf(addBasketLink), 30000)
        return await addBasketLink.click();
    }








}
module.exports= new AddToBasketPage();