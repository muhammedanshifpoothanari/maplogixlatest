const { getAllByLoadTypeRepo: getAllByLoadTypeRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByLoadTypeWrapper  = require('../utility');
type functionTypeToGetAllByType = (...args: any[]) => Promise<any>;
const getAllBytypeExecute: functionTypeToGetAllByType = async (dependency: typeof getAllByLoadTypeRepository,loadType: string) => {
  console.log('getAllByLoadTypeRepository:', );
  console.log('dependency:', dependency);
  const loadData = await dependency(loadType);

  if (loadData === null) {
    return false
  }

  return loadData;
};

module.exports = getAllByLoadTypeWrapper(getAllByLoadTypeRepository, getAllBytypeExecute)

