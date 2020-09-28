const {Given, When, Then, Before, After,} = require('cucumber');
const { element, browser,$ } = require('protractor');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { protractor } = require('protractor/built/ptor');
chai.use(chaiAsPromised);
const expect = chai.expect;

const homePage= require ('../pagesObject/home.page');
const viewProductPage= require('../pagesObject/view.product.page.js');



When(/^I search for "([^"]*)"$/,async function (product) {
    await homePage.getTopSearchFieldMenu(product)

});

Then(/^I enter value$/,async function(){
   await homePage.setTextValueDropp();
   await homePage.setTextValueEnter()

});

When(/^the search results are displayed$/, async function () {
        await expect(viewProductPage.displayedProduct().to.be.true);

});


Then(/^the search results has the "([^"]*)" in it$/, async function (searchProduct) {
   //expect(viewProductPage.verifyElementTextLink()).should.contain(searchProduct);
        const actualText =await viewProductPage.verifyElementTextLink();
        expect(await actualText.to.eventually.include(searchProduct));

});
