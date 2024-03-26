const { getUserModel : modelToGetUserByType } = require('../getUserModel')
const getAllByType = async (userType: string) => {
    if (!userType)
        throw new Error('userType was not properly passed to the repository!');

    const userModel = modelToGetUserByType();
    try {
        const usersArray = await userModel.find({ userType: userType }).exec();
        if (!usersArray)
            return false
        return usersArray;
    } catch (error) {
        throw new Error('Error in getting user from the database by user type!');
    }
};

module.exports = {
    getAllByType
}