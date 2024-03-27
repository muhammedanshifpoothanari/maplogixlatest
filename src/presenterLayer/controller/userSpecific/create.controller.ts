const { createUseCase : wrappedFunctionToSet } = require('../../../domainLayer/useCase/index');

const setCntrl = async (data:any) => {
  try {
    const {
      senderId,
      receiverId,
      message,
    } = data.body;
    console.log('!!!!!!!!!!',data.body,'!!!!!!!!!!');
    
    const newData = {
      senderId,
      receiverId,
      message,
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