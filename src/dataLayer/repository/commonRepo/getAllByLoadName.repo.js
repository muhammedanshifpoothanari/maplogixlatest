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
const { getLoadModel: modelToGetLoadByName } = require('../getLoadModel');
const getAllByLoadName = (loadName) => __awaiter(void 0, void 0, void 0, function* () {
    if (!loadName)
        throw new Error('load name was not properly passed to the repository!');
    const loadModel = modelToGetLoadByName();
    try {
        const loadArray = yield loadModel.find({ loadName: loadName }).exec();
        if (!loadArray || loadArray.length === 0)
            return false;
        return loadArray;
    }
    catch (error) {
        throw new Error('Error in getting load from the database by load name!');
    }
});
module.exports = {
    getAllByLoadName
};
