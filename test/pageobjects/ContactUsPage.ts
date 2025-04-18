class ContactUsPage {
    get reasonForContact() { return $('#Reason_for_Contact__c'); }
    get firstName() { return $('#FirstName'); }
    get lastName() { return $('#LastName'); }
    get email() { return $('#Email'); }
    get phoneNumberExtension() { return $('#Phone_Number_Extension__c'); }
    get phoneNumberBase() { return $('#Phone_Number_Base__c'); }
    get website() { return $('#Website'); }
    get howDidYouHear() { return $('#How_did_you_hear_about_Telnyx_Open__c'); }
    get additionalInfo() { return $('#Form_Additional_Information__c'); }
    get submitButton() { return $('.mktoButton'); }
    get marketingEmailsCheckbox() { return $('[name="Subscription_Opt_In__c"]'); }
    get howCanWeHelpErrorMsg() { return $('#ValidMsgReason_for_Contact__c'); }
    get firstNameErrorMsg() { return $('#ValidMsgFirstName'); }
    get lastNameErrorMsg() { return $('#ValidMsgLastName'); }
    get emailErrorMsg() { return $('#ValidMsgEmail'); }
    get websiteErrorMsg() { return $('#ValidMsgWebsite'); }
    get additionalInfoErrorMsg() { return $('#ValidMsgForm_Additional_Information__c'); }
    get howDidYouHearErrorMsg() { return $('#ValidMsgHow_did_you_hear_about_Telnyx_Open__c'); }

    get successMessage() { return $('h1 .c-PJLV'); }

    async selectReasonForContact(option: string) {
        await this.reasonForContact.selectByVisibleText(option);
    }

    async typeFirstName(name: string) {
        await this.firstName.setValue(name);
    }

    async typeLastName(name: string) {
        await this.lastName.setValue(name);
    }

    async typeEmail(email: string) {
        await this.email.setValue(email);
    }

    async selectCountry(country: string) {
        await this.phoneNumberExtension.selectByVisibleText(country);
    }

    async typePhoneNumber(number: string) {
        await this.phoneNumberBase.setValue(number);
    }

    async typeWebsite(url: string) {
        await this.website.setValue(url);
    }

    async typeHowDidYouHear(info: string) {
        await this.howDidYouHear.setValue(info);
    }

    async typeAdditionalInfo(info: string) {
        await this.additionalInfo.setValue(info);
    }

    async toggleMarketingEmailsCheckbox() {
        await this.marketingEmailsCheckbox.click();
    }

    async clickSubmit() {
        await this.submitButton.click();
    }
}

export default new ContactUsPage();