const { unVerifyTruckByIdRepo: unVerifyTruckByIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const unVerifyTruckByIdRepoWrapper  = require('../utility');
type functionToUnVerifyTruckByIdRepo = (...args: any[]) => Promise<any>;
const unVerifyTruckByIdRepoExecute: functionToUnVerifyTruckByIdRepo = async (dependency: typeof unVerifyTruckByIdRepository, id: string) => {
  console.log('unVerifyTruckByIdRepository:', );
  console.log('dependency:', dependency);
  const truckData = await dependency(id);

  if (truckData === null) {
   return false
  }

  return truckData;
};

module.exports = unVerifyTruckByIdRepoWrapper(unVerifyTruckByIdRepository, unVerifyTruckByIdRepoExecute)
