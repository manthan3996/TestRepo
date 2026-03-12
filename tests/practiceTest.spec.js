const {test,expect} = require('@playwright/test');
const productsPage = require('../pages/productsPage');

test("Test Page", async ({page})=>{
    await page.goto('seleniumPractise/#/');
    await expect(page).toHaveTitle("GreenKart - veg and fruits kart");
    const products = new productsPage(page);
    await products.addProductToCart("Cucumber - 1 Kg");
    await page.pause();
});