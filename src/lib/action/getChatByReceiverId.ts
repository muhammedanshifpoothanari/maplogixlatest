'use server'
import axios from 'axios';

export const getChatByReceiverId = async (receiverId:string) => {
  try {
   console.log(receiverId,'ghffhvfeghfdcghfc');
   
    const response = await axios.post('https://maplogixlatest-4.onrender.com/chats/ReceiverId/', {receiverId});

    return response.data.data
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; 
  }
};
