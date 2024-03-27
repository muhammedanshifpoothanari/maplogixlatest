const { getAllByWeightRepo: getAllByWeightRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByWeightWrapper  = require('../utility');
type functionToGetAllByWeightRepo = (...args: any[]) => Promise<any>;
const getAllByWeightExecute: functionToGetAllByWeightRepo = async (dependency: typeof getAllByWeightRepository, loadWeight: number , sort: number = 1) => {
  console.log('getAllByWeightRepository:', );
  console.log('dependency:', dependency);
  const loadData = await dependency(loadWeight, sort);

  if (loadData === null) {
   return false
  }

  return loadData;
};

module.exports = getAllByWeightWrapper(getAllByWeightRepository, getAllByWeightExecute)

