import {browser, element, ExpectedConditions} from "protractor";
let EC=ExpectedConditions;
class viewProductPage{



    async displayedProduct(){
        const productDisplayed = await element(by.xpath("//h2//a//span[contains(text(),'Iceworks 5000 Portable')])[1]"))
           await  browser.wait(EC.presenceOf(productDisplayed),15000)
               return productDisplayed.isDisplayed();
    }

    async selectProduct(){
        const productSelect = await element(by.xpath("//h2//a//span[contains(text(),'Iceworks 5000 Portable')])[1]"))
        await  browser.wait(EC.presenceOf(productSelect),15000)
        return productSelect.click();
    }


    async verifyElementTextLink(){

            const productDisplayed = await element(by.xpath("//h2//a//span[contains(text(),'Iceworks 5000 Portable')])[1]"))
            await  browser.wait(EC.visibilityOf(productDisplayed),15000)
            return productDisplayed.getText();
    }









}
module.exports= new viewProductPage();