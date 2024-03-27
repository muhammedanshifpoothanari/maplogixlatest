const { getAllBySenderIdRepo: getAllBySenderIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllBySenderIdWrapper  = require('../utility');

type functionToGetAllBySenderIdRepo = (...args: any[]) => Promise<any>;

const getAllBySenderIdExecute: functionToGetAllBySenderIdRepo = async (dependency: typeof getAllBySenderIdRepository, senderId: string) => {
  console.log('getAllBySenderIdRepoRepository:', );
  console.log('dependency:', dependency);
  const chatData = await dependency(senderId);

  if (chatData === null) {
   return false
  }

  return chatData;
};

module.exports = getAllBySenderIdWrapper(getAllBySenderIdRepository, getAllBySenderIdExecute)

