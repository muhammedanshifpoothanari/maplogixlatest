const { getLoadModel } = require('../getLoadModel');

const getAll = async () => {
    const loadModel = getLoadModel();
    try {
        console.log('getAllRepo');
        
        const loadArray = await loadModel.find().exec();
        
        if (loadArray.length === 0 || !loadArray )
            return false;
        return loadArray;
    } catch (error) {
        throw new Error('Error in getting load from the database!');
    }
};

module.exports = {
    getAll
}
