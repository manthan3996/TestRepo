class productsPage {
    constructor(page) {
        this.page = page;
    }

    async addProductToCart(productName) {
        const productCard = this.page.locator(".product");
        const count = await productCard.count();
        for (let i = 0; i < count; i++) {
            if (await productCard.nth(i).locator("h4").textContent() === productName) {
                await productCard.nth(i).getByRole("button", { name: 'ADD TO CART' }).click();
                break;
            }
        }
    }
}

module.exports = productsPage;