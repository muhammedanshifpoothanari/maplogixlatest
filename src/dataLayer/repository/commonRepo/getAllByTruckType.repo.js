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
const { getTruckModel: modelToGetTruckByType } = require('../getTruckModel');
const getAllByTruckType = (truckType) => __awaiter(void 0, void 0, void 0, function* () {
    if (!truckType)
        throw new Error('truck type was not properly passed to the repository!');
    const truckModel = modelToGetTruckByType();
    try {
        const truckArray = yield truckModel.find({ truckType: truckType }).exec();
        if (!truckArray || truckArray.length === 0)
            return false;
        return truckArray;
    }
    catch (error) {
        throw new Error('Error in getting truck from the database by truck type!');
    }
});
module.exports = {
    getAllByTruckType
};
