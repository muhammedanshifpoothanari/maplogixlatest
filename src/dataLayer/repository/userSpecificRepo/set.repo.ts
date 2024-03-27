const { getChatModel: modelToCreateChat } = require('../getChatModel');
const {SendToQueue: send} = require('../../../presenterLayer/router/rabbitmq')
interface ChatDocument extends Document {
  senderId: string;
  receiverId: string;
  message: string;
}
  
const createChat = async (chatData: ChatDocument) => {
  console.log(chatData,'@@@@');
  
  if (!chatData) {
    throw new Error('chatData was not properly passed to the repository!');
  }

  const chatModel = modelToCreateChat();

  try {
    const newChat = new chatModel({
        ...chatData,
    });

    const doneTheJob = await newChat.save();

    if(!doneTheJob)
    return false;
    await send({ text: true });
    return true;
  } catch (error) {
    throw new Error(`Error in creating the chat in the database: ${error}`);
  }
};


module.exports = {
    createChat,
};
