const { getAllByTruckTypeRepo: getAllByTruckTypeRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByTruckTypeWrapper  = require('../utility');
type functionTypeToGetAllByTruck = (...args: any[]) => Promise<any>;
const getAllBytypeExecute: functionTypeToGetAllByTruck = async (dependency: typeof getAllByTruckTypeRepository,loadType: string) => {
  console.log('getAllByTruckTypeRepository:', );
  console.log('dependency:', dependency);
  const truckData = await dependency(loadType);

  if (truckData === null) {
    return false
  }

  return truckData;
};

module.exports = getAllByTruckTypeWrapper(getAllByTruckTypeRepository, getAllBytypeExecute)

