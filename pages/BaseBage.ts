import { Page } from "@playwright/test";

export class BasePage {
  private readonly saveButton: string = "#bottom-bar-save-action";
  protected readonly page: Page; // Changed to protected if needed in derived classes

  constructor(page: Page) {
    this.page = page; // Initialize the page property
  }

  // Function to click the save button
  async clickSaveButton(): Promise<void> {
    await this.page.waitForTimeout(2000); // Consider removing if unnecessary
    await this.isElementPresent(this.saveButton);
    await this.page.click(this.saveButton); // Removed force option
  }

  // Function to return a URL string
  getUrl(url: string): string {
    return url; // Consider any logic needed to construct the URL
  }

  // Function to open a URL
  async open(url: string): Promise<void> {
    await this.page.goto(this.getUrl(url)); // Playwright uses goto to visit a URL
    await this.page.waitForTimeout(2000); // Consider removing if unnecessary
  }

  // Function to simulate the browser back button
  async clickBrowserBackButton(): Promise<void> {
    await this.page.goBack(); // This is fine as is
  }

  // Function to clear all text fields
  async eraseAllTextField(element: string): Promise<void> {
    await this.page.fill(element, ""); // This works correctly for clearing the field
  }

  // Function to wait for an element to be visible and not disabled
  async waitElementToPresent(element: string): Promise<void> {
    await this.page.waitForSelector(element, { state: "visible" }); // This is good
  }

  // Function to generate a random number as a string with leading zeros
  generateRandomNumber(): string {
    const randomNumber = Math.floor(Math.random() * 1000000000);
    return `${randomNumber}`.padStart(10, "0"); // This works as expected
  }

  // Function to check if an element is present
  async isElementPresent(element: string): Promise<void> {
    await this.page.waitForSelector(element, { state: "attached" }); // Good use of wait
  }

  // Function to check if an element is not present using XPath
  async isElementNotPresentByXpath(element: string): Promise<void> {
    const locator = this.page.locator(`xpath=${element}`);
    const count = await locator.count();
    
    if (count > 0) {
      throw new Error(`Element ${element} should not exist, but it does.`);
    }
  }

  // Function to check if an element is present using XPath
  async isElementPresentByXpath(element: string): Promise<void> {
    await this.page.waitForSelector(`xpath=${element}`, { state: "attached" });
  }

  // Function to generate a random numeric string of a given length
  getRandomNumericString(length: number): string {
    const sb: number[] = [];
    for (let i = 0; i < length; i++) {
      sb.push(Math.floor(Math.random() * 10));
    }
    return sb.join("");
  }

  // Function to return a test string with a random numeric suffix
  getString(): string {
    return "test " + this.getRandomNumericString(5);
  }
}
