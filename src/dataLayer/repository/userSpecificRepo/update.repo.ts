const { getLoadModel: modelToUpdateLoad } = require('../getLoadModel');

 type loadDataToUpdate = {
  loadName?: string;
  ownerId?: string;
  loadType?: string;
  startingPoint?: string;
  destination?: string;
  boxSize?: string;
  loadWeight?: number;
  pricePerUnit?: number;
  expiresAt?: Date;
}
// Define a function to update load information
const updateLoad = async (id: string, updatedLoadData: loadDataToUpdate) => {
  console.log(id,updatedLoadData,'jhjgvfreer');
  
  if (!id || !updatedLoadData) {
    throw new Error('ID and updated user data must be provided!');
  }

  const loadModel = modelToUpdateLoad();

  try {
    // Find the user by ID
    const user = await loadModel.findById(id).exec();

    if (!user) {
      throw new Error('User not found in the database!');
    }

    // Update user fields based on the updatedUserData object
    for (const key of Object.keys(updatedLoadData)) {
        user[key as keyof loadDataToUpdate] = updatedLoadData[key as keyof loadDataToUpdate];

    }

    // Save the updated user document
    const updatedLoad = await user.save();
    if(updatedLoad === null)
    return false;

    return true;
  } catch (error) {
    throw new Error(`Error in updating the user in the database: ${error}`);
  }
};

module.exports = {
  updateLoad,
};
