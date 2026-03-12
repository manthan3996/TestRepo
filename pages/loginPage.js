class loginPage{
    constructor(page){
        this.page = page;
        this.userEmail = page.locator('#userEmail');
        this.userPassword = page.locator('#userPassword');
        this.loginButton = page.locator('#login');
    }

    async loginToApplication(email,password){
        await this.userEmail.fill(email);
        await this.userPassword.fill(password);
        await this.loginButton.click();
    }
}

module.exports = loginPage;