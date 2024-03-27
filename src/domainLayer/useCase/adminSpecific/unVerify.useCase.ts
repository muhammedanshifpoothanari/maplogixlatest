const { unVerifyLoadByIdRepo: unVerifyLoadByIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const unVerifyLoadByIdRepoWrapper  = require('../utility');
type functionToUnVerifyLoadByIdRepo = (...args: any[]) => Promise<any>;
const unVerifyLoadByIdRepoExecute: functionToUnVerifyLoadByIdRepo = async (dependency: typeof unVerifyLoadByIdRepository, id: string) => {
  console.log('unVerifyLoadByIdRepository:', );
  console.log('dependency:', dependency);
  const loadData = await dependency(id);

  if (loadData === null) {
   return false
  }

  return loadData;
};

module.exports = unVerifyLoadByIdRepoWrapper(unVerifyLoadByIdRepository, unVerifyLoadByIdRepoExecute)
