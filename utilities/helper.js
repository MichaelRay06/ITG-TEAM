import {browser, protractor} from "protractor";

const EC = protractor.ExpectedConditions;

const waitElementToBeVisible = function (elm) {

    browser.wait(EC.visibilityOf(elm), 15000);
};



const waitElementToBeClickable = function (elm) {

    browser.wait(EC.elementToBeClickable(elm), 15000);
};



const waitUntilReady = function (elm) {
    return browser.wait(function () {
        return elm.isPresent();
    }, 10000).then(function () {
        return browser.wait(function () {
            return elm.isDisplayed();
        }, 10000);
    });
};

const waitElementToDisappear = function (locator) {
    browser.wait(function () {
        return browser.isElementPresent(locator) //if element is already present, this line will evaluate to true
            .then(function (presenceOfElement) {
                return !presenceOfElement
            }); // this modifies the previous line so that it evaluates to false until the element is no longer present.
    }, 10000).then(r => {

    });
};

const waitForCheckboxToBeChecked = function (elem) {
    browser.wait(function () {
        return (elem.getAttribute('checked')).then(function (isElementChecked) {
            return (isElementChecked);
        });
    }, 10000);
};

/**
 * Usage: selectDropdownByNumber ( element, index)
 * element : select element
 * index : index in the dropdown, 1 base.
 */
const selectDropdownByNumber = function (element, index, milliseconds) {
    element.findElements(by.tagName('option'))
        .then(function (options) {
            options[index].click();
        });
    if (typeof milliseconds != 'undefined') {
        browser.sleep(milliseconds);
    }
};

/**
 * Usage: selectDropdownByText (selector, item)
 * selector : select element
 * item : option(s) in the dropdown.
 */
const selectDropdownByText = function selectOption(element, item, milliseconds) {
    let desiredOption;
    element.findElements(by.tagName('option'))
        .then(function findMatchingOption(options) {
            options.some(function (option) {
                option.getText().then(function doesOptionMatch(text) {
                    if (text.indexOf(item) != -1) {
                        desiredOption = option;
                        return true;
                    }
                });
            });
        })
        .then(function clickOption() {
            if (desiredOption) {
                desiredOption.click();
            }
        });
    if (typeof milliseconds != 'undefined') {
        browser.sleep(milliseconds);
    }
};

const setBrowserParams = function () {
    browser.driver.manage().window().setSize(browser.params.screenWidth, browser.params.screenHeight).then(r => {

    });
    browser.ignoreSynchronization = true;
};

exports.waitElementToBeVisisble = waitElementToBeVisible;
exports.waitElementToBeClickable = waitElementToBeClickable;
exports.waitElementToDisappear = waitElementToDisappear;
exports.waitUntilReady = waitUntilReady;
exports.waitForCheckboxToBeChecked = waitForCheckboxToBeChecked;
exports.selectDropdownByNumber = selectDropdownByNumber;
exports.selectDropdownByText = selectDropdownByText;
exports.setBrowserParams = setBrowserParams;
