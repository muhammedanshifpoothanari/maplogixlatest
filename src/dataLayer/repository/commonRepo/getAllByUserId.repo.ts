const { getBidModel : modelToGetBidByUserId } = require('../getBidModel')
const getAllByUserId = async (userId: string) => {
    if (!userId)
        throw new Error('user id was not properly passed to the repository!');

    const bidModel = modelToGetBidByUserId();
    try {
        const BidArray = await bidModel.find({ userId: userId }).exec();
        if (!BidArray || BidArray.length === 0)
            return false;
        
        return BidArray;
    } catch (error) {
        throw new Error('Error in getting Bid from the database by user id!');
    }
};

module.exports = {
    getAllByUserId
}