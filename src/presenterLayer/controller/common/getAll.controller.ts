const { getAllUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllCntrl = async () => {
  try {
    console.log('getAllCntrl','hdhdhhdhd');
    const truck = await wrappedFunction();
    console.log('hdhdhhdhd',truck,'hdhdhhdhd');
    
  if (truck && truck !== undefined) 
    return truck
    
  return false;

  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllCntrl
};
