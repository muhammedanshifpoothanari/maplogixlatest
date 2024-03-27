const { createChatRepo: createChatRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const  wrapperTocreateChat  = require('../utility');
type functionTypeToCreateChat = (...args: any[]) => Promise<any>;
type dataAtCreateUseCase = {
  senderId: string;
  receiverId: string;
  message: string;
  timestamp?: Date;
}
  

const createChatExecute: functionTypeToCreateChat = async (dependency: typeof createChatRepository,
   data: dataAtCreateUseCase) => {
  console.log('createLoadUseCase:',data );
  console.log('dependency:', dependency);
  const chatData = await dependency(data);

  if (chatData === null) {
   return false
  }

  return chatData;
};

module.exports = wrapperTocreateChat(createChatRepository, createChatExecute)

