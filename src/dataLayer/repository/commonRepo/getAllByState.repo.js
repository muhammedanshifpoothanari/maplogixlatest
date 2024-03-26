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
const { getUserModel: modelToGetUserByState } = require('../getUserModel');
const getAllByState = (state) => __awaiter(void 0, void 0, void 0, function* () {
    if (!state)
        throw new Error('State was not properly passed to the repository!');
    const userModel = modelToGetUserByState();
    try {
        const usersArray = yield userModel.find({ state: state }).exec();
        if (!usersArray)
            return false;
        return usersArray;
    }
    catch (error) {
        throw new Error('Error in getting user from the database by user State!');
    }
});
module.exports = {
    getAllByState
};
