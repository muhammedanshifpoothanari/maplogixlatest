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
Object.defineProperty(exports, "__esModule", { value: true });
const { getAllBySenderIdUseCase: wrappedFunction } = require('../../../domainLayer/useCase/index');
const getAllBySenderIdCntrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(getAllBySenderIdCntrl, 'hdhdhhdhd');
        const senderId = req.body.senderId;
        const chat = yield wrappedFunction(senderId);
        console.log(chat, 'hdhdhhdhd');
        if (chat)
            return chat;
        return false;
    }
    catch (error) {
        console.log(error);
    }
});
module.exports = {
    getAllBySenderIdCntrl
};
