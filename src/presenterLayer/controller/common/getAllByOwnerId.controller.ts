import { Request, Response } from 'express';
const { getAllByOwnerIdUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByOwnerIdCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByOwnerIdCntrl,'hdhdhhdhd');
    const ownerId: string =req.body.ownerId 
    const trucks = await wrappedFunction(ownerId);
    console.log(trucks,'hdhdhhdhd');
    if (trucks) 
      return trucks;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
 getAllByOwnerIdCntrl
};