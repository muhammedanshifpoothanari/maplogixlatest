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
const { getAllController: getAllAtUser } = require('../../controller/index');
const { getAllByUserIdController: getAllByUserIdAtUser } = require('../../controller/index');
const { getAllByTruckIdController: getAllByTruckIdAtUser } = require('../../controller/index');
const { getAllByLoadIdController: getAllByLoadIdAtUser } = require('../../controller/index');
const { getByBidIdController: getAllByBidIdAtUser } = require('../../controller/index');
const { setController: setAtUser } = require('../../controller/index');
const { updateController: updateAtUser } = require('../../controller/index');
const userRouters = (0, express_1.Router)();
const asyncErrorHandler = (fn) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield fn(req, res, next);
        if (!result) {
            return res.status(404).json({ error: 'Data not found!' });
        }
        res.status(200).json({ message: 'Success', data: result });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while processing the request. Please try again later.' });
    }
});
const routes = [
    { path: '/bids', method: 'GET', fn: getAllAtUser },
    { path: '/bids/TruckId', method: 'POST', fn: getAllByTruckIdAtUser },
    { path: '/bids/UserId', method: 'POST', fn: getAllByUserIdAtUser },
    { path: '/bids/LoadId', method: 'POST', fn: getAllByLoadIdAtUser },
    { path: '/bids/:id', method: 'GET', fn: getAllByBidIdAtUser },
    { path: '/bids/set', method: 'POST', fn: setAtUser },
    { path: '/bids/update', method: 'POST', fn: updateAtUser },
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
