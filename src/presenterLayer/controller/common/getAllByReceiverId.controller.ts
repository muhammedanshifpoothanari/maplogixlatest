import { Request, Response } from 'express';
const { getAllByReceiverIdUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByReceiverIdCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByReceiverIdCntrl,'hdhdhhdhd');
    const receiverId: string =req.body.receiverId; 
    console.log('1 controller',receiverId);
    
    const chats = await wrappedFunction(receiverId);
    console.log(chats,'hdhdhhdhd');
    if (chats) 
      return chats;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  getAllByReceiverIdCntrl
};