const { getChatModel: modelToUpdateChat } = require('../getChatModel');

 type chatDataToUpdate = {
  id: string;
  senderId?: string;
  receiverId?: string;
  message?: string;
}

// Define a function to update chat information
const updateChat = async (id: string, updatedChatData: chatDataToUpdate) => {
  console.log(id,updatedChatData,'jhjgvfreer');
  
  if (!id || !updatedChatData) {
    throw new Error('ID and updated chat data must be provided!');
  }

  const chatModel = modelToUpdateChat();

  try {
    // Find the chat by ID
    const chat = await chatModel.findById(id).exec();

    if (!chat) {
      throw new Error('chat not found in the database!');
    }

    // Update user fields based on the updatedUserData object
    for (const key of Object.keys(updatedChatData)) {
      chat[key as keyof chatDataToUpdate] = updatedChatData[key as keyof chatDataToUpdate];

    }

    // Save the updated user document
    const updatedchat = await chat.save();
    if(updatedchat === null)
    return false;

    return true;

  } catch (error) {
    throw new Error(`Error in updating the chat in the database: ${error}`);
  }
};

module.exports = {
  updateChat,
};
