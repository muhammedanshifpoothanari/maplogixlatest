import { Request, Response } from 'express';
const { getAllByOwnerIdUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByOwnerIdCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByOwnerIdCntrl,'hdhdhhdhd');
    const id: string =req.body.ownerId 
    const loads = await wrappedFunction(id);
    console.log(loads,'hdhdhhdhd');
    if (loads) 
      return loads;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
 getAllByOwnerIdCntrl
};