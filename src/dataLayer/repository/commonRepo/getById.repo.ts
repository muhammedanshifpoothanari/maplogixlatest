const { getLoadModel : modelToGetLoadById } = require('../getLoadModel')
const getByLoadId = async (id: string) => {
    if (!id)
        throw new Error('load  id was not properly passed to the repository!');

    const loadModel = modelToGetLoadById();
    try {
        const loadArray = await loadModel.findById(id).exec();

        if (!loadArray || loadArray.length === 0)
            return false;
        
        return loadArray;
    } catch (error) {
        throw new Error('Error in getting load from the database by load id!');
    }
};

module.exports = {
    getByLoadId
}