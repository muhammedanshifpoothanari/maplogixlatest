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
const { createBidRepo: createBidRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const wrapperTocreateBid = require('../utility');
const createBidExecute = (dependency, data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('createLoadUseCase:', data);
    console.log('dependency:', dependency);
    const bidData = yield dependency(data);
    if (bidData === null) {
        return false;
    }
    return bidData;
});
module.exports = wrapperTocreateBid(createBidRepository, createBidExecute);
