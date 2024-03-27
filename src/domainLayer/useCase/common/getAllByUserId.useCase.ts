const { getAllByUserIdRepo: getAllByUserIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByUserIdWrapper  = require('../utility');
type functionToGetAllByUserIdRepo = (...args: any[]) => Promise<any>;
const getAllByUserIdExecute: functionToGetAllByUserIdRepo = async (dependency: typeof getAllByUserIdRepository, UserId: string) => {
  console.log('getAllByUserIdRepoRepository:', );
  console.log('dependency:', dependency);
  const bidData = await dependency(UserId);

  if (bidData === null) {
   return false
  }

  return bidData;
};

module.exports = getAllByUserIdWrapper(getAllByUserIdRepository, getAllByUserIdExecute)

