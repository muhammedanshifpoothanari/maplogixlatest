import { Request, Response } from 'express';
const { getAllByUserIdUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByUserIdCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByUserIdCntrl,'hdhdhhdhd');
    const userId: string =req.body.userId 
    const bids = await wrappedFunction(userId);
    console.log(bids,'hdhdhhdhd');
    if (bids) 
      return bids;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  getAllByUserIdCntrl
};