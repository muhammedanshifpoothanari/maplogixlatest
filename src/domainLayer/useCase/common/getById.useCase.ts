const { getAllByChatIdRepo: getAllByChatIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getByChatIdWrapper  = require('../utility');

type functionToGetAllByChatIdRepo = (...args: any[]) => Promise<any>;

const getByChatIdExecute: functionToGetAllByChatIdRepo = async (dependency: typeof getAllByChatIdRepository, id: string) => {
  console.log('getAllByChatIdRepository:', );
  console.log('dependency:', dependency);
  const chatData = await dependency(id);

  if (chatData === null) {
   return false
  }

  return chatData;
};

module.exports = getByChatIdWrapper(getAllByChatIdRepository, getByChatIdExecute)

