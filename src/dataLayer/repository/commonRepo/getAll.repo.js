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
const { getBidModel } = require('../getBidModel');
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const bidModel = getBidModel();
    try {
        console.log('getAllRepo');
        const bidArray = yield bidModel.find().exec();
        if (bidArray.length === 0 || !bidArray)
            return false;
        return bidArray;
    }
    catch (error) {
        throw new Error('Error in getting bid from the database!');
    }
});
module.exports = {
    getAll
};
