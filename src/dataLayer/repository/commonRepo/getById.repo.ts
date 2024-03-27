const { getChatModel : modelToGetChatById } = require('../getChatModel')
const getByChatId = async (id: string) => {
    if (!id)
        throw new Error('chat id was not properly passed to the repository!');

    const chatModel = modelToGetChatById();
    try {
        const chatArray = await chatModel.findById(id).exec();

        if (!chatArray || chatArray.length === 0)
            return false;
        
        return chatArray;
    } catch (error) {
        throw new Error('Error in getting chat from the database by chat-id!');
    }
};

module.exports = {
    getByChatId
}