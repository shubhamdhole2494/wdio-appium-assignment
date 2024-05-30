import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from "chai";
import testData from "../support/testdata.json" assert { type: "json" };
import { LoginScreen } from "../screen/login.screen.ts";


Given(/^I am on the login screen$/, async () => {

    let isLoginScreenDisplayed = await LoginScreen.validateLoginScreen();
    expect(isLoginScreenDisplayed).to.be.true

});
When(/^I enter valid login credentails$/, async () => {

    await LoginScreen.loginWithValidCredentials(testData.loginCreds.username, testData.loginCreds.password)

});
Then(/^I should login successfully$/, async () => {

    let homeScreenHeaderText = await LoginScreen.validateUserLoggedInSuccessfully();
    expect(homeScreenHeaderText).to.be.equal('Products')
    await driver.reloadSession();
});
When(/^I enter invalid username and valid password$/, async () => {

    await LoginScreen.loginWithInvalidCredentials(testData.invalidUsername.username, testData.invalidUsername.password)

});
Then(/^I should get error message$/, async () => {

    let errorMsgWrongusrText = await LoginScreen.validateErrorMessage();
    expect(errorMsgWrongusrText).to.be.equal('Provided credentials do not match any user in this service.')
    await driver.reloadSession();
});





