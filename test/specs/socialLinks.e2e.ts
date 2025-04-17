import SocialPage from '../pageobjects/SocialLinksPage';

describe('Social Media Links Navigation', () => {
    before(async () => {
        await browser.url('/');
    });

    it('Check the Linkidin link in the footer', async () => {
        await SocialPage.clickLinkedInLink();

        const handles = await SocialPage.getWindowHandles();
        await expect(handles.length).toBeGreaterThan(1);

        await SocialPage.switchToWindow(handles[handles.length - 1]);

        await browser.waitUntil(
            async () => (await SocialPage.getCurrentUrl()) !== 'about:blank',
            {
                timeout: 5000,
                timeoutMsg: 'New URL did not load',
            }
        );

        const currentUrl = await SocialPage.getCurrentUrl();
        await expect(currentUrl).toContain('https://www.linkedin.com/company/telnyx/');

        await SocialPage.closeCurrentWindow();
        await SocialPage.switchToWindow(handles[0]);
    });

    it('Check the Twitter link in the footer', async () => {
        await SocialPage.clickTwitterLink();

        const handles = await SocialPage.getWindowHandles();
        await expect(handles.length).toBeGreaterThan(1);

        await SocialPage.switchToWindow(handles[handles.length - 1]);

        await browser.waitUntil(
            async () => (await SocialPage.getCurrentUrl()) !== 'about:blank',
            {
                timeout: 5000,
                timeoutMsg: 'New URL did not load',
            }
        );

        const currentUrl = await SocialPage.getCurrentUrl();
        await expect(currentUrl).toMatch(/https:\/\/(twitter|x)\.com\/telnyx/);

        await SocialPage.closeCurrentWindow();
        await SocialPage.switchToWindow(handles[0]);
    });

    it('Check the Facebook link in the footer', async () => {
        await SocialPage.clickFacebookLink();

        const handles = await SocialPage.getWindowHandles();
        await expect(handles.length).toBeGreaterThan(1);

        await SocialPage.switchToWindow(handles[handles.length - 1]);

        await browser.waitUntil(
            async () => (await SocialPage.getCurrentUrl()) !== 'about:blank',
            {
                timeout: 5000,
                timeoutMsg: 'New URL did not load',
            }
        );

        const currentUrl = await SocialPage.getCurrentUrl();
        await expect(currentUrl).toContain('https://www.facebook.com/Telnyx/');

        await SocialPage.closeCurrentWindow();
        await SocialPage.switchToWindow(handles[0]);
    });
});
