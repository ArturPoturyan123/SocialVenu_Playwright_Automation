
import {Page} from "@playwright/test";
export default class LoginPage {

    private readonly usernameInputSelector = 'input[name="email"]';
    private readonly passwordInputSelector = 'input[name="password"]';
    private readonly loginButtonSelector = 'button[type="submit"]';

    
    // constructor(page) {
    //     this.page = page;  
    // }

    constructor (private page:Page){

    }

    async goToLoginPage() {
        await this.page.goto('https://dashboard-stage.socialvenu.com/login');
    }

    async login(username, password) {
        await this.page.fill('input[name="email"]', username);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('button[type="submit"]');
    }
}

// module.exports = LoginPage;
