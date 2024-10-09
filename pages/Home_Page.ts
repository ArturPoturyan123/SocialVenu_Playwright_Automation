import { Page, expect } from "@playwright/test";
import logger from "../utils/LoggerUtil";

export default class HomePage {
  private readonly createAccountButton = "Create New Account";

  constructor(private page: Page) {}

  async expectcreateAccountButtonToBeVisible() {
    await expect(this.page.getByText(this.createAccountButton)).toBeVisible({
      timeout: 15000,
    }).catch((error) => {
      logger.error(`Error clicking login button: ${error}`);
      throw error; // rethrow the error if needed
    }).then(()=>logger.info("Create New Account button is visible"));
  }
}