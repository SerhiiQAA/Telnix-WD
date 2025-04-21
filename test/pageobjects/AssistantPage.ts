class AssistantPage {
    get assistantButton() { return $('.c-bpNouX'); } 
    get assistantTitle() { return $('.c-gRBNgU'); } 
    get assistantMsgField() { return $('.c-fJsHXZ'); } 
    get assistantSentMsgField() { return $('.c-bCIlIy.c-bupPtx'); }
    get assistantSendMsgButton() { return $('.c-cODSYQ.c-gGVcDH'); } 
    get assistantCloseButton() { return $('.c-cPtnfT'); } 
    get assistantAllMessages() { return $$('.c-dEGHBU'); } 
    get assistantResponseMessages() { return $$('.c-khViZk'); }

    async openAssistant() {
        await this.assistantButton.click();
    }

    async typeMessage(message: string) {
        await this.assistantMsgField.setValue(message);
    }

    async sendMessage() {
        await this.assistantSendMsgButton.click();
    }

    async getSentMessageText(): Promise<string> {
        await this.assistantSentMsgField.waitForDisplayed();
        return await this.assistantSentMsgField.getText();
    }

    async getAssistantResponseCount(): Promise<number> {
        const responses = await this.assistantResponseMessages;
        return responses.length;
    }  
}

export default new AssistantPage();