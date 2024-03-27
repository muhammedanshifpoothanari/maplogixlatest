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
const { getAllController: getAllAtAdmin } = require('../../controller/index');
const { getAllByBidderIdController: getAllByBidderIdAtAdmin } = require('../../controller/index');
const { getAllByNameController: getAllByNameAtAdmin } = require('../../controller/index');
const { getAllByTypeController: getAllByTypeAtAdmin } = require('../../controller/index');
const { getAllByOwnerIdController: getAllByOwnerIdAtAdmin } = require('../../controller/index');
const { startingPointController: startingPointAtAdmin } = require('../../controller/index');
const { getAllByStartingPointPostalController: getAllByStartingPointPostalAtAdmin } = require('../../controller/index');
const { getAllByTruckIdController: getAllByTruckIdAtAdmin } = require('../../controller/index');
const { getAllByWareHouseIdController: getAllByWareHouseIdAtAdmin } = require('../../controller/index');
const { getAllByWeightController: getAllByWeightAtAdmin } = require('../../controller/index');
const { getByLoadIdController: getByLoadIdAtAdmin } = require('../../controller/index');
const { blockByIdController: blockByIdAtAdmin } = require('../../controller/index');
const { unBlockByIdController: unBlockByIdAtAdmin } = require('../../controller/index');
const { unVerifyByIdController: unVerifyByIdAtAdmin } = require('../../controller/index');
const { verifyByIdController: verifyByIdAtAdmin } = require('../../controller/index');
const adminRouters = (0, express_1.Router)();
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
    { path: '/loads', method: 'GET', fn: getAllAtAdmin },
    { path: '/loads/byBidder/:id', method: 'GET', fn: getAllByBidderIdAtAdmin },
    { path: '/loads/byName', method: 'POST', fn: getAllByNameAtAdmin },
    { path: '/loads/byType', method: 'POST', fn: getAllByTypeAtAdmin },
    { path: '/loads/Owner/:id', method: 'GET', fn: getAllByOwnerIdAtAdmin },
    { path: '/loads/bystartingPoint', method: 'POST', fn: startingPointAtAdmin },
    { path: '/loads/ByStartingPointPostal', method: 'POST', fn: getAllByStartingPointPostalAtAdmin },
    { path: '/loads/ByTruck/:id', method: 'GET', fn: getAllByTruckIdAtAdmin },
    { path: '/loads/ByWareHouse/:id', method: 'GET', fn: getAllByWareHouseIdAtAdmin },
    { path: '/loads/ByWeight', method: 'POST', fn: getAllByWeightAtAdmin },
    { path: '/loads/ByLoad', method: 'POST', fn: getByLoadIdAtAdmin },
    { path: '/block', method: 'POST', fn: blockByIdAtAdmin },
    { path: '/unblock', method: 'POST', fn: unBlockByIdAtAdmin },
    { path: '/unVerify', method: 'POST', fn: unVerifyByIdAtAdmin },
    { path: '/verify', method: 'POST', fn: verifyByIdAtAdmin },
];
for (const route of routes) {
    const { path, fn } = route;
    const routeHandler = asyncErrorHandler(fn);
    if (route.method === 'GET') {
        adminRouters.get(path, routeHandler);
    }
    else if (route.method === 'POST') {
        adminRouters.post(path, routeHandler);
    }
    else if (route.method === 'DELETE') {
        adminRouters.delete(path, routeHandler);
    }
    else if (route.method === 'PATCH') {
        adminRouters.patch(path, routeHandler);
    }
    else if (route.method === 'PUT') {
        adminRouters.put(path, routeHandler);
    }
}
module.exports = adminRouters;
