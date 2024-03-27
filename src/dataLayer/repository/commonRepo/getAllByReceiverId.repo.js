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
const { getChatModel: modelToGetChatByReceiverId } = require('../getChatModel');
const getAllByReceiverId = (receiverId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('3 repo');
    console.log(receiverId, 'receiverId');
    if (!receiverId)
        throw new Error('receiver id was not properly passed to the repository!');
    const chatModel = modelToGetChatByReceiverId();
    try {
        const ChatArray = yield chatModel.find({ receiverId: receiverId }).exec();
        if (!ChatArray || ChatArray.length === 0)
            return false;
        return ChatArray;
    }
    catch (error) {
        throw new Error('Error in getting chat from the database by reciever id!');
    }
});
module.exports = {
    getAllByReceiverId
};
