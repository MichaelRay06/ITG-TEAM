const {Given, When, Then} = require('cucumber');
const { browser } = require('protractor');


const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const basePage= require ('../pagesObject/base.page.js');
const homePage= require ('../pagesObject/home.page.js');
const passwordPage= require ('../pagesObject/password.page.js');
const userNamePage= require ('../pagesObject/userName.page.js');
const VerifySingingPage= require ('../pagesObject/verify.singin.page');


    Given(/^I am on Amazon site$/,async function () {
        basePage.getSite('https://www.amazon.co.uk/').then(r => {});
});


When(/^I click Sign-in$/,async function () {
   await homePage.getSingInLink();

    // return browser.actions().mouseMove(element(by.xpath("//span[text()='Hello, Sign in']")).mouseMove(element(by.xpath("(//span[text()='Sign in'])[1]")).click())).perform();
});

When(/^enter valid user name as "([^"]*)"$/,async function (username) {
   await userNamePage.getUserNameField(username);

});
When(/^I Continue$/,async function () {
    await userNamePage.getContinueLink().then(r => {});

});

When(/^enter valid password as "([^"]*)"$/, async function (password) {
    await passwordPage.getPasswordFiels(password);
});

When(/^I signed in$/, async function () {
   await  passwordPage.getSingInLink()

});

Then(/^I could verify as am successfully logged with user name as "([^"]*)"$/,async  function (loggedInUserName) {
    const actualUseName = await VerifySingingPage.getVerifySingIn()
         expect(await actualUseName.to.eventually.include(loggedInUserName))
});


