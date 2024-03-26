import mongoose, { Model } from 'mongoose';

// Define the user schema type (assuming it matches your schema)
interface UserSchema {
    _id?: string,
    userName?: String,
    mobile?: Number,
    userType?: String,
    state?: String,
    about?: String,
    yearOfExperience?: Number,
    operatingStates?: string[], 
    operatingRoutes?: string[], 
    handledMaterials?: string[],
    accountNumber?: String,
    isBlocked?: Boolean,
    isVerified?: Boolean,
    isAdmin?: Boolean,
    CreatedAt?: Date
}

// Create a Mongoose model for the user
const getUserModel = (): Model<UserSchema> => {
    const entityName = 'userInfo';
    const { userInfoSchema } = require('../database/schema/userInfo.schema');
    console.log('jhdhkjdxcfjkcfv');
    if (!userInfoSchema)
        throw new Error('User schema not found!');
    
    return mongoose.model<UserSchema>(entityName, userInfoSchema);
};
module.exports = {
    getUserModel
}