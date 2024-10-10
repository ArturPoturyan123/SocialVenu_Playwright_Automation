import { expect,test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import logger from "../utils/LoggerUtil";
import { request } from "http";


test("Login test", async ({ page }) => {
  const loginPage = new LoginPage(page);


  // await loginPage.quickLogin('arthurp@doublecoconut.com', '123456');
  await loginPage.navigateToLoginPage();
  await loginPage.fillUsername("arthurp@doublecoconut.com");
  await loginPage.fillPassword("123456");
  const homePage = await loginPage.clickLoginButton();
  logger.info("Test for login is completed");
  // await page.getByRole("textbox").nth(0).fill("admin");
  // await page.getByRole("textbox",{name:"email"}).fill("arturrrrrrrr");
  // await page.getByPlaceholder("Enter your email").fill("arturrrrrrrr");
  // await page.getByText("Forgot Password").click();


  // await loginPage.fillUsername("arthurp@doublecoconut.com");
  // await loginPage.fillPassword("123456");
  // const homePage = await loginPage.clickLoginButton();
  // await homePage.expectcreateAccountButtonToBeVisible();
});
