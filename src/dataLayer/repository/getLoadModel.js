"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Create a Mongoose model for the Load
const getLoadModel = () => {
    const entityName = 'LoadInfo';
    const { loadSchema } = require('../database/schema/loadInfo.schema');
    console.log('jhdhkjdxcfjkcfv');
    if (!loadSchema)
        throw new Error('Load schema not found!');
    return mongoose_1.default.model(entityName, loadSchema);
};
module.exports = {
    getLoadModel
};
