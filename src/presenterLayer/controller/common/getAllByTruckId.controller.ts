import { Request, Response } from 'express';
const { getAllByTruckIdUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByTruckIdCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByTruckIdCntrl,'hdhdhhdhd');
    const truckId: string =req.body.truckId; 
    console.log('1 controller');
    
    const bids = await wrappedFunction(truckId);
    console.log(bids,'hdhdhhdhd');
    if (bids) 
      return bids;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  getAllByTruckIdCntrl
};