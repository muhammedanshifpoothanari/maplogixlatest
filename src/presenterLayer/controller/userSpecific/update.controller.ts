const { updateUseCase : wrappedFunctionToUpdate } = require('../../../domainLayer/useCase/index');

const updateCntrl = async (data:any) => {
  try {
    console.log('dssdsds');
    
    console.log(data,'!!!!!!!!!!!!!!!');
    
    const {
      id,
      loadName,
      ownerIdloadName,
      loadTypeloadName,
      startingPointloadName,
      destinationloadName,
      boxSizeloadName,
      loadWeight,
      statusloadName,
      pricePerUnit,
      createdAt,
      expiresAt,
      updatedAt,
    } = data.body;
    const newData = {
      id,
      loadName,
      ownerIdloadName,
      loadTypeloadName,
      startingPointloadName,
      destinationloadName,
      boxSizeloadName,
      loadWeight,
      statusloadName,
      pricePerUnit,
      createdAt,
      expiresAt,
      updatedAt,
    }
    console.log(newData,'@@@@@@@@@');
    
    const isUpdated = await wrappedFunctionToUpdate(newData);

    if(isUpdated)       
      return isUpdated;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    updateCntrl
};