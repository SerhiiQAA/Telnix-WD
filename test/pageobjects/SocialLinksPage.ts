class SocialPage {
    get linkedInLink() {
        return $('a[href="https://www.linkedin.com/company/telnyx/"]');
    }

    get twitterLink() {
        return $('a[href="https://twitter.com/telnyx"]');
    }

    get facebookLink() {
        return $('a[href="https://www.facebook.com/Telnyx/"]');
    }

    async clickLinkedInLink(): Promise<void> {
        await this.linkedInLink.waitForDisplayed();
        await this.linkedInLink.click();
    }

    async clickTwitterLink(): Promise<void> {
        await this.twitterLink.waitForDisplayed();
        await this.twitterLink.click();
    }

    async clickFacebookLink(): Promise<void> {
        await this.facebookLink.waitForDisplayed();
        await this.facebookLink.click();
    }

    async getWindowHandles(): Promise<string[]> {
        return await browser.getWindowHandles();
    }

    async switchToWindow(handle: string): Promise<void> {
        await browser.switchToWindow(handle);
    }

    async getCurrentUrl(): Promise<string> {
        return await browser.getUrl();
    }

    async closeCurrentWindow(): Promise<void> {
        await browser.closeWindow();
    }
}

export default new SocialPage();