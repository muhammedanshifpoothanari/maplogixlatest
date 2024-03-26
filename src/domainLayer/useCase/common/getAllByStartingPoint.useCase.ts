const { getAllByStartingPointRepo: getAllByStartingPointRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByStartingPointWrapper  = require('../utility');
type functionToGetAllByStartingPointRepo = (...args: any[]) => Promise<any>;
const getAllByStartingPointExecute: functionToGetAllByOwnerIdRepo = async (dependency: typeof getAllByStartingPointRepository, currentLocation: string) => {
  console.log('getAllByStartingPointRepository:', );
  console.log('dependency:', dependency);
  const truckData = await dependency(currentLocation);

  if (truckData === null) {
   return false
  }

  return truckData;
};

module.exports = getAllByStartingPointWrapper(getAllByStartingPointRepository, getAllByStartingPointExecute)
