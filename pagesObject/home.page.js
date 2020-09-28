


const {browser, element, ExpectedConditions, protractor} = require('protractor');
const EC = ExpectedConditions;


class HomePage {

    /*    constructor(){

            this.singInLink= element(by.xpath("//span[text()='Hello, Sign in']"));

        }*/


    async getSingInLink() {
        const singInLink = await element(by.css("#nav-link-accountList [class='nav-line-1']"));
        await browser.wait(EC.visibilityOf(singInLink), 30000)
        return await singInLink.click();
    }


    async getTopSearchFieldMenu(product) {
        const searchMenu = await element(by.id('twotabsearchtextbox'))
        await browser.wait(EC.visibilityOf(searchMenu), 15000)
        return searchMenu.sendKeys(product)

    }
    async setTextValueDropp(){
       const textVlueDown=  element(by.id('twotabsearchtextbox'))
        textVlueDown.sendKeys(protractor.Key.ARROW_DOWN)

    }
    async setTextValueEnter(){
        const textVlueENTER=  element(by.id('twotabsearchtextbox'))
        textVlueENTER.sendKeys(protractor.Key.ENTER)

    }
}

module.exports= new HomePage();

