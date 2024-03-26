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
const { getAllByTruckTypeUseCase: wrappedFunction } = require('../../../domainLayer/useCase/index');
const getAllByTypeCntrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(getAllByTypeCntrl, 'hdhdhhdhd');
        const type = req.body.truckType;
        const trucks = yield wrappedFunction(type);
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
    getAllByTypeCntrl
};
