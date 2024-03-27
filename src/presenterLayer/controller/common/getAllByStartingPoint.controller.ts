import { Request, Response } from 'express';
const { getAllByStartingPointUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const startingPointCntrl = async (req: Request, res: Response) => {
  try {
    console.log(startingPointCntrl,'hdhdhhdhd');
    const startingPoint: string =req.body.startingPoint;

    const loads = await wrappedFunction(startingPoint);
    console.log(loads,'hdhdhhdhd');
    if (loads) 
      return loads
  return false
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    startingPointCntrl
};