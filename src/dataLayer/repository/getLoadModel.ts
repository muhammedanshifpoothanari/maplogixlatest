import mongoose, { Model } from 'mongoose';


  
  // Define the schema for the Load
  export interface ILoad extends Document{
    loadName?: string;
    ownerId?: string;
    loadType?: string;
    startingPoint?: string;
    destination?: string;
    boxSize?: string;
    loadWeight?: number;
    status?: string;
    pricePerUnit?: number;
    createdAt?: Date;
    expiresAt?: Date;
    updatedAt?: Date;
  }
  
// Create a Mongoose model for the Load
const getLoadModel = (): Model<ILoad> => {
    const entityName = 'LoadInfo';
    const { loadSchema } = require('../database/schema/loadInfo.schema');
    console.log('jhdhkjdxcfjkcfv');
    if (!loadSchema)
        throw new Error('Load schema not found!');
    
    return mongoose.model<ILoad>(entityName, loadSchema);
};
module.exports = {
    getLoadModel
}