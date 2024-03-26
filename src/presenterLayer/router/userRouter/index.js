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
const express_1 = require("express");
const { getAllCntrlAbs: getAllRouter } = require('../../controller/index');
const { getAllByNameCntrlAbs: getAllByNameRouter } = require('../../controller/index');
const { getAllByStateCntrlAbs: getAllByStateRouter } = require('../../controller/index');
const { getAllByTypeCntrlAbs: getAllByTypeRouter } = require('../../controller/index');
const { getByIdCntrlAbs: getByIdRouter } = require('../../controller/index');
const { isAdminCntrlAbs: isAdminCntrlAbs } = require('../../controller/index');
const { setCntrlAbs: setRouter } = require('../../controller/index');
const { updateCntrlAbs: updateRouter } = require('../../controller/index');
const userRouters = (0, express_1.Router)();
const asyncErrorHandler = (fn) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield fn(req, res, next);
        console.log(result, 'bjkhvaedsd');
        if (!result) {
            return res.status(404).json({ error: 'Data not found!' });
        }
        return res.status(200).json({ message: 'Success', data: result });
    }
    catch (error) {
        console.error('Error:', error);
    }
});
const routes = [
    { path: '/users', method: 'GET', fn: getAllRouter },
    { path: '/users/byName', method: 'POST', fn: getAllByNameRouter },
    { path: '/users/ByState', method: 'GET', fn: getAllByStateRouter },
    { path: '/users/ByType', method: 'GET', fn: getAllByTypeRouter },
    { path: '/users/:id', method: 'GET', fn: getByIdRouter },
    { path: '/users/isAdmin', method: 'POST', fn: isAdminCntrlAbs },
    { path: '/users/set', method: 'POST', fn: setRouter },
    { path: '/users/update', method: 'POST', fn: updateRouter },
];
for (const route of routes) {
    const { path, fn } = route;
    const routeHandler = asyncErrorHandler(fn);
    if (route.method === 'GET') {
        userRouters.get(path, routeHandler);
    }
    else if (route.method === 'POST') {
        userRouters.post(path, routeHandler);
    }
    else if (route.method === 'DELETE') {
        userRouters.delete(path, routeHandler);
    }
    else if (route.method === 'PATCH') {
        userRouters.patch(path, routeHandler);
    }
    else if (route.method === 'PUT') {
        userRouters.put(path, routeHandler);
    }
}
module.exports = userRouters;
