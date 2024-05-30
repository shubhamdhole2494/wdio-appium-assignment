import {BasePage} from "./baseScreen.ts";
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

let platform = argv['platform'];

export class BaseAppElement {
    public static Element(locator: string) {
        return new BasePage(locator);
    }
}

const SELECTORS:any= {
    loginScreenMenuBtnAPK: '//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView',
    loginScreenMenuBtnIPA: `//XCUIElementTypeButton[@name="tab bar option menu"]`,
    loginBtnAPK: '//android.view.ViewGroup[@content-desc="menu item log in"]',
    loginBtnIPA: `//XCUIElementTypeOther[@name="menu item log in"]`,
    usernameInputFieldAPK: '//android.widget.EditText[@content-desc="Username input field"]',
    usernameInputFieldIPA: `//XCUIElementTypeTextField[@name="Username input field"]`,
    passwordInputFieldAPK: '//android.widget.EditText[@content-desc="Password input field"]',
    passwordInputFieldIPA: `//XCUIElementTypeSecureTextField[@name="Password input field"]`,
    loginBtn1APK: '//android.view.ViewGroup[@content-desc="Login button"]',
    loginBtn1IPA: `//XCUIElementTypeOther[@name="Login button"]`,
    homeScreenHeaderAPK: '//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView',
    homeScreenHeaderIPA: `//XCUIElementTypeStaticText[@name="Products"]`,
    errorMsgWrongusrIPA: `//XCUIElementTypeStaticText[@name="Provided credentials do not match any user in this service."]`
   

    
};


export class LoginScreen extends BaseAppElement{

    static loginScreenMenuBtn() { return this.Element(SELECTORS[`loginScreenMenuBtn${platform}`]) };
    static loginBtn() { return this.Element(SELECTORS[`loginBtn${platform}`]) };
    static usernameInputField() { return this.Element(SELECTORS[`usernameInputField${platform}`]) };
    static passwordInputField() { return this.Element(SELECTORS[`passwordInputField${platform}`]) };
    static loginBtn1() { return this.Element(SELECTORS[`loginBtn1${platform}`]) };
    static homeScreenHeader() { return this.Element(SELECTORS[`homeScreenHeader${platform}`]) };
    static errorMsgWrongusr() {return this.Element(SELECTORS[`errorMsgWrongusr${platform}`])};
 

    static async validateLoginScreen(){
        await this.loginScreenMenuBtn().waitForDisplayed();
        return await this.loginScreenMenuBtn().isDisplayed();
    }

    static async loginWithValidCredentials(userName:string,password:string){
       await this.loginScreenMenuBtn().click();
       await this.loginBtn().waitForDisplayed();
       await this.loginBtn().click();
       await this.usernameInputField().waitForDisplayed();
       await driver.pause(5000);
       await this.usernameInputField().addValue(userName);
       await this.passwordInputField().addValue(password);
       await this.loginBtn1().waitForEnabled();
       await this.loginBtn1().click();
       await this.homeScreenHeader().waitForDisplayed();

    }

    static async loginWithInvalidCredentials(userName:string,password:string){
        await this.loginScreenMenuBtn().click();
        await this.loginBtn().waitForDisplayed();
        await this.loginBtn().click();
        await this.usernameInputField().waitForDisplayed();
        await driver.pause(5000);
        await this.usernameInputField().addValue(userName);
        await this.passwordInputField().addValue(password);
        await this.loginBtn1().waitForEnabled();
        await this.loginBtn1().click();
        await this.errorMsgWrongusr().waitForDisplayed();
        
 
     }
   

    static async validateUserLoggedInSuccessfully(){
        await this.homeScreenHeader().waitForDisplayed();
        return  await this.homeScreenHeader().getVisibleText();
    }
    static async validateErrorMessage(){
        await this.errorMsgWrongusr().waitForDisplayed();
        return await this.errorMsgWrongusr().getVisibleText();
    }

}

