const { getUserModel } = require('../getUserModel');

const getAll = async () => {
    const userModel = getUserModel();
    try {
        console.log('getAllRepo');
        
        const userArray = await userModel.find().exec();
        
        
        if (userArray.length === 0 || !userArray )
            return false;
        return userArray;
    } catch (error) {
        throw new Error('Error in getting user from the database!');
    }
};

module.exports = {
    getAll
}
