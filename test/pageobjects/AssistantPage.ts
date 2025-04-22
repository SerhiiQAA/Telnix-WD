import { $, $$ } from '@wdio/globals';

class AssistantPage {
    get assistantOpenButton() { return $('.c-bGYNvC > svg'); }
    get messageInput() { return $('.c-fJsHXZ'); }
    get inputField() { return $('[placeholder="Type your question here"]'); }
    get sendButton() { return $('.c-gGVcDH > svg'); }
    get userMessages() { return $$('.c-bupPtx'); }

    async openAssistant() {
        await this.assistantOpenButton.click();
    }

    async typeMessage(message: string) {
        await this.inputField.setValue(message);
    }

    async sendMessage() {
        await this.sendButton.click();
    }

    async waitForAndGetLastUserMessageText(): Promise<string> {
        await browser.waitUntil(async () => {
            return await (await this.userMessages).length > 0;
        }, {
            timeout: 10000,
            timeoutMsg: 'User message not displayed after sending'
        });

        const messages = await this.userMessages;
        return messages[await messages.length - 1].getText();
    }
}

export default new AssistantPage();