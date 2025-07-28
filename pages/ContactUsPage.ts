import { expect, Locator } from "@playwright/test";
const ContactUsPageLocators = require("../locators/ContactUsPage.locators")


class ContactUsPage {
    private page;
    private nameElement: Locator;
    private emailElement: Locator;
    private subjectElement: Locator;
    private messageElement: Locator;
    private submitButton: Locator;

    constructor(page) {
        this.page = page;
        this.nameElement = page.locator(ContactUsPageLocators.name);
        this.emailElement = page.locator(ContactUsPageLocators.email);
        this.subjectElement = page.locator(ContactUsPageLocators.subject);
        this.messageElement = page.locator(ContactUsPageLocators.message);
        this.submitButton = page.locator(ContactUsPageLocators.submitButton)
    

    }

    async fillForm(name: string, email: string, subject: string, message: string) {
        await this.nameElement.fill(name);
        await this.emailElement.fill(email);
        await this.subjectElement.fill(subject);
        await this.messageElement.fill(message);
        await this.submitButton.click();
        await this.page.waitForLoadState('networkidle');


        expect(await this.page.locator("//h2[normalize-space()='GET IN TOUCH']").isVisible()).toBeTruthy();
    }

}

module.exports = { ContactUsPage }