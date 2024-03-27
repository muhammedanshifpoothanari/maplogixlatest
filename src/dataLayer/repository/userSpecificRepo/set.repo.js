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
const { getChatModel: modelToCreateChat } = require('../getChatModel');
const { SendToQueue: send } = require('../../../presenterLayer/router/rabbitmq');
const createChat = (chatData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(chatData, '@@@@');
    if (!chatData) {
        throw new Error('chatData was not properly passed to the repository!');
    }
    const chatModel = modelToCreateChat();
    try {
        const newChat = new chatModel(Object.assign({}, chatData));
        const doneTheJob = yield newChat.save();
        if (!doneTheJob)
            return false;
        yield send({ text: true });
        return true;
    }
    catch (error) {
        throw new Error(`Error in creating the chat in the database: ${error}`);
    }
});
module.exports = {
    createChat,
};
