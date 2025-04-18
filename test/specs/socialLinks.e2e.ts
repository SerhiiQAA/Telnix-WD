import SocialPage from '../pageobjects/SocialLinksPage';

describe('Social Media Links Navigation', () => {
    before(async () => {
        await browser.url('/');
    });

    const links = [
        {
            name: 'LinkedIn',
            clickMethod: SocialPage.clickLinkedInLink,
            expectedUrl: 'https://www.linkedin.com/company/telnyx/',
        },
        {
            name: 'Twitter',
            clickMethod: SocialPage.clickTwitterLink,
            expectedUrl: /https:\/\/(twitter|x)\.com\/telnyx/,
        },
        {
            name: 'Facebook',
            clickMethod: SocialPage.clickFacebookLink,
            expectedUrl: 'https://www.facebook.com/Telnyx/',
        },
    ];

    links.forEach(({ name, clickMethod, expectedUrl }) => {
        it(`Check the ${name} link in the footer`, async () => {
            await clickMethod();
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
            if (expectedUrl instanceof RegExp) {
                await expect(currentUrl).toMatch(expectedUrl);
            } else {
                await expect(currentUrl).toContain(expectedUrl);
            }
            await SocialPage.closeCurrentWindow();
            await SocialPage.switchToWindow(handles[0]);
        });
    });
});
