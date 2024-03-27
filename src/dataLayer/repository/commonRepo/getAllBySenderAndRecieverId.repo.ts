const { getChatModel : modelToGetChatBySenderAndReceiverId } = require('../getChatModel')
const getAllBySenderAndReceiverId = async (senderId: string,receiverId: string) => {
    if (!senderId && !receiverId)
        throw new Error('sender and reciever id was not properly passed to the repository!');

    const chatModel = modelToGetChatBySenderAndReceiverId();
    try {
        const ChatArray = await chatModel.find({ senderId: senderId, receiverId: receiverId }).exec();
        if (!ChatArray || ChatArray.length === 0)
            return false;
        
        return ChatArray;
    } catch (error) {
        throw new Error('Error in getting Chat from the database by sender and reciever id!');
    }
};

module.exports = {
    getAllBySenderAndReceiverId
}