const { updateChatRepo: updateChatRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const  updateWrapperToupdateChat  = require('../utility');
type functionToUpdateChat = (...args: any[]) => Promise<any>;
type dataAtupdateChatUseCase = {
  id: string;
  senderId: string;
  receiverId: string;
  message: string;
  timestamp: Date;
}
  
const updateChatExecute: functionToUpdateChat = async (dependency: typeof updateWrapperToupdateChat,data: dataAtupdateChatUseCase) => {
  console.log('updateChatRepository:', );
  console.log('dependency:', dependency);
  const id: string = data.id;
  console.log(data,'at usecase');
  
  const chatData = await dependency(id, data);

  if (chatData === null) {
   return false
  }

  return chatData;
};

module.exports = updateWrapperToupdateChat(updateChatRepository, updateChatExecute)
