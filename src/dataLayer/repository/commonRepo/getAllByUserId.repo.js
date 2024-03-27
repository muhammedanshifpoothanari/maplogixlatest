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
const { getBidModel: modelToGetBidByUserId } = require('../getBidModel');
const getAllByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!userId)
        throw new Error('user id was not properly passed to the repository!');
    const bidModel = modelToGetBidByUserId();
    try {
        const BidArray = yield bidModel.find({ userId: userId }).exec();
        if (!BidArray || BidArray.length === 0)
            return false;
        return BidArray;
    }
    catch (error) {
        throw new Error('Error in getting Bid from the database by user id!');
    }
});
module.exports = {
    getAllByUserId
};
