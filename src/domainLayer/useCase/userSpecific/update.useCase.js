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
const { updateBidRepo: updateBidRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const updateWrapperToupdateBid = require('../utility');
const updateBidExecute = (dependency, data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('updateBidRepository:');
    console.log('dependency:', dependency);
    const id = data.id;
    console.log(data, 'at usecase');
    const bidData = yield dependency(id, data);
    if (bidData === null) {
        return false;
    }
    return bidData;
});
module.exports = updateWrapperToupdateBid(updateBidRepository, updateBidExecute);
