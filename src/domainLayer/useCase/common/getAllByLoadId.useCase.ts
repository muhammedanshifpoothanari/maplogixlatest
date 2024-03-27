const { getAllByLoadIdRepo: getAllByLoadIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByLoadIdWrapper  = require('../utility');
type functionToGetAllByLoadIdRepo = (...args: any[]) => Promise<any>;
const getAllByLoadIdExecute: functionToGetAllByLoadIdRepo = async (dependency: typeof getAllByLoadIdRepository, loadId: string) => {
  console.log('getAllByloadIdRepoRepository:', );
  console.log('dependency:', dependency);
  const bidData = await dependency(loadId);

  if (bidData === null) {
   return false
  }

  return bidData;
};

module.exports = getAllByLoadIdWrapper(getAllByLoadIdRepository, getAllByLoadIdExecute)

