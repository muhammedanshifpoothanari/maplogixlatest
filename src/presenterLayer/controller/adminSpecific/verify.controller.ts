const { verifyUseCase : wrappedFunctionToVerify } = require('../../../domainLayer/useCase/index');

const verifyByIdCntrl = async (data:any) => {
  try {
    const id: string = data.id 
    const isVerified = await wrappedFunctionToVerify(id);

    if (isVerified)       
    return isVerified;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    verifyByIdCntrl
};