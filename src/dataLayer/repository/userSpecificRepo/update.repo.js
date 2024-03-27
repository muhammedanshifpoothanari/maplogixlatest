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
const { getLoadModel: modelToUpdateLoad } = require('../getLoadModel');
// Define a function to update load information
const updateLoad = (id, updatedLoadData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id, updatedLoadData, 'jhjgvfreer');
    if (!id || !updatedLoadData) {
        throw new Error('ID and updated user data must be provided!');
    }
    const loadModel = modelToUpdateLoad();
    try {
        // Find the user by ID
        const user = yield loadModel.findById(id).exec();
        if (!user) {
            throw new Error('User not found in the database!');
        }
        // Update user fields based on the updatedUserData object
        for (const key of Object.keys(updatedLoadData)) {
            user[key] = updatedLoadData[key];
        }
        // Save the updated user document
        const updatedLoad = yield user.save();
        if (updatedLoad === null)
            return false;
        return true;
    }
    catch (error) {
        throw new Error(`Error in updating the user in the database: ${error}`);
    }
});
module.exports = {
    updateLoad,
};
