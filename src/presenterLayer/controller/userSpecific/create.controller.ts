
const { createUseCase : wrappedFunctionToSet } = require('../../../domainLayer/useCase/index');

const setCntrl = async (data:any) => {
  try {
    
    
    const {
      loadName,
      ownerId,
      loadType,
      startingPoint,
      destination,
      boxSize,
      loadWeight,
      status,
      pricePerUnit,
    } = data.body;
    const newData = {
      loadName,
      ownerId,
      loadType,
      startingPoint,
      destination,
      boxSize,
      loadWeight,
      status,
      pricePerUnit,
      expiresAt: Date.now() +( 6 * 24 * 60 * 60 * 1000),

    } 
    console.log('newData',newData,'newData');
    
    
    const isCreated = await wrappedFunctionToSet(newData);

    if (isCreated) 
      return isCreated;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    setCntrl
};