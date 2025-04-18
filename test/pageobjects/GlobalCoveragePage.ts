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
        await this.firstName.setValue(name);
    }

    async typeLastName(name: string) {
        await this.lastName.setValue(name);
    }

    async typeCompanyEmail(email: string) {
        await this.companyEmail.setValue(email);
    }

    async toggleReceiveEmailsCheckbox() {
        await this.receiveEmailsCheckbox.click();
    }

    async clickSubmitButton() {
        await this.submitButton.click();
    }
}

export default new GlobalCoveragePage();