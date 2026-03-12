const {
    test,
    expect
} = require('@playwright/test');
const {
    config
} = require('process');
const loginPage = require('../pages/loginPage');

test('example test', async ({
    page
}) => {
    await page.goto('/client');
    await expect(page).toHaveTitle("Let's Shop");
    const login = new loginPage(page);
    await login.loginToApplication('mtms1@yopmail.com', 'Admin@123456');
    await page.locator(".card-body b").first().waitFor();
    const productName = "ZARA COAT 3";
    const products = page.locator(".card-body");
    const count = await products.count();
    for(let i=0;i<count;i++){
        if(await products.nth(i).locator("b").textContent() === productName){
          await products.nth(i).locator(".w-10").click();
        }
    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();
    await page.getByRole('button', {
        name: 'Checkout'
    }).click();
});