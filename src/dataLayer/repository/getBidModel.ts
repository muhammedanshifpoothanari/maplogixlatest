import mongoose, { Model } from 'mongoose';

interface BidDocument extends Document {
    bidId?: string,
    loadId?: string,
    truckId?: string,
    userId?: string,
    bidPrice?: number,
    chatId?: string
  }

// Create a Mongoose model for the bid
const getBidModel = (): Model<BidDocument> => {
    const entityName = 'bidInfo';
    const { bidSchema } = require('../database/schema/bidInfo.schema');
    console.log('jhdhkjdxcfjkcfv');

    if (!bidSchema)
        throw new Error('bid schema not found!');
    
    return mongoose.model<BidDocument>(entityName, bidSchema);
};
module.exports = {
    getBidModel
}