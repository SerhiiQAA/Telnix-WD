import ContactUsPage from '../pageobjects/ContactUsPage';
import CookiePage from '../pageobjects/CookiePage';
import { faker } from '@faker-js/faker';

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const phoneNumber = faker.string.numeric(8);
const website = faker.internet.url();
const additionalInfo = faker.lorem.sentence();

describe('Contact Us Page Form', () => {
    
    beforeEach(async () => {
        await browser.url('/contact-us');
        await CookiePage.closeCookieModalIfVisible();
    });

    it('Talk to an expert with valid data', async () => {
        await ContactUsPage.clickSubmit();
        await ContactUsPage.selectReasonForContact('Support');
        await ContactUsPage.typeFirstName(firstName);
        await ContactUsPage.typeLastName(lastName);
        await ContactUsPage.typeEmail(email);
        await ContactUsPage.selectCountry('Ukraine (+380)');
        await ContactUsPage.typePhoneNumber(phoneNumber);
        await ContactUsPage.typeWebsite(website);
        await ContactUsPage.typeHowDidYouHear('Online search');
        await ContactUsPage.typeAdditionalInfo(additionalInfo);
        await ContactUsPage.toggleMarketingEmailsCheckbox();
        await ContactUsPage.clickSubmit();
        expect(await ContactUsPage.successMessage.getText()).toContain('Thank you.');
    });

    it('Talk to an expert with empty fields', async () => {
        await ContactUsPage.clickSubmit();
        await ContactUsPage.howCanWeHelpErrorMsg.waitForExist();
        expect(await ContactUsPage.howCanWeHelpErrorMsg.getText()).toContain('This field is required.');
    });

    it('Talk to an expert with empty "Please describe your request" field', async () => {
        await ContactUsPage.selectReasonForContact('Support');
        await ContactUsPage.typeFirstName(firstName);
        await ContactUsPage.typeLastName(lastName);
        await ContactUsPage.typeEmail(email);
        await ContactUsPage.selectCountry('Ukraine (+380)');
        await ContactUsPage.typePhoneNumber(phoneNumber);
        await ContactUsPage.typeWebsite(website);
        await ContactUsPage.typeHowDidYouHear('Online search');
        await ContactUsPage.typeAdditionalInfo(additionalInfo);
        await ContactUsPage.clickSubmit();
        expect(await ContactUsPage.successMessage.getText()).toContain('Thank you.');
    });

    it('Talk to an expert with empty "First name" field', async () => {
        await ContactUsPage.selectReasonForContact('Support');
        await ContactUsPage.typeLastName(lastName);
        await ContactUsPage.typeEmail(email);
        await ContactUsPage.selectCountry('Ukraine (+380)');
        await ContactUsPage.typePhoneNumber(phoneNumber);
        await ContactUsPage.typeWebsite(website);
        await ContactUsPage.typeHowDidYouHear('Online search');
        await ContactUsPage.typeAdditionalInfo(additionalInfo);
        await ContactUsPage.clickSubmit();
        await ContactUsPage.firstNameErrorMsg.waitForExist();
        expect(await ContactUsPage.firstNameErrorMsg.getText()).toContain('This field is required.');
    });

    it('Talk to an expert with empty "Last name" field', async () => {
        await ContactUsPage.selectReasonForContact('Support');
        await ContactUsPage.typeFirstName(firstName);
        await ContactUsPage.typeEmail(email);
        await ContactUsPage.selectCountry('Ukraine (+380)');
        await ContactUsPage.typePhoneNumber(phoneNumber);
        await ContactUsPage.typeWebsite(website);
        await ContactUsPage.typeHowDidYouHear('Online search');
        await ContactUsPage.typeAdditionalInfo(additionalInfo);
        await ContactUsPage.clickSubmit();
        await ContactUsPage.lastNameErrorMsg.waitForExist();
        expect(await ContactUsPage.lastNameErrorMsg.getText()).toContain('This field is required.');
    });

    it('Talk to an expert with empty "Business email" field', async () => {
        await ContactUsPage.clickSubmit();
        await ContactUsPage.selectReasonForContact('Support');
        await ContactUsPage.typeFirstName(firstName);
        await ContactUsPage.typeLastName(lastName);
        await ContactUsPage.selectCountry('Ukraine (+380)');
        await ContactUsPage.typePhoneNumber(phoneNumber);
        await ContactUsPage.typeWebsite(website);
        await ContactUsPage.typeHowDidYouHear('Online search');
        await ContactUsPage.typeAdditionalInfo(additionalInfo);
        await ContactUsPage.clickSubmit();
        await ContactUsPage.emailErrorMsg.waitForExist();
        expect(await (await ContactUsPage.emailErrorMsg.getText()).replace(/\n/g, ' ')).toContain('Must be valid email. example@yourdomain.com');
    });

    it('Talk to an expert with empty "Phone number" field', async () => {
        await ContactUsPage.selectReasonForContact('Support');
        await ContactUsPage.typeFirstName(firstName);
        await ContactUsPage.typeLastName(lastName);
        await ContactUsPage.typeEmail(email);
        await ContactUsPage.typeWebsite(website);
        await ContactUsPage.typeHowDidYouHear('Online search');
        await ContactUsPage.typeAdditionalInfo(additionalInfo);
        await ContactUsPage.clickSubmit();
        expect(await ContactUsPage.successMessage.getText()).toContain('Thank you.');
    });

    it('Talk to an expert with empty "Company website" field', async () => {
        await ContactUsPage.selectReasonForContact('Support');
        await ContactUsPage.typeFirstName(firstName);
        await ContactUsPage.typeLastName(lastName);
        await ContactUsPage.typeEmail(email);
        await ContactUsPage.selectCountry('Ukraine (+380)');
        await ContactUsPage.typePhoneNumber(phoneNumber);
        await ContactUsPage.typeHowDidYouHear('Online search');
        await ContactUsPage.typeAdditionalInfo(additionalInfo);
        await ContactUsPage.clickSubmit();
        await ContactUsPage.websiteErrorMsg.waitForExist();
        expect(await ContactUsPage.websiteErrorMsg.getText()).toContain('This field is required.');
    });

    it('Talk to an expert with empty "Additional Info"', async () => {
        await ContactUsPage.selectReasonForContact('Support');
        await ContactUsPage.typeFirstName(firstName);
        await ContactUsPage.typeLastName(lastName);
        await ContactUsPage.typeEmail(email);
        await ContactUsPage.selectCountry('Ukraine (+380)');
        await ContactUsPage.typePhoneNumber(phoneNumber);
        await ContactUsPage.typeWebsite(website);
        await ContactUsPage.typeHowDidYouHear('Online search');
        await ContactUsPage.clickSubmit();
        await ContactUsPage.additionalInfoErrorMsg.waitForExist();
        expect(await ContactUsPage.additionalInfoErrorMsg.getText()).toContain('This field is required.');
    });

    it('Talk to an expert with empty "How did you hear about Telnyx?" field', async () => {
        await ContactUsPage.selectReasonForContact('Support');
        await ContactUsPage.typeFirstName(firstName);
        await ContactUsPage.typeLastName(lastName);
        await ContactUsPage.typeEmail(email);
        await ContactUsPage.selectCountry('Ukraine (+380)');
        await ContactUsPage.typePhoneNumber(phoneNumber);
        await ContactUsPage.typeWebsite(website);
        await ContactUsPage.typeAdditionalInfo(additionalInfo);
        await ContactUsPage.clickSubmit();
        await ContactUsPage.howDidYouHearErrorMsg.waitForExist();
        expect(await ContactUsPage.howDidYouHearErrorMsg.getText()).toContain('This field is required.');
    });
});