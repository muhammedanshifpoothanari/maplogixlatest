const { getAllBySenderAndRecieverIdRepo: getAllBySenderAndReceiverIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllBySenderAndReceiverIdWrapper  = require('../utility');
type functionToGetAllBySenderAndReceiverIdRepo = (...args: any[]) => Promise<any>;
const getAllBySenderAndReceiverIdExecute: functionToGetAllBySenderAndReceiverIdRepo = async (dependency: typeof getAllBySenderAndReceiverIdRepository, senderId: string, receiverId: string) => {
  console.log('getAllBySenderAndReceiverIdRepoRepository:', );
  console.log('dependency:', dependency);
  const chatData = await dependency(senderId, receiverId);

  if (chatData === null) {
   return false
  }

  return chatData;
};

module.exports = getAllBySenderAndReceiverIdWrapper(getAllBySenderAndReceiverIdRepository, getAllBySenderAndReceiverIdExecute)

