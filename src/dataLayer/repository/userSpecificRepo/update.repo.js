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
const { getTruckModel: modelToUpdateTruck } = require('../getTruckModel');
// Define a function to update truck information
const updateTruck = (id, updatedTruckData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id, updatedTruckData, 'jhjgvfreer');
    if (!id || !updatedTruckData) {
        throw new Error('ID and updated user data must be provided!');
    }
    const truckModel = modelToUpdateTruck();
    try {
        // Find the user by ID
        const truck = yield truckModel.findById(id).exec();
        if (!truck) {
            throw new Error('truck not found in the database!');
        }
        // Update user fields based on the updatedUserData object
        for (const key of Object.keys(updatedTruckData)) {
            truck[key] = updatedTruckData[key];
        }
        // Save the updated user document
        const updatedTruck = yield truck.save();
        if (updatedTruck === null)
            return false;
        return true;
    }
    catch (error) {
        throw new Error(`Error in updating the truck in the database: ${error}`);
    }
});
module.exports = {
    updateTruck,
};
