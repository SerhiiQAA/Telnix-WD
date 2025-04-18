class AssistantPage {
    get assistantButton() { return $('.c-bpNouX'); } 
    get assistantTitle() { return $('.c-gRBNgU'); } 
    get assistantMsgField() { return $('.c-fJsHXZ'); } 
    get assistantSentMsgField() { return $('.c-bCIlIy.c-bupPtx'); }
    get assistantSendMsgButton() { return $('.c-cODSYQ.c-gGVcDH'); } 
    get assistantCloseButton() { return $('.c-cPtnfT'); } 
    get assistantAllMessages() { return $$('.c-dEGHBU'); } 

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
        return await this.assistantSentMsgField.getText();
    }

    async isMessageInConversation(message: string): Promise<boolean> {
        const allMessages = await this.assistantAllMessages.map(msg => msg.getText());
        return allMessages.includes(message);
    }
}

export default new AssistantPage();