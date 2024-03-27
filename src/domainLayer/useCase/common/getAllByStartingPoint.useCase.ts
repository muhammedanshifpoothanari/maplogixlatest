const { getAllByStartingPointRepo: getAllByStartingPointRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByStartingPointWrapper  = require('../utility');
type functionToGetAllByStartingPointRepo = (...args: any[]) => Promise<any>;
const getAllByStartingPointExecute: functionToGetAllByOwnerIdRepo = async (dependency: typeof getAllByStartingPointRepository, startingPoint: string) => {
  console.log('getAllByStartingPointRepository:', );
  console.log('dependency:', dependency);
  const loadData = await dependency(startingPoint);

  if (loadData === null) {
   return false
  }

  return loadData;
};

module.exports = getAllByStartingPointWrapper(getAllByStartingPointRepository, getAllByStartingPointExecute)
