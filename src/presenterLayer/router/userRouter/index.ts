import { Router, Request, Response, NextFunction } from 'express';
const {getAllCntrlAbs: getAllRouter} = require('../../controller/index');
const {getAllByNameCntrlAbs: getAllByNameRouter} = require('../../controller/index');
const {getAllByStateCntrlAbs: getAllByStateRouter } = require('../../controller/index');
const {getAllByTypeCntrlAbs: getAllByTypeRouter } = require('../../controller/index');
const {getByIdCntrlAbs: getByIdRouter } = require('../../controller/index');
const {isAdminCntrlAbs: isAdminCntrlAbs } = require('../../controller/index');
const {setCntrlAbs: setRouter } = require('../../controller/index');
const {updateCntrlAbs: updateRouter } = require('../../controller/index');
const userRouters = Router();

interface RouteHandler {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

const asyncErrorHandler = (fn: RouteHandler) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result: any = await fn(req, res,next );
    console.log(result,'bjkhvaedsd');
    
    if (!result) {
     return res.status(404).json({ error: 'Data not found!' });
    }
    return res.status(200).json({ message: 'Success', data: result });
  } catch (error) {
    console.error('Error:', error);
  }
};

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
  } else if (route.method === 'POST') {
    userRouters.post(path, routeHandler);
  } else if (route.method === 'DELETE') {
    userRouters.delete(path, routeHandler);
  } else if (route.method === 'PATCH') {
    userRouters.patch(path, routeHandler);
  } else if (route.method === 'PUT') {
    userRouters.put(path, routeHandler);
  }
}

module.exports = userRouters
