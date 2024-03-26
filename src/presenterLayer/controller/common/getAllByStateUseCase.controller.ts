import { Request, Response } from 'express';
const { getAllByStateUseCaseAbs : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByStateCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByStateCntrl,'hdhdhhdhd');
    const state: string =req.body.state 
    const users = await wrappedFunction(state);
    console.log(users,'hdhdhhdhd');
    if (users) 
      return users;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllByStateCntrl
};