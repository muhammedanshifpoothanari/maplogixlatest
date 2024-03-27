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
Object.defineProperty(exports, "__esModule", { value: true });
const { getLoadModel: modelToCreateLoad } = require('../getLoadModel');
const createLoad = (loadData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(loadData, 'eeww');
    if (!loadData) {
        throw new Error('loadData was not properly passed to the repository!');
    }
    const loadModel = modelToCreateLoad();
    try {
        // Create a new user document with the provided data, including the isAdmin field
        const newLoad = new loadModel(Object.assign(Object.assign({}, loadData), { isBlocked: false, isVerified: false, createdAt: new Date() }));
        // Save the new load to the database
        const doneTheJob = yield newLoad.save();
        if (!doneTheJob)
            return false;
        // Return the newly created load
        return true;
    }
    catch (error) {
        throw new Error(`Error in creating the load in the database: ${error}`);
    }
});
module.exports = {
    createLoad,
};
