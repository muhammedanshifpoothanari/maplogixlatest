const { getAllByBidIdRepo: getAllByBidIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getByBidIdWrapper  = require('../utility');

type functionTogetAllByBidIdRepo = (...args: any[]) => Promise<any>;

const getByBidIdExecute: functionTogetAllByBidIdRepo = async (dependency: typeof getAllByBidIdRepository, id: string) => {
  console.log('getAllByBidIdRepository:', );
  console.log('dependency:', dependency);
  const bidData = await dependency(id);

  if (bidData === null) {
   return false
  }

  return bidData;
};

module.exports = getByBidIdWrapper(getAllByBidIdRepository, getByBidIdExecute)

