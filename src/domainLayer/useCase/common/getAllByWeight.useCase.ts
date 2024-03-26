const { getAllByWeightRepo: getAllByWeightRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByWeightWrapper  = require('../utility');
type functionToGetAllByWeightRepo = (...args: any[]) => Promise<any>;
const getAllByWeightExecute: functionToGetAllByWeightRepo = async (dependency: typeof getAllByWeightRepository, capacity: number , sort: number = 1) => {
  console.log('getAllByWeightRepository:', );
  console.log('dependency:', dependency);
  const truckData = await dependency(capacity, sort);

  if (truckData === null) {
   return false
  }

  return truckData;
};

module.exports = getAllByWeightWrapper(getAllByWeightRepository, getAllByWeightExecute)

