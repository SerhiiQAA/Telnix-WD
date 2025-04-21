class CurrencyFilterPage {
    get currencyDropdown() { return $('#currency-filter'); }
    get pricesTablesText() { return $('table tbody'); }
    get CookieCloseButton() { return $('#onetrust-close-btn-container [aria-label="Close"]'); }

    async selectCurrency(currency: string) {
        await this.currencyDropdown.click();
        await $(`//*[text()="${currency}"]`).click();
    }

    async getTablesText() {
        return await this.pricesTablesText.getText();
    }

    async closeCookieModalIfVisible() {
        const cookieBtn = this.CookieCloseButton;
        if (await cookieBtn.isDisplayed()) {
            await cookieBtn.click();
            await cookieBtn.waitForDisplayed({ reverse: true, timeout: 5000 });
        }
    }       
}

export default new CurrencyFilterPage();