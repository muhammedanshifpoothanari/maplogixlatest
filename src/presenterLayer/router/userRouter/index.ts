import { Router, Request, Response, NextFunction } from 'express';
const {getAllController: getAllAtUser } = require('../../controller/index');
const {getAllByNameController: getAllByNameAtUser } = require('../../controller/index');
const {getAllByTypeController: getAllByTypeAtUser} = require('../../controller/index');
const {getAllByOwnerIdController: getAllByOwnerIdAtUser} = require('../../controller/index');
const {startingPointController: startingPointAtUser} = require('../../controller/index');
const {getAllByWeightController: getAllByWeightAtUser} = require('../../controller/index');
const {getByLoadIdController: getByLoadIdAtUser } = require('../../controller/index')
const {setController: setAtUser} = require('../../controller/index');
const {updateController: updateAtUser} = require('../../controller/index');
const userRouters = Router();

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
  { path: '/loads', method: 'GET', fn: getAllAtUser },
  { path: '/loads/byName', method: 'POST', fn: getAllByNameAtUser },
  { path: '/loads/byType', method: 'POST', fn: getAllByTypeAtUser },
  { path: '/loads/Owner/', method: 'POST', fn: getAllByOwnerIdAtUser },
  { path: '/loads/bystartingPoint', method: 'POST', fn: startingPointAtUser },
  { path: '/loads/ByWeight', method: 'POST', fn: getAllByWeightAtUser },
  { path: '/loads/:id', method: 'GET', fn: getByLoadIdAtUser },
  { path: '/loads/set', method: 'POST', fn: setAtUser },
  { path: '/loads/update', method: 'POST', fn: updateAtUser },
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
