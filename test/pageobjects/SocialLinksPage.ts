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

    
    async clickTwitterLink(): Promise<void> {
        await this.twitterLink.waitForDisplayed();
        await this.twitterLink.scrollIntoView();
        await this.twitterLink.waitForClickable();
        await this.twitterLink.click();
    }
    
    async clickFacebookLink(): Promise<void> {
        await this.facebookLink.waitForDisplayed();
        await this.facebookLink.scrollIntoView();
        await this.facebookLink.waitForClickable();
        await this.facebookLink.click();
    }
    
    async clickLinkedInLink(): Promise<void> {
        await this.linkedInLink.waitForDisplayed();
        await this.linkedInLink.scrollIntoView();
        await this.linkedInLink.waitForClickable();
        await this.linkedInLink.click();
    }

    async verifyLinkidinUrl(currentUrl: string, expected: string | RegExp, platformName: string): Promise<void> {
        if (platformName === 'LinkedIn') {
            const urlObj = new URL(currentUrl);
            const redirect = urlObj.searchParams.get('sessionRedirect');
            const finalUrl = redirect ? decodeURIComponent(redirect) : currentUrl;
            expect(finalUrl).toContain('linkedin.com/company/telnyx');
        } else if (expected instanceof RegExp) {
            expect(currentUrl).toMatch(expected);
        } else {
            expect(currentUrl).toContain(expected);
        }
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