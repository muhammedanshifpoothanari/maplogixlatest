const { unVerifyUseCase : wrappedFunctionToUnVerify } = require('../../../domainLayer/useCase/index');

const unVerifyByIdCntrl = async (data:any) => {
  try {
    const id: string = data.id 
    const isUnVerified = await wrappedFunctionToUnVerify(id);

    if (isUnVerified)      
    return isUnVerified;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    unVerifyByIdCntrl
};