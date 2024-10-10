import { expect, test } from "@playwright/test";
import { request } from "http";

test.describe.parallel("API Testing SocialVenu Dashbord Login", () => {
  test("API Test - Get accessToken and use X-Auth-Token header", async ({
    request,
  }) => {
    const loginResponse = await request.post(
      "https://sv-api-rc.socialvenu.com/api/v1/auth/customer",
      {
        data: {
          email: "arthurp@doublecoconut.com",
          password: "123456",
        },
      }
    );

    expect(loginResponse.status()).toBe(200);

    const responseBody = await loginResponse.json();
    const accessToken = responseBody.accessToken;

    console.log(`Access Token: ${accessToken}`);

    const anotherApiResponse = await request.get(
      "https://sv-api-rc.socialvenu.com/api/v1/auth/customer",
      {
        headers: {
          "X-Auth-Token": accessToken,
        },
      }
    );

    expect(anotherApiResponse.status()).toBe(200);

    const secondResponseBody = await anotherApiResponse.json();
    console.log(secondResponseBody);
  });
});
