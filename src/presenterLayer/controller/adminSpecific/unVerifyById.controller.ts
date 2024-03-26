const { unVerifyByIdUserAbs : wrappedFunctionTounVerifyById } = require('../../../domainLayer/useCase/index');

const unVerifyByIdCntrl = async (data:any) => {
  try {
    const id: string =data.id 
    const users = await wrappedFunctionTounVerifyById(id);

    if (users)      
    return users;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    unVerifyByIdCntrl
};