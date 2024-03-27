const { getLoadModel : modelToGetLoadByType } = require('../getLoadModel')
const getAllByLoadType = async (loadType: string) => {
    if (!loadType)
        throw new Error('load type was not properly passed to the repository!');

    const loadModel = modelToGetLoadByName();
    try {
        const loadArray = await loadModel.find({ loadType: loadType }).exec();
        if (!loadArray || loadArray.length === 0)
            return false;
        
        return loadArray;
    } catch (error) {
        throw new Error('Error in getting load from the database by load type!');
    }
};

module.exports = {
    getAllByLoadType
}