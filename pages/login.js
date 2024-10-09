class LoginPage {
    constructor(page) {
        this.page = page;  // Ensure 'page' is properly assigned
    }

    async goToLoginPage() {
        await this.page.goto('https://dashboard-stage.socialvenu.com/login');  // Use 'goto' not 'goTo'
    }

    async login(username, password) {
        await this.page.fill('input[name="email"]', username);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('button[type="submit"]');
    }
}

module.exports = LoginPage;
