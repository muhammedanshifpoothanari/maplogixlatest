import { Request, Response } from 'express';
const { isAdminUserAbs : wrappedFunction } = require('../../../domainLayer/useCase/index');

const isAdminCntrl = async (req: Request, res: Response) => {
  try {
    console.log(isAdminCntrl,'hdhdhhdhd');
    const mobile: string =req.body.mobile 
    const users = await wrappedFunction(mobile);
    console.log(users,'hdhdhhdhd');
    if (users) 
      return users;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  isAdminCntrl
};