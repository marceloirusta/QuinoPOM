const {MainPage} = require('../pages/MainPage');
const {ContactUsPage} = require('../pages/ContactUsPage');


class PageManager{
    private page
    private mainPage
    private contactUsPage
    constructor(page) {
        this.page = page;
        this.mainPage = new MainPage(this.page);
        this.contactUsPage = new ContactUsPage(this.page)
    }

    async getMainPage() {
        return this.mainPage;
    }

    async getContactUsPage() {
        return this.contactUsPage;
    }
}

module.exports = {PageManager}