const { unBlockLoadByIdRepo: unBlockLoadByIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const unBlockLoadByIdRepoWrapper  = require('../utility');
type functionToUnBlockLoadByIdRepo = (...args: any[]) => Promise<any>;
const unBlockLoadByIdRepoExecute: functionToUnBlockLoadByIdRepo = async (dependency: typeof unBlockLoadByIdRepository, id: string) => {
  console.log('unBlockLoadByIdRepository:', );
  console.log('dependency:', dependency);
  const loadData = await dependency(id);

  if (loadData === null) {
   return false
  }

  return loadData;
};

module.exports = unBlockLoadByIdRepoWrapper(unBlockLoadByIdRepository, unBlockLoadByIdRepoExecute)
