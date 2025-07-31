import { expect, Locator } from "@playwright/test";
const ContactUsPageLocators = require("../locators/ContactUsPage.locators")


class ContactUsPage {
    private page;
    private nameElement: Locator;
    private emailElement: Locator;
    private subjectElement: Locator;
    private messageElement: Locator;
    private submitButton: Locator;
    private formConfirmationMessage: Locator;

    constructor(page) {
        this.page = page;
        this.nameElement = page.locator(ContactUsPageLocators.name);
        this.emailElement = page.locator(ContactUsPageLocators.email);
        this.subjectElement = page.locator(ContactUsPageLocators.subject);
        this.messageElement = page.locator(ContactUsPageLocators.message);
        this.submitButton = page.locator(ContactUsPageLocators.submitButton)
        this.formConfirmationMessage = page.locator(ContactUsPageLocators.formConfirmationMessage);


    }

async fillForm(name: string, email: string, subject: string, message: string) {
    await this.nameElement.fill(name);
    await this.emailElement.fill(email);
    await this.subjectElement.fill(subject);
    await this.messageElement.fill(message);

    this.page.once('dialog', async (dialog) => {
        expect(dialog.type()).toBe('confirm');
        await dialog.accept();
    });

    await this.submitButton.click();
    await this.page.waitForLoadState('networkidle');

    expect(await this.formConfirmationMessage.isVisible()).toBeTruthy();
}

}

module.exports = { ContactUsPage }