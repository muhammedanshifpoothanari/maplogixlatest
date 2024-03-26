const { updateUseCase : wrappedFunctionToUpdate } = require('../../../domainLayer/useCase/index');

const updateCntrl = async (data:any) => {
  try {
    const {
      id,
      ownerId,
      truckImage,
      truckNumber,
      currentLocation,
      truckType,
      capacity,
      operatingStates,
      activeStatus,
    } = data.body;
    const newData = {
      id,
      ownerId,
      truckImage,
      truckNumber,
      currentLocation,
      truckType,
      capacity,
      operatingStates,
      activeStatus,
    }
    const isUpdated = await wrappedFunctionToUpdate(newData);

    if (isUpdated)       
      return isUpdated;
  return false;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    updateCntrl
};