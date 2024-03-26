const { getTruckModel : modelToGetTruckByType } = require('../getTruckModel')
const getAllByTruckType = async (truckType: string) => {
    if (!truckType)
        throw new Error('truck type was not properly passed to the repository!');

    const truckModel = modelToGetTruckByType();
    try {
        const truckArray = await truckModel.find({ truckType: truckType }).exec();
        if (!truckArray || truckArray.length === 0)
            return false;
        
        return truckArray;
    } catch (error) {
        throw new Error('Error in getting truck from the database by truck type!');
    }
};

module.exports = {
    getAllByTruckType
}