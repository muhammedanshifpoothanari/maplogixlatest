import { Request, Response } from 'express';
const { getAllByIdUserAbs : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getByIdCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getByIdCntrl,'hdhdhhdhd');
    const id: string =req.params.id 
    const users = await wrappedFunction(id);
    console.log(users,'hdhdhhdhd');
    if (users) 
      return users;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getByIdCntrl
};