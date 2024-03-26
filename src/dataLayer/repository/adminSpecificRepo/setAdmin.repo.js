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
const { getUserModel: modelToSetAdminUserByEmail } = require('../getUserModel');
const setAdminUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    if (!email) {
        throw new Error('Email was not properly passed to the repository!');
    }
    const userModel = modelToSetAdminUserByEmail();
    try {
        // Find the user with the specified Email
        const user = yield userModel.find({ email: email }).exec();
        if (!user) {
            // If no matching user is found, return false
            return false;
        }
        // Update the IsSetAdmined field to true
        user.IsAdmin = true;
        yield user.save();
        // User is SetAdmined
        return true;
    }
    catch (error) {
        throw new Error('Error in SetAdmining the user by Email in the database!');
    }
});
module.exports = {
    setAdminUserByEmail
};
