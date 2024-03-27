import { Request, Response } from 'express';
const { getByChatIdUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getByChatIdCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getByChatIdCntrl,'hdhdhhdhd');
    const id: string =req.params.id 
    const chats = await wrappedFunction(id);
    console.log(chats,'hdhdhhdhd');
    if (chats) 
      return chats;
    
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
 getByChatIdCntrl
};