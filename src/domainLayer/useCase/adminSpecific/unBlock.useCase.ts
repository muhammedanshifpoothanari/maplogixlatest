const { unBlockTruckByIdRepo: unBlockTruckByIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const unBlockTruckByIdRepoWrapper  = require('../utility');
type functionToUnBlockTruckByIdRepo = (...args: any[]) => Promise<any>;
const unBlockTruckByIdRepoExecute: functionToUnBlockTruckByIdRepo = async (dependency: typeof unBlockTruckByIdRepository, id: string) => {
  console.log('unBlockTruckByIdRepository:', );
  console.log('dependency:', dependency);
  const loadData = await dependency(id);

  if (loadData === null) {
   return false
  }

  return loadData;
};

module.exports = unBlockTruckByIdRepoWrapper(unBlockTruckByIdRepository, unBlockTruckByIdRepoExecute)
