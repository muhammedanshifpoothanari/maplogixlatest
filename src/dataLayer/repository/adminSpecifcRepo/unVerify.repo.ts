const { getLoadModel: modelToUnVerifyLoadById } = require('../getLoadModel');

const unVerifyLoadById = async (id: string): Promise<boolean> => {
  if (!id) {
    throw new Error('ID was not properly passed to the repository!');
  }
  console.log('reached block load');
  

  const loadModel = modelToUnVerifyLoadById();

  try {
    // Find the user with the specified ID
    const load = await loadModel.findById(id).exec();

    if (!load) {
      // If no matching user is found, return false
      return false;
    }

    // Update the IsBlocked field to true
    load.isVerified = false;
    await load.save();

    // User is blocked
    return true;
    
  } catch (error) {
    throw new Error('Error in verifying the load by ID in the database!');
  }
};

module.exports = {
    unVerifyLoadById 
};
