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
require('dotenv').config();
const { getUserModel: modelToCreateUser } = require('../getUserModel');
const generateOTP = () => {
    const otpLength = 6;
    const min = Math.pow(10, otpLength - 1);
    const max = Math.pow(10, otpLength) - 1;
    return Math.floor(Math.random() * (max - min + 1) + min).toString();
};
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    if (!userData || !userData.mobile) {
        console.log(userData);
        throw new Error('mobile was not properly passed to the repository!');
    }
    const userModel = modelToCreateUser();
    try {
        let doneTheJob = false;
        const user = yield userModel.findOne({ userName: userData.userName, mobile: userData.mobile }).exec();
        if (user) {
            const otp = generateOTP();
            user.otp = otp;
            user.otpExpires = new Date(Date.now() + 3 * 60 * 1000);
            doneTheJob = yield user.save();
            console.log(user, 'modelAlreadyCreated');
            const accountSid = process.env.accountSid;
            const authToken = process.env.authToken;
            const client = require('twilio')(accountSid, authToken);
            client.messages
                .create({
                body: `${otp}`,
                from: `+${process.env.from}`,
                to: `+91${userData.mobile}`
            });
        }
        else {
            const otp = generateOTP();
            const newUser = new userModel(Object.assign(Object.assign({}, userData), { isBlocked: false, isVerified: false, isAdmin: false, isCreated: new Date(), isUpdated: new Date(), otp: otp, otpExpires: new Date(Date.now() + 3 * 60 * 1000) }));
            doneTheJob = yield newUser.save();
            console.log(newUser, 'model');
            const accountSid = process.env.accountSid;
            const authToken = process.env.authToken;
            const client = require('twilio')(accountSid, authToken);
            client.messages
                .create({
                body: `${otp}`,
                from: `+${process.env.from}`,
                to: `+91${userData.mobile}`
            });
        }
        // Create a new user document with the provided data, including the isAdmin field
        if (!doneTheJob)
            return false;
        // Return the newly created user
        return true;
    }
    catch (error) {
        throw new Error(`Error in creating the user in the database: ${error}`);
    }
});
module.exports = {
    createUser,
};
