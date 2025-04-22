import { $, $$ } from '@wdio/globals';

class AssistantPage {
    get assistantOpenButton() { return $('.c-bGYNvC > svg'); }
    get messageInput() { return $('.c-fJsHXZ'); }
    get inputField() { return $('[placeholder="Type your question here"]'); }
    get sendButton() { return $('.c-gGVcDH > svg'); }
    get userMessages() { return $$('.c-bupPtx'); }

    async openAssistant() {
        await this.assistantOpenButton.waitForDisplayed({ timeout: 15000 }); 
        await this.assistantOpenButton.scrollIntoView();
        await this.assistantOpenButton.waitForClickable({ timeout: 15000 });
        await this.assistantOpenButton.click();
        await browser.pause(2000); 
        console.log('Assistant opened successfully.');
    }

    async typeMessage(message: string) {
        await this.inputField.waitForDisplayed({ timeout: 15000 }); 
        await this.inputField.click();
        await this.inputField.setValue(message);
    }

    async sendMessage() {
        await this.sendButton.waitForClickable({ timeout: 15000 });  
        await this.sendButton.scrollIntoView();
        await this.sendButton.click();
    }

    async waitForAndGetLastUserMessageText(): Promise<string> {
        await browser.waitUntil(async () => {
            const messages = await this.userMessages;
            return await messages.length > 0;
        }, {
            timeout: 20000, 
            timeoutMsg: 'User message not displayed after sending'
        });

        const allUserMessages = await this.userMessages;
        if (await allUserMessages.length === 0) {
            throw new Error('No user messages found after sending');
        }

        const lastMessage = allUserMessages[await allUserMessages.length - 1];
        await lastMessage.scrollIntoView();
        await lastMessage.waitForDisplayed(); 
        console.log('User message displayed: ', await lastMessage.getText());

        return await lastMessage.getText();
    }
}

export default new AssistantPage();