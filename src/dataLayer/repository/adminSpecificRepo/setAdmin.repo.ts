const { getUserModel: modelToSetAdminUserByEmail } = require('../getUserModel');

const setAdminUserByEmail = async (email: string): Promise<boolean> => {
  if (!email) {
    throw new Error('Email was not properly passed to the repository!');
  }

  const userModel = modelToSetAdminUserByEmail();

  try {
    // Find the user with the specified Email
    const user = await userModel.find({email: email}).exec();

    if (!user) {
      // If no matching user is found, return false
      return false;
    }

    // Update the IsSetAdmined field to true
    user.IsAdmin = true;
    await user.save();

    // User is SetAdmined
    return true;
  } catch (error) {
    throw new Error('Error in SetAdmining the user by Email in the database!');
  }
};

module.exports = {
    setAdminUserByEmail 
};