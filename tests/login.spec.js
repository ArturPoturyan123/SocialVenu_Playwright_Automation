const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login');

test('Login test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    // Call the methods from the LoginPage class
    await loginPage.goToLoginPage();
    await loginPage.login('arthurp@doublecoconut.com', '123456');
    
    // Add any assertions or additional steps here
    // expect(await page.url()).toBe('https://dashboard-stage.socialvenu.com/profile/accounts');  // Example assertion
});
