const { getChatModel } = require('../getChatModel');

const getAll = async () => {
    const chatModel = getChatModel();
    
    try {
        console.log('getAllRepo');
        
        const chatArray = await chatModel.find().exec();
        
        if (chatArray.length === 0 || !chatArray )
            return false;

        return chatArray;
    } catch (error) {
        throw new Error('Error in getting chat from the database!');
    }
};

module.exports = {
    getAll
}
