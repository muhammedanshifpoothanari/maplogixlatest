const { getChatModel : modelToGetChatByReceiverId } = require('../getChatModel')
const getAllByReceiverId = async (receiverId: string) => {
    console.log('3 repo');
    console.log(receiverId,'receiverId');
    
    if (!receiverId)
        throw new Error('receiver id was not properly passed to the repository!');

    const chatModel = modelToGetChatByReceiverId();
    try {
        const ChatArray = await chatModel.find({ receiverId: receiverId }).exec();
        if (!ChatArray || ChatArray.length === 0)
            return false;
        
        return ChatArray;

    } catch (error) {
        throw new Error('Error in getting chat from the database by reciever id!');
    }
};

module.exports = {
    getAllByReceiverId
}