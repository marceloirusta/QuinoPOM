import { test, expect } from '@playwright/test';
const { PageManager } = require('../pageManager/PageManager');

test('Automation exercise', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    const pageManager = new PageManager(page);
    const mainPage = pageManager.getMainPage()

    await mainPage.goTo();
    await mainPage.clickOnContactUs()
    
    const contactUsPage = pageManager.getContactUsPage()
    await contactUsPage.fillForm('Marcelo', 'marcelo@ejemplo.com', 'Subject Example', 'Message example')
});

