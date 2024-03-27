const { updateUseCase : wrappedFunctionToUpdate } = require('../../../domainLayer/useCase/index');

const updateCntrl = async (data:any) => {
  try {
    const {
      id,
      bidId,
      loadId,
      truckId,
      userId,
      bidPrice,
      chatId
    } = data.body;
    const newData = {
      id,
      bidId,
      loadId,
      truckId,
      userId,
      bidPrice,
      chatId
    }
    const isUpdated = await wrappedFunctionToUpdate(newData);

    if (isUpdated)       
      return isUpdated;
  return false;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    updateCntrl
};