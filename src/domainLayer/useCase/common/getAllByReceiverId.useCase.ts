const { getAllByReceiverIdRepo: getAllByReceiverIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByReceiverIdWrapper  = require('../utility');
type functionToGetAllByReceiverIdRepo = (...args: any[]) => Promise<any>;
const getAllByReceiverIdExecute: functionToGetAllByReceiverIdRepo = async (dependency: typeof getAllByReceiverIdRepository, receiverId: string) => {
  console.log('2 usecase');
  console.log('getAllByReceiverIdRepoRepository:', );
  console.log('dependency:', dependency);
  const chatData = await dependency(receiverId);

  if (chatData === null) {
   return false
  }

  return chatData;
};

module.exports = getAllByReceiverIdWrapper(getAllByReceiverIdRepository, getAllByReceiverIdExecute)

