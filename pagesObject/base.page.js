const { browser } = require('protractor');

class BasePage{


    async getSite(url){
     return browser.get(url);

    }

   async getPageTitle(pageTitle){
         return browser.get(pageTitle);
    }
}
module.exports = new BasePage;