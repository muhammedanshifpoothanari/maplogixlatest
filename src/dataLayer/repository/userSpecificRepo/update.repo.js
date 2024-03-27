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
const { getBidModel: modelToUpdateBid } = require('../getBidModel');
// Define a function to update bid information
const updateBid = (id, updatedBidData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id, updatedBidData, 'jhjgvfreer');
    if (!id || !updatedBidData) {
        throw new Error('ID and updated user data must be provided!');
    }
    const bidModel = modelToUpdateBid();
    try {
        // Find the bid by ID
        const bid = yield bidModel.findById(id).exec();
        if (!bid) {
            throw new Error('truck not found in the database!');
        }
        // Update user fields based on the updatedUserData object
        for (const key of Object.keys(updatedBidData)) {
            bid[key] = updatedBidData[key];
        }
        // Save the updated user document
        const updatedBid = yield bid.save();
        if (updatedBid === null)
            return false;
        return true;
    }
    catch (error) {
        throw new Error(`Error in updating the bid in the database: ${error}`);
    }
});
module.exports = {
    updateBid,
};
