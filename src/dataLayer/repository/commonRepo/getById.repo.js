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
const { getTruckModel: modelToGetTruckById } = require('../getTruckModel');
const getByTruckId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id)
        throw new Error('truck id was not properly passed to the repository!');
    const truckModel = modelToGetTruckById();
    try {
        const truckArray = yield truckModel.findById(id).exec();
        if (!truckArray || truckArray.length === 0)
            return false;
        return truckArray;
    }
    catch (error) {
        throw new Error('Error in getting truck from the database by load id!');
    }
});
module.exports = {
    getByTruckId
};
