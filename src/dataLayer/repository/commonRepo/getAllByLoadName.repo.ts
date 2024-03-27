const { getLoadModel : modelToGetLoadByName } = require('../getLoadModel')
const getAllByLoadName = async (loadName: string) => {
    if (!loadName)
        throw new Error('load name was not properly passed to the repository!');

    const loadModel = modelToGetLoadByName();
    try {
        const loadArray = await loadModel.find({ loadName: loadName }).exec();
        if (!loadArray || loadArray.length === 0)
            return false;
        
        return loadArray;
    } catch (error) {
        throw new Error('Error in getting load from the database by load name!');
    }
};

module.exports = {
    getAllByLoadName
}