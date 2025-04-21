class CurrencyFilterPage {
    get currencyDropdown() { return $('#currency-filter'); }
    get pricesTablesText() { return $('table tbody'); }

    async selectCurrency(currency: string) {
        await this.currencyDropdown.click();
        await $(`//*[text()="${currency}"]`).click();
    }

    async getTablesText() {
        return await this.pricesTablesText.getText();
    }
}

export default new CurrencyFilterPage();