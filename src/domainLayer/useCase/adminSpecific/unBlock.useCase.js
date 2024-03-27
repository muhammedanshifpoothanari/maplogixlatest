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
const { unBlockLoadByIdRepo: unBlockLoadByIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const unBlockLoadByIdRepoWrapper = require('../utility');
const unBlockLoadByIdRepoExecute = (dependency, id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('unBlockLoadByIdRepository:');
    console.log('dependency:', dependency);
    const loadData = yield dependency(id);
    if (loadData === null) {
        return false;
    }
    return loadData;
});
module.exports = unBlockLoadByIdRepoWrapper(unBlockLoadByIdRepository, unBlockLoadByIdRepoExecute);
