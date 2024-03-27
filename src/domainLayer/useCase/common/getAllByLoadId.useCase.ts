const { getAllByLoadIdRepo: getAllByLoadIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByLoadIdWrapper  = require('../utility');
type functionToGetAllByLoadIdRepo = (...args: any[]) => Promise<any>;
const getAllByLoadIdExecute: functionToGetAllByLoadIdRepo = async (dependency: typeof getAllByLoadIdRepository, id: string) => {
  console.log('getAllByLoadIdRepository:', );
  console.log('dependency:', dependency);
  const truckData = await dependency(id);

  if (truckData === null) {
   return false
  }

  return truckData;
};

module.exports = getAllByLoadIdWrapper(getAllByLoadIdRepository, getAllByLoadIdExecute)

