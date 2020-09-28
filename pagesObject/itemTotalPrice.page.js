
const {browser, element, ExpectedConditions, protractor} = require('protractor');
const EC = ExpectedConditions;

class ItemTotalPricePage {


    async getBasketTotal() {
        const basketTotal = await element(by.css('#nav-cart-count'))
        await browser.wait(EC.visibilityOf(basketTotal), 30000)
        return basketTotal.getText();

    }

    async getPriceTotal() {
        const priceTotal = await element(by.css('#hlb-subcart .a-color-price'))
        await browser.wait(EC.visibilityOf(priceTotal), 30000)
        return  priceTotal.getText();
    }
}
module.exports= new ItemTotalPricePage();