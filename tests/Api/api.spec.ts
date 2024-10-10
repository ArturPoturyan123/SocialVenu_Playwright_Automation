import { expect, test } from "@playwright/test";
import { request } from "http";

test.describe.parallel("API Testing SocialVenu Dashbord Login", () => {
  const baseUrl = "https://dashboard-release.socialvenu.com";
  test("Simple test response status", async ({ request }) => {
    const response = await request.get(`${baseUrl}/login`);
    expect(response.status()).toBe(200);
  });
});
