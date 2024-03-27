const { unBlockUseCase : wrappedFunctionToUnBlock } = require('../../../domainLayer/useCase/index');

const unBlockByIdCntrl = async (data:any) => {
  try {
    const id: string = data.id 
    const isUnBlocked = await wrappedFunctionToUnBlock(id);

    if (isUnBlocked) 
      return isUnBlocked;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    unBlockByIdCntrl
};