const { getUserModel: modelToUnVerifyUserById } = require('../getUserModel');

const unVerifyUserById = async (id: string): Promise<boolean> => {
  if (!id) {
    throw new Error('ID was not properly passed to the repository!');
  }

  const userModel = modelToUnVerifyUserById();

  try {
    // Find the user with the specified ID
    const user = await userModel.findById(id).exec();

    if (!user) {
      // If no matching user is found, return false
      return false;
    }

    // Update the IsVerifyed field to false
    user.isVerified = false;
    await user.save();

    // User is Verified
    return true;
  } catch (error) {
    throw new Error('Error in unVerifying the user by ID in the database!');
  }
};

module.exports = {
     unVerifyUserById 
};
