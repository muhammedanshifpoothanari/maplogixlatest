import { Request, Response } from 'express';
const { getAllByLoadNameUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByNameCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByNameCntrl,'hdhdhhdhd');
    const loadName: string =req.body.loadName
    const loads = await wrappedFunction(loadName);
    console.log(loads,'hdhdhhdhd');
    if (loads) 
      return loads
  return false
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllByNameCntrl
};