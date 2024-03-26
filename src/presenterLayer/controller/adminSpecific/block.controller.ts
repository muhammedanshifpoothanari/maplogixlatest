
const { blockUseCase : wrappedFunctionToBlock } = require('../../../domainLayer/useCase/index');

const blockByIdCntrl = async (data:any) => {
  try {
    const id: string =data.id 
    const isBlocked = await wrappedFunctionToBlock(id);

    if (isBlocked) 
      return isBlocked;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    blockByIdCntrl
};