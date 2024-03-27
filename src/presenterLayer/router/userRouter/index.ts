import { Router, Request, Response, NextFunction } from 'express';
const {getAllController: getAllAtUser } = require('../../controller/index');
const {getAllByReceiverIdController: getAllByReceiverIdAtUser} = require('../../controller/index');
const {getAllBySenderAndReceiverIdController: getAllBySenderAndReceiverIdAtUser} = require('../../controller/index');
const {getAllBySenderIdController: getAllBySenderIdAtUser} = require('../../controller/index');
const {getByChatIdController: getAllByChatIdAtUser} = require('../../controller/index');

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
  { path: '/chats', method: 'GET', fn: getAllAtUser },
  { path: '/chats/ReceiverId', method: 'POST', fn: getAllByReceiverIdAtUser },
  { path: '/chats/SenderAndReceiverId', method: 'POST', fn: getAllBySenderAndReceiverIdAtUser },
  { path: '/chats/SenderId', method: 'POST', fn: getAllBySenderIdAtUser },
  { path: '/chats/:id', method: 'GET', fn: getAllByChatIdAtUser },
  { path: '/chats/set', method: 'POST', fn: setAtUser },
  { path: '/chats/update', method: 'POST', fn: updateAtUser },
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
