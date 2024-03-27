const { getLoadModel : modelToGetLoadByStartingPoint } = require('../getLoadModel')
const getAllByStartingPoint = async (startingPoint: string) => {
    if (!startingPoint)
        throw new Error('starting point was not properly passed to the repository!');

    const loadModel = modelToGetLoadByStartingPoint();
    try {
        const loadArray = await loadModel.find({ startingPoint: startingPoint }).exec();
        if (!loadArray || loadArray.length === 0)
            return false;

        return loadArray;
    } catch (error) {
        throw new Error('Error in getting load from the database by load startingpoint!');
    }
};

module.exports = {
    getAllByStartingPoint
}