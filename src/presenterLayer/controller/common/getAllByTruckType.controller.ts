import { Request, Response } from 'express';
const { getAllByTruckTypeUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByTypeCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByTypeCntrl,'hdhdhhdhd');
    const type: string =req.body.truckType 
    const trucks = await wrappedFunction(type);
    console.log(trucks,'hdhdhhdhd');
    if (trucks) 
      return trucks
  return false;
  } catch (error) {
    console.log(error);
    
  }
};


module.exports = {
    getAllByTypeCntrl
};