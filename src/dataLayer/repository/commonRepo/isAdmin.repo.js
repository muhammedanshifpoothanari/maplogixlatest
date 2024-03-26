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
const { getUserModel: modelToCheckUserIsAdmin } = require('../getUserModel');
const isAdmin = (mobile) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mobile) {
        throw new Error('Mobile Number was not properly passed to the repository!');
    }
    const userModel = modelToCheckUserIsAdmin();
    try {
        // Find a user with the specified email and isAdmin field set to true
        const user = yield userModel.findOne({ mobile, isAdmin: true }).exec();
        if (!user || user.length === 0) {
            // If no matching user is found or the user is not an admin, return false
            return false;
        }
        // User is an admin
        return true;
    }
    catch (error) {
        throw new Error('Error in checking if the user is an admin from the database!');
    }
});
module.exports = {
    isAdmin,
};
