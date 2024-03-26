const { unBlockByIdUserAbs : wrappedFunctionToUnBlockById } = require('../../../domainLayer/useCase/index');

const unBlockByIdCntrl = async (data:any) => {
  try {
    const id: string =data.id 
    const users = await wrappedFunctionToUnBlockById(id);

    if (users) 
      return users;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    unBlockByIdCntrl
};