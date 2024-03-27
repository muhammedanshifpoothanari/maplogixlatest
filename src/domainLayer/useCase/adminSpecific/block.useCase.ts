const { blockLoadByIdRepo: blockLoadByIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const blockLoadByIdWrapper  = require('../utility');
type functionToBlockLoadByIdRepo = (...args: any[]) => Promise<any>;
const blockLoadByIdExecute: functionToBlockLoadByIdRepo = async (dependency: typeof blockLoadByIdRepository, id: string) => {
  console.log('blockLoadByIdRepository:', );
  console.log('dependency:', dependency);
  const loadData = await dependency(id);

  if (loadData === null) {
   return false
  }

  return loadData;
};

module.exports = blockLoadByIdWrapper(blockLoadByIdRepository, blockLoadByIdExecute)

