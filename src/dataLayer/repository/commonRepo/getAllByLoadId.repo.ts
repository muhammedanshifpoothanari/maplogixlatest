const { getBidModel : modelToGetBidByLoadId } = require('../getBidModel')
const getAllByLoadId = async (loadId: string) => {
    if (!loadId)
        throw new Error('load id was not properly passed to the repository!');

    const bidModel = modelToGetBidByLoadId();
    try {
        const BidArray = await bidModel.find({ loadId: loadId }).exec();
        if (!BidArray || BidArray.length === 0)
            return false;
        
        return BidArray;
    } catch (error) {
        throw new Error('Error in getting Bid from the database by load id!');
    }
};

module.exports = {
    getAllByLoadId
}