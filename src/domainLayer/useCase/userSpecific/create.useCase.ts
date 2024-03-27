const { createBidRepo: createBidRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const  wrapperTocreateBid  = require('../utility');
type functionTypeToCreateBid = (...args: any[]) => Promise<any>;
type dataAtCreateUseCase = {
  bidId?: string,
  loadId?: string,
  truckId?: string,
  userId?: string,
  bidPrice?: number,
  chatId?: string
}

const createBidExecute: functionTypeToCreateBid = async (dependency: typeof createBidRepository,
   data: dataAtCreateUseCase) => {
  console.log('createLoadUseCase:',data );
  console.log('dependency:', dependency);
  const bidData = await dependency(data);

  if (bidData === null) {
   return false
  }

  return bidData;
};

module.exports = wrapperTocreateBid(createBidRepository, createBidExecute)

