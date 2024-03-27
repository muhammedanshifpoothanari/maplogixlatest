const { getAllByTruckIdRepo: getAllByTruckIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByTruckIdWrapper  = require('../utility');
type functionToGetAllByTruckIdRepo = (...args: any[]) => Promise<any>;
const getAllByTruckIdExecute: functionToGetAllByTruckIdRepo = async (dependency: typeof getAllByTruckIdRepository, truckId: string) => {
  console.log('2 usecase');
  console.log('getAllBytruckIdRepoRepository:', );
  console.log('dependency:', dependency);
  const bidData = await dependency(truckId);

  if (bidData === null) {
   return false
  }

  return bidData;
};

module.exports = getAllByTruckIdWrapper(getAllByTruckIdRepository, getAllByTruckIdExecute)

