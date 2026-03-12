const {test,expect} = require('@playwright/test');
const { config } = require('process');

test('example test', async ({ page }) => {
  await page.goto('/client');
  await expect(page).toHaveTitle("Let's Shop");
  const userEmail = page.locator('#userEmail');
  const userPassword = page.locator('#userPassword');
  const loginButton = page.locator('#login');
  await userEmail.fill('mtms1@yopmail.com');
  await userPassword.fill('@Admin@123456');
  await loginButton.click();
});
