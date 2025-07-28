import { expect, Locator } from "@playwright/test";
const MainPageLocators = require("../locators/MainPage.locators")

class MainPage {
    private page;
    private logo: Locator;
    private cartLink: Locator;
    private contactUsLink: Locator;
    constructor(page) {
        this.page = page;
        this.logo = page.locator(MainPageLocators.logoImage)
        this.cartLink = page.locator(MainPageLocators.cartLink);
        this.contactUsLink = page.locator(MainPageLocators.contactUsLink);

    }

    async goTo(): Promise<any>{
        await this.page.goto('https://automationexercise.com/');
        await this.page.waitForLoadState('networkidle');
        expect(await this.logo.isVisible()).toBeTruthy();
    }

    async clickOnCart() {
        await this.cartLink.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickOnContactUs() {
        await this.contactUsLink.click();
        await this.page.waitForLoadState('networkidle');
    }


}

module.exports = { MainPage }