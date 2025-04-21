import AssistantPage from '../pageobjects/AssistantPage';
import CookiePage from '../pageobjects/CookiePage';
import { faker } from '@faker-js/faker'; 

describe('Assistant Functionality', () => {
    beforeEach(async () => {
        await browser.url('/');
        await CookiePage.closeCookieModalIfVisible();
        await AssistantPage.openAssistant();
    });
    
    it('Check the ability to send a message', async () => {
        const randomMessage = faker.lorem.sentence(); 
        const isSendButtonEnabled = await AssistantPage.assistantSendMsgButton.isEnabled(); 
        expect(isSendButtonEnabled).toBe(false); 
        await AssistantPage.typeMessage(randomMessage); 
        await AssistantPage.sendMessage(); 
        await AssistantPage.assistantSentMsgField.waitForDisplayed();
        const sentMessage = await AssistantPage.getSentMessageText(); 
        expect(sentMessage).toContain(randomMessage); 
    });
});