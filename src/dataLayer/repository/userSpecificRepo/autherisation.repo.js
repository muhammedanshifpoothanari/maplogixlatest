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
const { getUserModel: modelToAutheriseUser } = require('../getUserModel');
const AutheriseUser = (updatedUserData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(updatedUserData, 'reached For autherise user');
    if (!updatedUserData) {
        throw new Error('id and updated user data must be provided!');
    }
    const userModel = modelToAutheriseUser();
    try {
        const user = yield userModel.findOne({ userName: updatedUserData.userName, mobile: updatedUserData.mobile, otp: updatedUserData.otp }).exec();
        if (!user) {
            return false;
        }
        if (user.otpExpires >= Date.now())
            return true;
        return false;
    }
    catch (error) {
        throw new Error(`Error in updating the user in the database: ${error}`);
    }
});
module.exports = {
    AutheriseUser,
};
