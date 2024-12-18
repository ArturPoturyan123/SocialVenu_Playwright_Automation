import { Page, expect } from "@playwright/test";
import HomePage from "./Home_Page";
import logger from "../utils/LoggerUtil";
import findValidElement from "../utils/SelfHealingUtill";
import { BasePage } from "../pages/BaseBage";




export default class LoginPage extends BasePage {
    private readonly usernameInputSelector = 'input[name="email"]';
    private readonly usernameInputSelectors = ["#username",'input[name="username"]', ".username", "//*[@id='username]"];
    private readonly passwordInputSelector = 'input[name="password"]';
    private readonly loginButtonSelector = 'button[type="submit"]';
    
   
    constructor (page:Page){
      super(page);
    }

    async quickLogin(username: string, password: string) {
        await this.navigateToLoginPage();
        await this.fillUsername(username);
        await this.fillPassword(password);
        return await this.clickLoginButton();
      }
  
      async navigateToLoginPage() {
        await this.page.goto("login");
        logger.info("Navigated to dashboard-release.socialvenu.com/login");
      }
    
      async fillUsername(username: string) {
        if (!username) {
            logger.error("Username cannot be empty");
            throw new Error("Username cannot be empty");
        }

        await this.page.locator(this.usernameInputSelector).fill(username);
        logger.info(`Filled username: ${username}`);
    }

    async fillPassword(password: string) {
        if (!password) {
            logger.error("Password cannot be empty");
            throw new Error("Password cannot be empty");
        }

        await this.page.locator(this.passwordInputSelector).fill(password);
        logger.info(`Filled password: ${password}`);
    }
      async fillUsername_selfheal(username: string) {
        let usernameInputLocator = await findValidElement(this.page,this.usernameInputSelectors );
        await usernameInputLocator?.fill(username);
        const enteredValue = await usernameInputLocator?.inputValue();
        expect(enteredValue).toBe(username);
       
      }
      async clickLoginButton() {
        await this.page
          .locator(this.loginButtonSelector)
          .click()
          .catch((error) => {
            logger.error(`Error clicking login button: ${error}`);
            throw error; // rethrow the error if needed
          })
          .then(() => logger.info("Clicked login button"));
    
        const homePage = new HomePage(this.page);
        return homePage;
      }
}