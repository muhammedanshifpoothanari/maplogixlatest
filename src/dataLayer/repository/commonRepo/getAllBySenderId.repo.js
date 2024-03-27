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
const { getChatModel: modelToGetChatBySenderId } = require('../getChatModel');
const getAllBySenderId = (senderId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!senderId)
        throw new Error('sender id was not properly passed to the repository!');
    const senderModel = modelToGetChatBySenderId();
    try {
        const ChatArray = yield senderModel.find({ senderId: senderId }).exec();
        if (!ChatArray || ChatArray.length === 0)
            return false;
        return ChatArray;
    }
    catch (error) {
        throw new Error('Error in getting Bid from the database by load id!');
    }
});
module.exports = {
    getAllBySenderId
};
