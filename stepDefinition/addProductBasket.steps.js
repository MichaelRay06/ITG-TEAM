const {Given, When, Then} = require('cucumber');
const { browser, element } = require('protractor');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

 const addBasketPage = require ('../pagesObject/addToBasket.page.js')
const itemTotalPricePage= require ('../pagesObject/itemTotalPrice.page.js')
const viewProductPage= require ('../pagesObject/view.product.page.js')





When(/^iceworks 5000 was displayed click on$/, async function(){
   await  viewProductPage.selectProduct();



});
Then(/^i add iceworks 5000 to my basket$/, async function(){
   await  addBasketPage.getAddToBasketLink();

});


When(/^I check my basket total$/, function () {
   const actualBasketCount  =itemTotalPricePage.getBasketTotal();
   expect(actualBasketCount).to.equal('1');

});


Then(/^it should match the price of the item added into basket$/, async function () {
    const actualToTalPrice =itemTotalPricePage.getPriceTotal();
     assert.equal(await actualToTalPrice, ' £19.97')
});
