const { getBidModel : modelToGetBidByTruckId } = require('../getBidModel')
const getAllByTruckId = async (truckId: string) => {
    console.log('3 repo');
    if (!truckId)
        throw new Error('truck id was not properly passed to the repository!');

    const bidModel = modelToGetBidByTruckId();
    try {
        const BidArray = await bidModel.find({ truckId: truckId }).exec();
        if (!BidArray || BidArray.length === 0)
            return false;
        
        return BidArray;
    } catch (error) {
        throw new Error('Error in getting Bid from the database by load id!');
    }
};

module.exports = {
    getAllByTruckId
}