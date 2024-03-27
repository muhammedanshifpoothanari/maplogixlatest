const { updateUseCase : wrappedFunctionToUpdate } = require('../../../domainLayer/useCase/index');

const updateCntrl = async (data:any) => {
  try {
    const {
      id,
      senderId,
      receiverId,
      message,
    } = data.body;
    const newData = {
      id,
      senderId,
      receiverId,
      message,
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