const { getTruckModel : modelToGetTruckByOwnerId } = require('../getTruckModel')
const getAllByOwnerId = async (ownerId: string) => {
    if (!ownerId)
        throw new Error('load owner id was not properly passed to the repository!');

    const truckModel = modelToGetTruckByOwnerId();
    try {
        const truckArray = await truckModel.find({ ownerId: ownerId }).exec();
        if (!truckArray || truckArray.length === 0)
            return false;
        
        return truckArray;
    } catch (error) {
        throw new Error('Error in getting truck from the database by owner id!');
    }
};

module.exports = {
    getAllByOwnerId
}