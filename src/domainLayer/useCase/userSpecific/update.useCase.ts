const { updateBidRepo: updateBidRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const  updateWrapperToupdateBid  = require('../utility');
type functionToUpdateBid = (...args: any[]) => Promise<any>;
type dataAtupdateBidUseCase = {
  id: string,
  bidId?: string,
  loadId?: string,
  truckId?: string,
  userId?: string,
  bidPrice?: number,
  chatId?: string
}
const updateBidExecute: functionToUpdateBid = async (dependency: typeof updateWrapperToupdateBid,data: dataAtupdateBidUseCase) => {
  console.log('updateBidRepository:', );
  console.log('dependency:', dependency);
  const id: string = data.id
  console.log(data,'at usecase');
  
  const bidData = await dependency(id, data);

  if (bidData === null) {
   return false
  }

  return bidData;
};

module.exports = updateWrapperToupdateBid(updateBidRepository, updateBidExecute)
