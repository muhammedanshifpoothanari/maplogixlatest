const { getUserModel : modelToGetUserByState } = require('../getUserModel')
const getAllByState = async (state: string) => {
    if (!state)
        throw new Error('State was not properly passed to the repository!');

    const userModel = modelToGetUserByState();
    try {
        const usersArray = await userModel.find({ state: state }).exec();
        if (!usersArray)
            return false
        return usersArray;
    } catch (error) {
        throw new Error('Error in getting user from the database by user State!');
    }
};

module.exports = {
    getAllByState
}