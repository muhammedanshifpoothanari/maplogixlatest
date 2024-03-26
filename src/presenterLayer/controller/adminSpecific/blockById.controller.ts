const { blockByIdUserAbs : wrappedFunctionForBlockingTheUser } = require('../../../domainLayer/useCase/index');

const blockByIdCntrl = async (data:any) => {
  try {
    const id: string =data.id 
    const users = await wrappedFunctionForBlockingTheUser(id);

    if (users) 
      return users;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    blockByIdCntrl
};