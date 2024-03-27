const { verifyLoadByIdRepo: verifyLoadByIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const verifyLoadByIdRepoWrapper  = require('../utility');
type functionToVerifyLoadByIdRepo = (...args: any[]) => Promise<any>;
const verifyLoadByIdRepoExecute: functionToVerifyLoadByIdRepo = async (dependency: typeof verifyLoadByIdRepository, id: string) => {
  console.log('verifyLoadByIdRepository:', );
  console.log('dependency:', dependency);
  const loadData = await dependency(id);

  if (loadData === null) {
   return false
  }

  return loadData;
};

module.exports = verifyLoadByIdRepoWrapper(verifyLoadByIdRepository, verifyLoadByIdRepoExecute)
