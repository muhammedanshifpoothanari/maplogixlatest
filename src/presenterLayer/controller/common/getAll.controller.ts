const { getAllUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllCntrl = async () => {
  try {
    console.log('getAllCntrl','hdhdhhdhd');
    const loads = await wrappedFunction();
    console.log('hdhdhhdhd',loads,'hdhdhhdhd');
    
  if (loads && loads !== undefined) 
    return loads
    
  return false;

  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllCntrl
};
