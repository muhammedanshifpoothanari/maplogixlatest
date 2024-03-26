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
const { blockUseCase: wrappedFunctionToBlock } = require('../../../domainLayer/useCase/index');
const blockByIdCntrl = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = data.id;
        const isBlocked = yield wrappedFunctionToBlock(id);
        if (isBlocked)
            return isBlocked;
        return false;
    }
    catch (error) {
        console.log(error);
    }
});
module.exports = {
    blockByIdCntrl
};
