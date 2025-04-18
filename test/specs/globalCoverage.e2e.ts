import GlobalCoveragePage from '../pageobjects/GlobalCoveragePage';
import { faker } from '@faker-js/faker';

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();

describe('Global Coverage Page Form', () => {
    
    beforeEach(async () => {
        await browser.url('/global-coverage');
    });

    it('Download full coverage with valid data', async () => {
        await GlobalCoveragePage.typeFirstName(firstName);
        await GlobalCoveragePage.typeLastName(lastName);
        await GlobalCoveragePage.typeCompanyEmail(email);
        await GlobalCoveragePage.toggleReceiveEmailsCheckbox();
        await GlobalCoveragePage.clickSubmitButton();
        expect(await GlobalCoveragePage.successMsg.getText()).toContain('Global coverage');
    });

    it('Download full coverage with empty fields', async () => {
        await GlobalCoveragePage.clickSubmitButton();
        await GlobalCoveragePage.firstNameErrorMsg.waitForExist({ timeout: 5000 });
        expect(await GlobalCoveragePage.firstNameErrorMsg.getText()).toContain('This field is required.');
    });

    it('Download full coverage with empty First Name', async () => {
        await GlobalCoveragePage.typeLastName(lastName);
        await GlobalCoveragePage.typeCompanyEmail(email);
        await GlobalCoveragePage.clickSubmitButton();
        await GlobalCoveragePage.firstNameErrorMsg.waitForExist({ timeout: 5000 });
        expect(await GlobalCoveragePage.firstNameErrorMsg.getText()).toContain('This field is required.');
    });

    it('Download full coverage with empty Last Name', async () => {
        await GlobalCoveragePage.typeFirstName(firstName);
        await GlobalCoveragePage.typeCompanyEmail(email);
        await GlobalCoveragePage.clickSubmitButton();
        await GlobalCoveragePage.lastNameErrorMsg.waitForExist({ timeout: 5000 });
        expect(await GlobalCoveragePage.lastNameErrorMsg.getText()).toContain('This field is required.');
    });

    it('Download full coverage with empty Company Email', async () => {
        await GlobalCoveragePage.typeFirstName(firstName);
        await GlobalCoveragePage.typeLastName(lastName);
        await GlobalCoveragePage.clickSubmitButton();
        await GlobalCoveragePage.emailErrorMsg.waitForExist({ timeout: 5000 });
        expect(await (await GlobalCoveragePage.emailErrorMsg.getText()).replace(/\n/g, ' ')).toContain('Must be valid email. example@yourdomain.com');
    });
});
