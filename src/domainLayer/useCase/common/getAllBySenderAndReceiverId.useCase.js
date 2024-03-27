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
const { getAllBySenderAndRecieverIdRepo: getAllBySenderAndReceiverIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllBySenderAndReceiverIdWrapper = require('../utility');
const getAllBySenderAndReceiverIdExecute = (dependency, senderId, receiverId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('getAllBySenderAndReceiverIdRepoRepository:');
    console.log('dependency:', dependency);
    const chatData = yield dependency(senderId, receiverId);
    if (chatData === null) {
        return false;
    }
    return chatData;
});
module.exports = getAllBySenderAndReceiverIdWrapper(getAllBySenderAndReceiverIdRepository, getAllBySenderAndReceiverIdExecute);
