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
const { updateAbs: wrappedFunctions } = require('../../../domainLayer/useCase/index');
const updateCntrlForRabbitMQ = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('reached at update user', data);
        const { id, userName, mobile, userType, assetId, state, about, yearOfExperience, operatingStates, operatingRoutes, handledMaterials, accountNumber, } = data.body;
        const newData = {
            id,
            userName,
            mobile,
            assetId,
            userType,
            state,
            about,
            yearOfExperience,
            operatingStates,
            operatingRoutes,
            handledMaterials,
            accountNumber,
        };
        const users = yield wrappedFunctions(newData);
        return users || false;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
});
module.exports = {
    updateCntrlForRabbitMQ,
};
