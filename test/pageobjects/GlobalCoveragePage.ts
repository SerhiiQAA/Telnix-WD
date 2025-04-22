class GlobalCoveragePage {
    get firstName() { return $('#FirstName'); }
    get lastName() { return $('#LastName'); }
    get companyEmail() { return $('#Email'); }
    get receiveEmailsCheckbox() { return $('#mktoCheckbox_14265_0'); }
    get submitButton() { return $('[type="submit"]'); }
    get successMsg() { return $('h1 .c-PJLV'); }
    get firstNameErrorMsg() { return $('#ValidMsgFirstName'); }
    get lastNameErrorMsg() { return $('#ValidMsgLastName'); }
    get emailErrorMsg() { return $('#ValidMsgEmail'); }

    async typeFirstName(name: string) {
        await this.firstName.waitForDisplayed();
        await this.firstName.setValue(name);
    }

    async typeLastName(name: string) {
        await this.lastName.waitForDisplayed();
        await this.lastName.setValue(name);
    }

    async typeCompanyEmail(email: string) {
        await this.companyEmail.waitForDisplayed();
        await this.companyEmail.setValue(email);
    }

    async toggleReceiveEmailsCheckbox() {
        await this.receiveEmailsCheckbox.waitForClickable();
        await this.receiveEmailsCheckbox.click();
    }

    async clickSubmitButton() {
        await this.submitButton.waitForClickable();
        await this.submitButton.click();
    }

    async waitForSuccessMessage() {
        await this.successMsg.waitForDisplayed();
    }
}

export default new GlobalCoveragePage();