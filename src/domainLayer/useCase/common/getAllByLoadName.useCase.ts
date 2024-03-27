const { getAllByLoadNameRepo: getAllByLoadNameRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByLoadNameWrapper  = require('../utility');
type functionTypeToGetAllByName = (...args: any[]) => Promise<any>;
const getAllByNameExecute: functionTypeToGetAllByName = async (dependency: typeof getAllByLoadNameRepository,loadName: string) => {
  console.log('getAllByLoadNameRepository:', );
  console.log('dependency:', dependency);
  const loadData = await dependency(loadName);

  if (loadData === null) {
    return false
  }

  return loadData;
};

module.exports = getAllByLoadNameWrapper(getAllByLoadNameRepository, getAllByNameExecute)

