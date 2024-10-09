import { test } from '@playwright/test'
import LoginPage from '../pages/LoginPage';
// const LoginPage = require('../pages/login');


test('Login test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.quickLogin('arthurp@doublecoconut.com', '123456');

});
