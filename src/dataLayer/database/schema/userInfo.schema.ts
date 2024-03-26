import { Schema } from 'mongoose';

const UserInfoSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: Number,
        required: true
    },
    userType: {
        type: String,
        enum: ['loadProvider', 'truckOwner'], 
    },
    assetId: {
        type: String,
    },
    state: {
        type: String,
    },
    about: {
        type: String,
    },
    yearOfExperience: {
        type: Number,
    },
    operatingStates: [{
        type: String
    }],
    operatingRoutes: [{
        type: String
    }],
    handledMaterials: [{
        type: String
    }],
    accountNumber: {
        type: String,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    otp: {
        type: String,
    },
    otpExpires: {
        type: Date
    },
    CreatedAt: { 
        type: Date, 
        default: Date.now 
    },
    isUpdated: { 
        type: Date,
        default: Date.now 
    },
});

module.exports = {
    userInfoSchema: UserInfoSchema
};
