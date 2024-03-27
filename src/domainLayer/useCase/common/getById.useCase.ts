const { getByLoadIdRepo: getByLoadIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getByLoadIdWrapper  = require('../utility');
type functionToGetByLoadIdRepo = (...args: any[]) => Promise<any>;
const getByLoadIdExecute: functionToGetByLoadIdRepo = async (dependency: typeof getByLoadIdRepository, id: string) => {
  console.log('getByLoadIdRepository:', );
  console.log('dependency:', dependency);
  const loadData = await dependency(id);

  if (loadData === null) {
   return false
  }

  return loadData;
};

module.exports = getByLoadIdWrapper(getByLoadIdRepository, getByLoadIdExecute)

