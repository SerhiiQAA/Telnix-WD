import CurrencyFilterPage from '../pageobjects/CurrencyFilterPage';

describe('Currency Selection on Multiple Pages', () => {
    const pages = [
        // '/pricing/messaging',
        // '/pricing/elastic-sip',
        // '/pricing/call-control',
        // '/pricing/numbers',
        // '/pricing/video-api',
        // '/pricing/number-lookup',
        // '/pricing/verify-api',
        // '/pricing/fax',
        // '/pricing/iot-data-plans',
        // '/pricing/networking',
        '/pricing/storage'
    ];

    pages.forEach((pageUrl) => {
        describe(`Testing Currency Selection on ${pageUrl}`, () => {
            beforeEach(async () => {
                await browser.url(pageUrl);
                await browser.waitUntil(
                    async () => (await browser.getTitle()).length > 0,
                    {
                        timeout: 10000, 
                        timeoutMsg: `Page ${pageUrl} not upload`,
                    }
                );
            });

            it('Check currency change from USD to EUR', async () => {
                await CurrencyFilterPage.selectCurrency('EUR');
                const bodyText = await CurrencyFilterPage.getBodyText();
                expect(bodyText).toContain('€');
            });

            it('Check currency change from EUR to USD', async () => {
                await CurrencyFilterPage.selectCurrency('EUR');
                await CurrencyFilterPage.selectCurrency('USD');
                const bodyText = await CurrencyFilterPage.getBodyText();
                expect(bodyText).toContain('$');
                expect(bodyText).not.toContain('€');
            });
        });
    });
});