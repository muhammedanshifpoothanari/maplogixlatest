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
const { getAllByWeightUseCase: wrappedFunction } = require('../../../domainLayer/useCase/index');
const getAllByWeightCntrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(getAllByWeightCntrl, 'hdhdhhdhd');
        const capacity = req.body.capacity;
        const sort = req.body.sort;
        const trucks = yield wrappedFunction(capacity, sort);
        console.log(trucks, 'hdhdhhdhd');
        if (trucks)
            return trucks;
        return false;
    }
    catch (error) {
        console.log(error);
    }
});
module.exports = {
    getAllByWeightCntrl
};
