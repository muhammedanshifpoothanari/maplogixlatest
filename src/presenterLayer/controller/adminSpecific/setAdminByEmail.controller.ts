const { setAdminByEmailUserAbs : wrappedFunctionToSetByEmail } = require('../../../domainLayer/useCase/index');

const setByEmailCntrl = async (data:any) => {
  try {
    const email: string =data.email 
    const users = await wrappedFunctionToSetByEmail(email);

    if (users)       
      return users;
  return false;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    setByEmailCntrl
};