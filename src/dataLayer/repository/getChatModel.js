"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Create a Mongoose model for the chat
const getChatModel = () => {
    const entityName = 'chatInfo';
    const { chatSchema } = require('../database/schema/chatInfo.schema');
    console.log('jhdhkjdxcfjkcfv');
    if (!chatSchema)
        throw new Error('chat schema not found!');
    return mongoose_1.default.model(entityName, chatSchema);
};
module.exports = {
    getChatModel
};
