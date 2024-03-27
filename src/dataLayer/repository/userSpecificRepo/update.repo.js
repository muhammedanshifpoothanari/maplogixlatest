"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { getChatModel: modelToUpdateChat } = require('../getChatModel');
// Define a function to update chat information
const updateChat = (id, updatedChatData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id, updatedChatData, 'jhjgvfreer');
    if (!id || !updatedChatData) {
        throw new Error('ID and updated chat data must be provided!');
    }
    const chatModel = modelToUpdateChat();
    try {
        // Find the chat by ID
        const chat = yield chatModel.findById(id).exec();
        if (!chat) {
            throw new Error('chat not found in the database!');
        }
        // Update user fields based on the updatedUserData object
        for (const key of Object.keys(updatedChatData)) {
            chat[key] = updatedChatData[key];
        }
        // Save the updated user document
        const updatedchat = yield chat.save();
        if (updatedchat === null)
            return false;
        return true;
    }
    catch (error) {
        throw new Error(`Error in updating the chat in the database: ${error}`);
    }
});
module.exports = {
    updateChat,
};
