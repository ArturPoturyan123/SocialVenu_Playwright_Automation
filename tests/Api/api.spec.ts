import { expect, test } from "@playwright/test";

test.describe.parallel("API Testing SocialVenu Dashboard Login", () => {
  test("API Test - Post request Login", async ({ request }) => {
    // Login request to get accessToken
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
    expect(responseBody.accessToken).toBeTruthy();
    console.log(`Access Token: ${responseBody.accessToken}`);
    expect(loginResponse.status()).toBe(200);

    // const responseBody = await loginResponse.json();
    // const accessToken = responseBody.accessToken;

    // console.log(`Access Token: ${accessToken}`);

    // // Use the accessToken for another API request
    // const anotherApiResponse = await request.get(
    //   "https://sv-api-rc.socialvenu.com/api/v1/venues",
    //   {
    //     headers: {
    //       "X-Auth-Token": accessToken, // Pass the token in headers
    //     },
    //   }
    // );

    // // Ensure the second request is successful
    // // expect(anotherApiResponse.status()).toBe(200);

    // const secondResponseBody = await anotherApiResponse.json();
    // console.log(secondResponseBody);
  });
});
