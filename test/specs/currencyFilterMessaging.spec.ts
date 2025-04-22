import CurrencyFilterPage from '../pageobjects/CurrencyFilterPage';
import CookiePage from '../pageobjects/CookiePage';

describe('Currency Selection on /pricing/messaging page', () => {
    beforeEach(async () => {
        await browser.url('/pricing/messaging');
        await CookiePage.closeCookieModalIfVisible();
    });

    it('should change currency from USD to EUR', async () => {
        await CurrencyFilterPage.selectCurrency('EUR');
        const bodyText = await CurrencyFilterPage.getTablesText();
        expect(bodyText).toContain('€');
    });

    it('should change currency back from EUR to USD', async () => {
        await CurrencyFilterPage.selectCurrency('EUR');
        await CurrencyFilterPage.selectCurrency('USD');
        const bodyText = await CurrencyFilterPage.getTablesText();
        expect(bodyText).toContain('$');
        expect(bodyText).not.toContain('€');
    });
});