
const { getAllUserAbs : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllCntrl = async () => {
  try {
    console.log('getAllCntrl','hdhdhhdhd');
    const users = await wrappedFunction();
    console.log('hdhdhhdhd',users,'hdhdhhdhd');
    
  if (users && users !== undefined) 
    return users
    
  return false
    
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllCntrl
};
