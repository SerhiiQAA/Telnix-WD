class CurrencyFilterPage {
    get currencyDropdown() { return $('#currency-filter'); }
    get pricesTablesText() { return $('table tbody'); }
    get usdOption() { return $('//*[text()="USD"]'); }
    get eurOption() { return $('//*[text()="EUR"]'); }

    async selectCurrency(currency: string) {
        await this.currencyDropdown.waitForDisplayed();
        await this.currencyDropdown.scrollIntoView();
        await this.currencyDropdown.waitForClickable();
        await this.currencyDropdown.click();

        let option;
        switch (currency) {
            case 'USD':
                option = this.usdOption;
                break;
            case 'EUR':
                option = this.eurOption;
                break;
            default:
                throw new Error(`Currency "${currency}" is not supported`);
        }

        await option.waitForDisplayed();
        await option.scrollIntoView();
        await option.waitForClickable();
        await option.click();
    }

    async getTablesText() {
        await this.pricesTablesText.waitForDisplayed();
        return await this.pricesTablesText.getText();
    }
}

export default new CurrencyFilterPage();