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
const { getAllBySenderAndReceiverIdUseCase: wrappedFunction } = require('../../../domainLayer/useCase/index');
const getAllBySenderAndReceiverIdCntrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(getAllBySenderAndReceiverIdCntrl, 'hdhdhhdhd');
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;
        console.log(req.body, 'ffdvfdv');
        const chats = yield wrappedFunction(senderId, receiverId);
        console.log(chats, 'hdhdhhdhd');
        if (chats)
            return chats;
        return false;
    }
    catch (error) {
        console.log(error);
    }
});
module.exports = {
    getAllBySenderAndReceiverIdCntrl
};
