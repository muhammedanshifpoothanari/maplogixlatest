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
const { getAllAbs: getAllUseCase } = require('../../../dataLayer/repository/index'); // Import your dependency
const createWrapper = require('../utility');
const execute = (dependency) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('getAllUseCase:');
    console.log('dependency:', dependency);
    const userData = yield dependency();
    console.log('jjjjjjj');
    console.log('dependency:', userData);
    if (userData === null) {
        return false;
    }
    return userData;
});
module.exports = createWrapper(getAllUseCase, execute);
