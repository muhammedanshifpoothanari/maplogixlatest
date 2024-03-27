import { Request, Response } from 'express';
const { getAllByLoadIdUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByLoadIdCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByLoadIdCntrl,'hdhdhhdhd');
    const loadId: string =req.body.loadId; 
    const bids = await wrappedFunction(loadId);
    console.log(bids,'hdhdhhdhd');
    if (bids) 
      return bids;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  getAllByLoadIdCntrl
};