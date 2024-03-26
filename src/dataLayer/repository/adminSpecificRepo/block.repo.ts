const { getUserModel: modelToBlockUserById } = require('../getUserModel');

const blockUserById = async (id: string): Promise<boolean> => {
  if (!id) {
    throw new Error('ID was not properly passed to the repository!');
  }
  console.log('reached blocke user');
  

  const userModel = modelToBlockUserById();

  try {
    // Find the user with the specified ID
    const user = await userModel.findById(id).exec();

    if (!user) {
      // If no matching user is found, return false
      return false;
    }

    // Update the IsBlocked field to true
    user.isBlocked = true;
    await user.save();

    // User is blocked
    return true;
  } catch (error) {
    throw new Error('Error in blocking the user by ID in the database!');
  }
};

module.exports = {
     blockUserById 
    };
