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
const { getUserModel: modelToUpdateUser } = require('../getUserModel');
// Define a function to update user information
const updateUser = (id, updatedUserData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id, updatedUserData, 'jhjgvfreer');
    if (!id || !updatedUserData) {
        throw new Error('id and updated user data must be provided!');
    }
    const userModel = modelToUpdateUser();
    try {
        // Find the user by email
        const user = yield userModel.findOne({ _id: id }).exec();
        if (!user) {
            throw new Error('User not found in the database!');
        }
        // Update user fields based on the updatedUserData object
        for (const key of Object.keys(updatedUserData)) {
            if (key !== '_id')
                user[key] = updatedUserData[key];
        }
        // Update the 'isUpdated' field with the current date and time
        user.isUpdated = new Date();
        // Save the updated user document
        const updatedUser = yield user.save();
        if (updatedUser === null)
            return false;
        return true;
    }
    catch (error) {
        throw new Error(`Error in updating the user in the database: ${error}`);
    }
});
module.exports = {
    updateUser,
};
