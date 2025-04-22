import AssistantPage from '../pageobjects/AssistantPage';
import { faker } from '@faker-js/faker';

describe('Assistant chat functionality', () => {
    it('should send a message and display it in the chat', async () => {
        await browser.url('/');
        await AssistantPage.openAssistant();
        const testMessage = faker.lorem.sentence();
        await AssistantPage.typeMessage(testMessage);
        await AssistantPage.sendMessage();
        const lastText = await AssistantPage.waitForAndGetLastUserMessageText();
        expect(lastText).toContain(testMessage);
    });
});