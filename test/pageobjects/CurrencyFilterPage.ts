class CurrencyFilterPage {
    get currencyDropdown() { return $('#currency-filter'); }
    get pricesTablesText() { return $('table tbody'); }
    get usdOption() { return $('//*[text()="USD"]'); }
    get eurOption() { return $('//*[text()="EUR"]'); }
    get CookieCloseButton() { return $('#onetrust-close-btn-container [aria-label="Close"]'); }

    async selectCurrency(currency: string) {
        await this.currencyDropdown.click();
        let option;
        if (currency === 'USD') {
            option = this.usdOption;
        } else if (currency === 'EUR') {
            option = this.eurOption;
        } else {
            throw new Error(`Currency "${currency}" is not supported`);
        }
        await option.waitForDisplayed();
        await option.click();
    }

    async getTablesText() {
        return await this.pricesTablesText.getText();
    }     
}

export default new CurrencyFilterPage();