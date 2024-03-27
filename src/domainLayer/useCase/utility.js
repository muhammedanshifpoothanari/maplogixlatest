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
module.exports = (dependency, execute) => {
    console.log('reached at utility');
    if (!dependency) {
        return false;
    }
    console.log('reached at utility');
    return (...args) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield execute(dependency, ...args);
            return result;
        }
        catch (error) {
            throw new Error(`An error occurred: ${error}`);
        }
    });
};
