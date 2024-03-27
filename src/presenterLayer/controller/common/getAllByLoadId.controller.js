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
const { getAllByLoadIdUseCase: wrappedFunction } = require('../../../domainLayer/useCase/index');
const getAllByLoadIdCntrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(getAllByLoadIdCntrl, 'hdhdhhdhd');
        const loadId = req.body.loadId;
        const bids = yield wrappedFunction(loadId);
        console.log(bids, 'hdhdhhdhd');
        if (bids)
            return bids;
        return false;
    }
    catch (error) {
        console.log(error);
    }
});
module.exports = {
    getAllByLoadIdCntrl
};
