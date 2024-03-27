const { getLoadModel : modelToGetLoadOwnerId } = require('../getLoadModel')
const getAllByOwnerId = async (ownerId: string) => {
    if (!ownerId)
        throw new Error('load owner id was not properly passed to the repository!');

    const loadModel = modelToGetLoadOwnerId();
    try {
        const loadArray = await loadModel.find({ ownerId: ownerId }).exec();
        if (!loadArray || loadArray.length === 0)
            return false;
        
        return loadArray;
    } catch (error) {
        throw new Error('Error in getting load from the database by owner id!');
    }
};

module.exports = {
    getAllByOwnerId
}