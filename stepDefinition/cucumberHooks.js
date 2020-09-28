
const { browser,Status } = require('protractor');
const { After, Before, browser, } = require('cucumber');

const {setDefaultTimout} = require('cucumber');
setDefaultTimout(60*1000);


Before( 'run before any test execution', function(){
    browser.ignorSynchronization=true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(10000);
    browser.waitForAngularEnabled(false).then(r =>{

    } );


})

After( 'take screenShot at scenario failure', async function(scenario){
    if(scenario.result.status===Status.FAILED){
        const screenShot= await browser.takeScreenshot();
        this.attachments(screenShot,"image/png");
    }


})