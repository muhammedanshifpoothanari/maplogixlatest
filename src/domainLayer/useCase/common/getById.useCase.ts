const { getByTruckIdRepo: getByTruckIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getByTruckIdWrapper  = require('../utility');
type functionToGetByTruckIdRepo = (...args: any[]) => Promise<any>;
const getByTruckIdExecute: functionToGetByTruckIdRepo = async (dependency: typeof getByTruckIdRepository, id: string) => {
  console.log('getByTruckIdRepository:', );
  console.log('dependency:', dependency);
  const truckData = await dependency(id);

  if (truckData === null) {
   return false
  }

  return truckData;
};

module.exports = getByTruckIdWrapper(getByTruckIdRepository, getByTruckIdExecute)

