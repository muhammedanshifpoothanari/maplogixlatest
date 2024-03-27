import { Request, Response } from 'express';
const { getByBidIdUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getByBidIdCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getByBidIdCntrl,'hdhdhhdhd');
    const id: string =req.params.id 
    const bids = await wrappedFunction(id);
    console.log(bids,'hdhdhhdhd');
    if (bids) 
      return bids;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
 getByBidIdCntrl
};