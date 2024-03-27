"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Create a Mongoose model for the bid
const getBidModel = () => {
    const entityName = 'bidInfo';
    const { bidSchema } = require('../database/schema/bidInfo.schema');
    console.log('jhdhkjdxcfjkcfv');
    if (!bidSchema)
        throw new Error('bid schema not found!');
    return mongoose_1.default.model(entityName, bidSchema);
};
module.exports = {
    getBidModel
};
