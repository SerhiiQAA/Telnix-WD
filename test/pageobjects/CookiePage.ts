import { $ } from '@wdio/globals';

class CookiePage {
    get CookieCloseButton() {
        return $('#onetrust-close-btn-container [aria-label="Close"]');
    }

    async closeCookieModalIfVisible() {
        const cookieBtn = this.CookieCloseButton;

        try {
            await cookieBtn.waitForExist();
            if (await cookieBtn.isDisplayed()) {
                await cookieBtn.click();
                await cookieBtn.waitForDisplayed({ reverse: true });
            }
        } catch {
        }
    }
}

export default new CookiePage();