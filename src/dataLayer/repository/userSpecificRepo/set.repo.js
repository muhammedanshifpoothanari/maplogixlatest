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
const { getBidModel: modelToCreateBid } = require('../getBidModel');
const createBid = (bidData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(bidData, '@@@@');
    if (!bidData) {
        throw new Error('bidData was not properly passed to the repository!');
    }
    const bidModel = modelToCreateBid();
    try {
        const newBid = new bidModel(Object.assign(Object.assign({}, bidData), { isBlocked: false, isVerified: false }));
        // Save the new truck to the database
        const doneTheJob = yield newBid.save();
        if (!doneTheJob)
            return false;
        // Return the newly created truck
        return true;
    }
    catch (error) {
        throw new Error(`Error in creating the truck in the database: ${error}`);
    }
});
module.exports = {
    createBid,
};
