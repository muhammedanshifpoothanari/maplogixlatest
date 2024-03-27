import { Request, Response } from 'express';
const { getAllBySenderIdUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllBySenderIdCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllBySenderIdCntrl,'hdhdhhdhd');
    const senderId: string =req.body.senderId; 
    const chat = await wrappedFunction(senderId);
    console.log(chat,'hdhdhhdhd');
    if (chat) 
      return chat;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  getAllBySenderIdCntrl
};