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
const { getLoadModel: modelToGetLoadById } = require('../getLoadModel');
const getByLoadId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id)
        throw new Error('load  id was not properly passed to the repository!');
    const loadModel = modelToGetLoadById();
    try {
        const loadArray = yield loadModel.findById(id).exec();
        if (!loadArray || loadArray.length === 0)
            return false;
        return loadArray;
    }
    catch (error) {
        throw new Error('Error in getting load from the database by load id!');
    }
});
module.exports = {
    getByLoadId
};
