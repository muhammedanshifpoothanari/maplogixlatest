const { getAllByOwnerIdRepo: getAllByOwnerIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByOwnerIdWrapper  = require('../utility');
type functionToGetAllByOwnerIdRepo = (...args: any[]) => Promise<any>;
const getAllByOwnerIdExecute: functionToGetAllByOwnerIdRepo = async (dependency: typeof getAllByOwnerIdRepository, ownerId: string) => {
  console.log('getAllByOwnerIdRepoRepository:', );
  console.log('dependency:', dependency);
  const loadData = await dependency(ownerId);

  if (loadData === null) {
   return false
  }

  return loadData;
};

module.exports = getAllByOwnerIdWrapper(getAllByOwnerIdRepository, getAllByOwnerIdExecute)

