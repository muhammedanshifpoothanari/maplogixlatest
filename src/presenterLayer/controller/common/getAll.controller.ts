const { getAllUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllCntrl = async () => {
  try {
    console.log('getAllCntrl','hdhdhhdhd');
    const bid = await wrappedFunction();
    console.log('hdhdhhdhd',bid,'hdhdhhdhd');
    
  if (bid && bid !== undefined) 
    return bid
    
  return false;

  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllCntrl
};
