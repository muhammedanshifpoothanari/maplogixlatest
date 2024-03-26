const { updateAbs: wrappedFunctions } = require('../../../domainLayer/useCase/index');

const updateCntrlForRabbitMQ = async (data:any) => {
  try {
    console.log('reached at update user',data);
    
    const {
      id,
      userName,
      mobile,
      userType,
      assetId,
      state,
      about,
      yearOfExperience,
      operatingStates,
      operatingRoutes,
      handledMaterials,
      accountNumber,
    } = data.body;

    const newData = {
      id,
      userName,
      mobile,
      assetId,
      userType,
      state,
      about,
      yearOfExperience,
      operatingStates,
      operatingRoutes,
      handledMaterials,
      accountNumber,
    };

    const users = await wrappedFunctions(newData);

    return users || false;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  updateCntrlForRabbitMQ,
};
