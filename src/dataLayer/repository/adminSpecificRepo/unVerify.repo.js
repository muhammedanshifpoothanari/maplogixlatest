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
const { getUserModel: modelToUnVerifyUserById } = require('../getUserModel');
const unVerifyUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id) {
        throw new Error('ID was not properly passed to the repository!');
    }
    const userModel = modelToUnVerifyUserById();
    try {
        // Find the user with the specified ID
        const user = yield userModel.findById(id).exec();
        if (!user) {
            // If no matching user is found, return false
            return false;
        }
        // Update the IsVerifyed field to false
        user.isVerified = false;
        yield user.save();
        // User is Verified
        return true;
    }
    catch (error) {
        throw new Error('Error in unVerifying the user by ID in the database!');
    }
});
module.exports = {
    unVerifyUserById
};
