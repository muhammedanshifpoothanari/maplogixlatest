const { verifyTruckByIdRepo: verifyTruckByIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const verifyTruckByIdRepoWrapper  = require('../utility');
type functionToVerifyTruckByIdRepo = (...args: any[]) => Promise<any>;
const verifyTruckByIdRepoExecute: functionToVerifyTruckByIdRepo = async (dependency: typeof verifyTruckByIdRepository, id: string) => {
  console.log('verifyTruckByIdRepository:', );
  console.log('dependency:', dependency);
  const truckData = await dependency(id);

  if (truckData === null) {
   return false
  }

  return truckData;
};

module.exports = verifyTruckByIdRepoWrapper(verifyTruckByIdRepository, verifyTruckByIdRepoExecute)
