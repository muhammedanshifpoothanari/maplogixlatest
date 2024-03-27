import { Request, Response } from 'express';
const { getAllByLoadTypeUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByTypeCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByTypeCntrl,'hdhdhhdhd');
    const type: string =req.body.loadType 
    const loads = await wrappedFunction(type);
    console.log(loads,'hdhdhhdhd');
    if (loads) 
      return loads
  return false;
  } catch (error) {
    console.log(error);
    
  }
};


module.exports = {
    getAllByTypeCntrl
};