const { blockTruckByIdRepo: blockTruckByIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const blockTruckByIdWrapper  = require('../utility');
type functionToBlockTruckByIdRepo = (...args: any[]) => Promise<any>;
const blockTruckByIdExecute: functionToBlockTruckByIdRepo = async (dependency: typeof blockTruckByIdRepository, id: string) => {
  console.log('blockTruckByIdRepository:', );
  console.log('dependency:', dependency);
  const truckData = await dependency(id);

  if (truckData === null) {
   return false
  }

  return truckData;
};

module.exports = blockTruckByIdWrapper(blockTruckByIdRepository, blockTruckByIdExecute)

