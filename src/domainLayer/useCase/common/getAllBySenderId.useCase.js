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
const { getAllBySenderIdRepo: getAllBySenderIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllBySenderIdWrapper = require('../utility');
const getAllBySenderIdExecute = (dependency, senderId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('getAllBySenderIdRepoRepository:');
    console.log('dependency:', dependency);
    const chatData = yield dependency(senderId);
    if (chatData === null) {
        return false;
    }
    return chatData;
});
module.exports = getAllBySenderIdWrapper(getAllBySenderIdRepository, getAllBySenderIdExecute);
