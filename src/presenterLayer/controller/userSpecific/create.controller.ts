const { createUseCase : wrappedFunctionToSet } = require('../../../domainLayer/useCase/index');

const setCntrl = async (data:any) => {
  try {
    const {
      ownerId,
      truckNumber,
      currentLocation,
      truckType,
      capacity,
      operatingStates,
      activeStatus,
    } = data.body;
    const newData = {
      ownerId,
      truckNumber,
      currentLocation,
      truckType,
      capacity,
      operatingStates,
      activeStatus,
    }
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