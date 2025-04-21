class CurrencyFilterPage {
    get currencyDropdown() { return $('#currency-filter'); }
    get servicesTableText() { return $('table tbody'); }

    async selectCurrency(currency: string) {
        await this.currencyDropdown.click();
        await $(`//*[text()="${currency}"]`).click();
    }

    async getTableText() {
        return await this.servicesTableText.getText();
    }
}

export default new CurrencyFilterPage();