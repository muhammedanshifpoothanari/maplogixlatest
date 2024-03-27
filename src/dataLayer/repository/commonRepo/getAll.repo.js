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
const { getChatModel } = require('../getChatModel');
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const chatModel = getChatModel();
    try {
        console.log('getAllRepo');
        const chatArray = yield chatModel.find().exec();
        if (chatArray.length === 0 || !chatArray)
            return false;
        return chatArray;
    }
    catch (error) {
        throw new Error('Error in getting chat from the database!');
    }
});
module.exports = {
    getAll
};
