class CurrencyFilterPage {
    get currencyDropdown() { return $('#currency-filter'); }
    get bodyText() { return $('body'); }

    async selectCurrency(currency: string) {
        await this.currencyDropdown.click();
        await $(`//*[text()="${currency}"]`).click();
    }

    async getBodyText() {
        return await this.bodyText.getText();
    }
}

export default new CurrencyFilterPage();