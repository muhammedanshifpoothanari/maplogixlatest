const { getAllUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllCntrl = async () => {
  try {
    console.log('getAllCntrl','hdhdhhdhd');
    const chat = await wrappedFunction();
    console.log('hdhdhhdhd',chat,'hdhdhhdhd');
    
  if (chat && chat !== undefined) 
    return chat
    
  return false;

  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllCntrl
};
