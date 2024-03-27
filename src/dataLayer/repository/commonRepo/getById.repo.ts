const { getBidModel : modelToGetBidById } = require('../getBidModel')
const getByBidId = async (id: string) => {
    if (!id)
        throw new Error('truck id was not properly passed to the repository!');

    const bidModel = modelToGetBidById();
    try {
        const truckArray = await bidModel.findById(id).exec();

        if (!truckArray || truckArray.length === 0)
            return false;
        
        return truckArray;
    } catch (error) {
        throw new Error('Error in getting bid from the database by bid-id!');
    }
};

module.exports = {
    getByBidId
}