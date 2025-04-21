import CurrencyFilterPage from '../pageobjects/CurrencyFilterPage';

describe('Currency Selection on /pricing/messaging page', () => {
    beforeEach(async () => {
        await browser.url('/pricing/messaging');
    });

    it('should change currency from USD to EUR', async () => {
        await CurrencyFilterPage.selectCurrency('EUR');
        const bodyText = await CurrencyFilterPage.getTableText();
        expect(bodyText).toContain('€');
    });

    it('should change currency back from EUR to USD', async () => {
        await CurrencyFilterPage.selectCurrency('EUR');
        await CurrencyFilterPage.selectCurrency('USD');
        const bodyText = await CurrencyFilterPage.getTableText();
        expect(bodyText).toContain('$');
        expect(bodyText).not.toContain('€');
    });
});
