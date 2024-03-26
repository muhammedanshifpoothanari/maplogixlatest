const { getUserModel: modelToUnunBlockUserById } = require('../getUserModel');

const unBlockUserById = async (id: string): Promise<boolean> => {
  if (!id) {
    throw new Error('ID was not properly passed to the repository!');
  }

  const userModel = modelToUnunBlockUserById();

  try {
    // Find the user with the specified ID
    const user = await userModel.findById(id).exec();
    console.log('reached at un block');
    
    if (!user) {
      // If no matching user is found, return false
      return false;
    }

    // Update the IsBlocked field to false
    user.isBlocked = false;
    await user.save();

    // User is blocked
    return true;
  } catch (error) {
    throw new Error('Error in unblocking the user by ID in the database!');
  }
};

module.exports = {
     unBlockUserById 
};
