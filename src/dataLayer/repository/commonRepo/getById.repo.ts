const { getUserModel: modelToGetUserById } = require('../getUserModel');

const getById = async (id: string) => {
  if (!id) {
    throw new Error('id was not properly passed to the repository!');
  }

  const userModel = modelToGetUserById();

  try {
    // Find a user with the specified id and isAdmin field set to true
    const user = await userModel.findById(id).exec();

    if (!user || user.length === 0) {
      // If no matching user is found or the user is not an admin, return false
      return false;
    }

    // User is an admin
    return user;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    getById,
};
