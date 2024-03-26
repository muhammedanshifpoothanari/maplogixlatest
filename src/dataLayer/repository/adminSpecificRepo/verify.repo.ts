const { getUserModel: modelToVerifyUserById } = require('../getUserModel');

const verifyUserById = async (id: string): Promise<boolean> => {
  if (!id) {
    throw new Error('ID was not properly passed to the repository!');
  }

  const userModel = modelToVerifyUserById();

  try {
    // Find the user with the specified ID
    const user = await userModel.findById(id).exec();

    if (!user) {
      // If no matching user is found, return false
      return false;
    }

    // Update the IsVerified field to true
    user.isVerified = true;
    await user.save();

    // User is Verifyed
    return true;
  } catch (error) {
    throw new Error('Error in Verifying the user by ID in the database!');
  }
};

module.exports = {
     verifyUserById 
};
