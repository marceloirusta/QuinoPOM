const ContactUsPageLocators = {
    name: "//input[@data-qa='name']",
    email: "//input[@data-qa='email']",
    subject: "//input[@data-qa='subject']",
    message: "#message",
    submitButton: "//input[@data-qa='submit-button']",
    formConfirmationMessage: "(//div[normalize-space()='Success! Your details have been submitted successfully.'])[1]"

}

module.exports = ContactUsPageLocators;