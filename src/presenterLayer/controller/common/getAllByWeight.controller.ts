import { Request, Response } from 'express';
const { getAllByWeightUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByWeightCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByWeightCntrl,'hdhdhhdhd');
    const capacity: number =req.body.capacity;
    const sort: number = req.body.sort; 
    const trucks = await wrappedFunction(capacity, sort);
    console.log(trucks,'hdhdhhdhd');
    if (trucks) 
      return trucks
  return false;
  } catch (error) {
    console.log(error);
    
  }
};


module.exports = {
    getAllByWeightCntrl
};