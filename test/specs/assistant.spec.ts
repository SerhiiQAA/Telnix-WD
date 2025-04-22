import AssistantPage from '../pageobjects/AssistantPage';

describe('Assistant chat functionality', () => {
    it('should send a message and display it in the chat', async () => {
        await browser.url('/');
        await AssistantPage.openAssistant();

        const testMessage = 'Hello from test!';
        await AssistantPage.typeMessage(testMessage);
        await AssistantPage.sendMessage();

        const lastText = await AssistantPage.waitForAndGetLastUserMessageText();
        expect(lastText).toContain(testMessage);
    });
});