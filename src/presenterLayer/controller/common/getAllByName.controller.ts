import { Request, Response } from 'express';
const { getAllByNameUserAbs : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByNameCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByNameCntrl,'hdhdhhdhd');
    const userName: string =req.body.userName;
    const users = await wrappedFunction(userName);
    console.log(users,'hdhdhhdhd');
    if (users) 
      return users
  return false
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllByNameCntrl
};