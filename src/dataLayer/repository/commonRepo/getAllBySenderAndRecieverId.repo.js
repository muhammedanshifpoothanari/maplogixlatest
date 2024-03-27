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
const { getChatModel: modelToGetChatBySenderAndReceiverId } = require('../getChatModel');
const getAllBySenderAndReceiverId = (senderId, receiverId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!senderId && !receiverId)
        throw new Error('sender and reciever id was not properly passed to the repository!');
    const chatModel = modelToGetChatBySenderAndReceiverId();
    try {
        const ChatArray = yield chatModel.find({ senderId: senderId, receiverId: receiverId }).exec();
        if (!ChatArray || ChatArray.length === 0)
            return false;
        return ChatArray;
    }
    catch (error) {
        throw new Error('Error in getting Chat from the database by sender and reciever id!');
    }
});
module.exports = {
    getAllBySenderAndReceiverId
};
