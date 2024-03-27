const { getChatModel : modelToGetChatBySenderId } = require('../getChatModel')
const getAllBySenderId = async (senderId: string) => {

    if (!senderId)
        throw new Error('sender id was not properly passed to the repository!');

    const senderModel = modelToGetChatBySenderId();

    try {
        const ChatArray = await senderModel.find({ senderId: senderId }).exec();
        
        if (!ChatArray || ChatArray.length === 0)
            return false;
        
        return ChatArray;
    } catch (error) {
        throw new Error('Error in getting Bid from the database by load id!');
    }
};

module.exports = {
    getAllBySenderId
}