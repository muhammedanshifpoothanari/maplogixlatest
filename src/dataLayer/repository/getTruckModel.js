"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Create a Mongoose model for the truck
const getTruckModel = () => {
    const entityName = 'truckInfo';
    const { truckSchema } = require('../database/schema/truckInfo.schema');
    console.log('jhdhkjdxcfjkcfv');
    if (!truckSchema)
        throw new Error('truck schema not found!');
    return mongoose_1.default.model(entityName, truckSchema);
};
module.exports = {
    getTruckModel
};
