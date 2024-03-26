const { verifyByIdUserAbs : wrappedFunctionToVerifyById } = require('../../../domainLayer/useCase/index');

const verifyByIdCntrl = async (data:any) => {
  try {
    const id: string =data.id 
    const users = await wrappedFunctionToVerifyById(id);

    if (users)       
    return users;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    verifyByIdCntrl
};