"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Create a Mongoose model for the user
const getUserModel = () => {
    const entityName = 'userInfo';
    const { userInfoSchema } = require('../database/schema/userInfo.schema');
    console.log('jhdhkjdxcfjkcfv');
    if (!userInfoSchema)
        throw new Error('User schema not found!');
    return mongoose_1.default.model(entityName, userInfoSchema);
};
module.exports = {
    getUserModel
};
