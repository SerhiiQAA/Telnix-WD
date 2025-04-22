import SocialPage from '../pageobjects/SocialLinksPage';
import CookiePage from '../pageobjects/CookiePage';

describe('Social Media Links Navigation', () => {
    before(async () => {
        await browser.url('/');
        await CookiePage.closeCookieModalIfVisible();
    });

    const links = [
        {
            name: 'LinkedIn',
            clickMethod: SocialPage.clickLinkedInLink.bind(SocialPage),
            expectedUrl: 'linkedin.com/company/telnyx',
        },
        {
            name: 'Twitter',
            clickMethod: SocialPage.clickTwitterLink.bind(SocialPage),
            expectedUrl: /https:\/\/(twitter|x)\.com\/telnyx/,
        },
        {
            name: 'Facebook',
            clickMethod: SocialPage.clickFacebookLink.bind(SocialPage),
            expectedUrl: 'facebook.com/Telnyx',
        },
    ];

    links.forEach(({ name, clickMethod, expectedUrl }) => {
        it(`Check the ${name} link in the footer`, async () => {
            await clickMethod();
            const handles = await SocialPage.getWindowHandles();
            expect(handles.length).toBeGreaterThan(1);
            await SocialPage.switchToWindow(handles[handles.length - 1]);
            await browser.waitUntil(
                async () => (await SocialPage.getCurrentUrl()) !== 'about:blank',
                { timeout: 10000, timeoutMsg: 'New URL did not load' }
            );
            const currentUrl = await SocialPage.getCurrentUrl();
            await SocialPage.verifyLinkidinUrl(currentUrl, expectedUrl, name);
            await SocialPage.closeCurrentWindow();
            await SocialPage.switchToWindow(handles[0]);
        });
    });
});