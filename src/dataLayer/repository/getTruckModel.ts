import mongoose, { Model } from 'mongoose';

interface TruckDocument extends Document {
  ownerId?: string;
  truckImage?: string;
  truckNumber?: string;
  currentLocation?: string;
  truckType?: string;
  capacity?: number;
  operatingStates?: string[];
  activeStatus?: boolean;
  isBlocked?: boolean;
  isVerified?: boolean;
  expiresAt?: Date;
}



// Create a Mongoose model for the truck
const getTruckModel = (): Model<TruckDocument> => {
    const entityName = 'truckInfo';
    const { truckSchema } = require('../database/schema/truckInfo.schema');
    console.log('jhdhkjdxcfjkcfv');
    if (!truckSchema)
        throw new Error('truck schema not found!');
    
    return mongoose.model<TruckDocument>(entityName, truckSchema);
};
module.exports = {
    getTruckModel
}