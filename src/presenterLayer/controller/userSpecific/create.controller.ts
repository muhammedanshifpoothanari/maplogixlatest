const { createUseCase : wrappedFunctionToSet } = require('../../../domainLayer/useCase/index');

const setCntrl = async (data:any) => {
  try {
    const {
      bidId,
      loadId,
      truckId,
      userId,
      bidPrice,
      chatId
    } = data.body;
    console.log('!!!!!!!!!!',data.body,'!!!!!!!!!!');
    
    const newData = {
      bidId,
      loadId,
      truckId,
      userId,
      bidPrice,
      chatId
    }
    const isCreated = await wrappedFunctionToSet(newData);

    if (isCreated) 
      return isCreated;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    setCntrl
};