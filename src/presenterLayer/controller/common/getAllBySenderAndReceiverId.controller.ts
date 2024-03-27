import { Request, Response } from 'express';
const { getAllBySenderAndReceiverIdUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllBySenderAndReceiverIdCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllBySenderAndReceiverIdCntrl,'hdhdhhdhd');
    const senderId: string =req.body.senderId; 
    const receiverId: string =req.body.receiverId;
    console.log(req.body,'ffdvfdv');
    
    const chats = await wrappedFunction(senderId, receiverId);
    console.log(chats,'hdhdhhdhd');
    if (chats) 
      return chats;

  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  getAllBySenderAndReceiverIdCntrl
};