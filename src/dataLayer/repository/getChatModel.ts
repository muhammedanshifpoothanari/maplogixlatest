import mongoose, { Model } from 'mongoose';

interface ChatDocument extends Document {
    senderId: string;
    receiverId: string;
    message: string;
  }
  

// Create a Mongoose model for the chat
const getChatModel = (): Model<ChatDocument> => {
    const entityName = 'chatInfo';
    const { chatSchema } = require('../database/schema/chatInfo.schema');
    console.log('jhdhkjdxcfjkcfv');

    if (!chatSchema)
        throw new Error('chat schema not found!');
    
    return mongoose.model<ChatDocument>(entityName, chatSchema);
};
module.exports = {
    getChatModel
}