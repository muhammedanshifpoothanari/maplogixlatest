import { Request, Response } from 'express';
const { getAllByTypeUserAbs : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByTypeCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByTypeCntrl,'hdhdhhdhd');
    const type: string =req.body.userType 
    const users = await wrappedFunction(type);
    console.log(users,'hdhdhhdhd');
    if (users) 
      return users
  return false;
  } catch (error) {
    console.log(error);
    
  }
};


module.exports = {
    getAllByTypeCntrl
};