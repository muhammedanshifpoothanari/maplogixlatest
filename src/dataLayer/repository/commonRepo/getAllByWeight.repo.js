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
const { getTruckModel: modelToGetTruckByWeight } = require('../getTruckModel');
const getAllByWeight = (capacity, sort = 1) => __awaiter(void 0, void 0, void 0, function* () {
    if (!capacity && sort)
        throw new Error('capacity or sort was not properly passed to the repository!');
    const truckModel = modelToGetTruckByWeight();
    try {
        let truckArray;
        if (capacity) {
            truckArray = yield truckModel.find({ capacity: capacity })
                .sort({ weight: sort })
                .exec();
        }
        else {
            truckArray = yield truckModel.find({})
                .sort({ weight: sort })
                .exec();
        }
        if (!truckArray || truckArray.length === 0)
            return false;
        return truckArray;
    }
    catch (error) {
        throw new Error('Error in getting truck from the database by weight!');
    }
});
module.exports = {
    getAllByWeight
};
