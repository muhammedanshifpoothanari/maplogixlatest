const { getUserModel: modelToUpdateUser } = require('../getUserModel');

type userDataToUpdate = {
  id?: string,
  userName?: String,
  mobile?: Number,
  assetId: String,
  userType?: String,
  state?: String,
  about?: String,
  yearOfExperience?: Number,
  operatingStates?: string[], 
  operatingRoutes?: string[], 
  handledMaterials?: string[],
  accountNumber?: String,
}

// Define a function to update user information
const updateUser = async (id: String, updatedUserData: userDataToUpdate) => {
  console.log(id,updatedUserData,'jhjgvfreer');
  
  if (!id || !updatedUserData) {
    throw new Error('id and updated user data must be provided!');
  }

  const userModel = modelToUpdateUser();

  try {
    // Find the user by email
    const user = await userModel.findOne({ _id: id }).exec();

    if (!user) {
      throw new Error('User not found in the database!');
    }

    // Update user fields based on the updatedUserData object
    for (const key of Object.keys(updatedUserData)) {
      if(key !== '_id')
        user[key as keyof userDataToUpdate] = updatedUserData[key as keyof userDataToUpdate];
        
    }

    // Update the 'isUpdated' field with the current date and time
    user.isUpdated = new Date();

    // Save the updated user document
    const updatedUser = await user.save();
    if(updatedUser === null)
    return false;

    return true;
  } catch (error) {
    throw new Error(`Error in updating the user in the database: ${error}`);

  }
};

module.exports = {
  updateUser,
};
