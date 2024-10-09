import { test, expect } from '@playwright/test'
import LoginPage from '../pages/login';
// const LoginPage = require('../pages/login');


test('Login test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.goToLoginPage();
    await loginPage.login('arthurp@doublecoconut.com', '123456');
    

});
