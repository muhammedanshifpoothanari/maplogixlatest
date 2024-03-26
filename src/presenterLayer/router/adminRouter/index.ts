import { Router, Request, Response, NextFunction } from 'express';
const {getAllCntrlAbs: getAllRouter} = require('../../controller/index');
const {getAllByCityCntrlAbs: getAllByCityRouter} = require('../../controller/index');
const { getAllByCountryCntrlAbs : getAllByCountryRouter} = require('../../controller/index');
const {getAllByDistrictCntrlAbs: getAllByDistrictRouter} = require('../../controller/index');
const {getAllByNameCntrlAbs: getAllByNameRouter} = require('../../controller/index');
const {getAllByPanchayathCntrlAbs: getAllByPanchayathRouter } = require('../../controller/index');
const {getAllByStateCntrlAbs: getAllByStateRouter } = require('../../controller/index');
const {getAllByTypeCntrlAbs: getAllByTypeRouter } = require('../../controller/index');
const {getByIdCntrlAbs: getByIdRouter } = require('../../controller/index');
const {isAdminCntrlAbs: isAdminCntrlAbs } = require('../../controller/index');
const {blockByIdCntrlAbs: blockByIdCntrlAbs } = require('../../controller/index');
const {setByEmailCntrlAbs: setByEmailCntrlAbs } = require('../../controller/index');
const {unBlockByIdCntrlAbs: unBlockByIdCntrlAbs } = require('../../controller/index');
const {unVerifyByIdCntrlAbs: unVerifyByIdCntrlAbs } = require('../../controller/index');
const {verifyByIdCntrlAbs: verifyByIdCntrlAbs } = require('../../controller/index');
const adminRouters = Router();

interface RouteHandler {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

const asyncErrorHandler = (fn: RouteHandler) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result: any = await fn(req, res,next );
    if (!result) {
      return res.status(404).json({ error: 'Data not found!' });
    }
    res.status(200).json({ message: 'Success', data: result });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing the request. Please try again later.' });
  }
};

const routes = [
  { path: '/users', method: 'GET', fn: getAllRouter },
  { path: '/users/byCity', method: 'GET', fn: getAllByCityRouter },
  { path: '/users/byCountry', method: 'GET', fn: getAllByCountryRouter },
  { path: '/users/byDistrict', method: 'GET', fn: getAllByDistrictRouter },
  { path: '/users/byName', method: 'GET', fn: getAllByNameRouter },
  { path: '/users/byPanchayath', method: 'GET', fn: getAllByPanchayathRouter },
  { path: '/users/ByState', method: 'GET', fn: getAllByStateRouter },
  { path: '/users/ByType', method: 'GET', fn: getAllByTypeRouter },
  { path: '/users/:id', method: 'GET', fn: getByIdRouter },
  { path: '/users/isAdmin', method: 'POST', fn: isAdminCntrlAbs },

    { path: '/users/block', method: 'POST', fn: blockByIdCntrlAbs },
    { path: '/users/unblock', method: 'POST', fn: unBlockByIdCntrlAbs },
    { path: '/users/unverify', method: 'POST', fn: unVerifyByIdCntrlAbs },
    { path: '/users/verify', method: 'POST', fn: verifyByIdCntrlAbs },
  ];
  

for (const route of routes) {
  const { path, fn } = route;
  const routeHandler = asyncErrorHandler(fn);

  if (route.method === 'GET') {
    adminRouters.get(path, routeHandler);
  } else if (route.method === 'POST') {
    adminRouters.post(path, routeHandler);
  } else if (route.method === 'DELETE') {
    adminRouters.delete(path, routeHandler);
  } else if (route.method === 'PATCH') {
    adminRouters.patch(path, routeHandler);
  } else if (route.method === 'PUT') {
    adminRouters.put(path, routeHandler);
  }
}

module.exports = adminRouters
