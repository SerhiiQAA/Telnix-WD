import { $ } from '@wdio/globals';

class CookiePage {
    get CookieCloseButton() { return $('#onetrust-close-btn-container [aria-label="Close"]'); }

    async closeCookieModalIfVisible() {
        const cookieBtn = this.CookieCloseButton;
        const isDisplayed = await cookieBtn.isDisplayed();
    
        if (isDisplayed) {
            await cookieBtn.click();
        }
    }    
}

export default new CookiePage();