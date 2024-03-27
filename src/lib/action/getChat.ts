'use server'
import axios from 'axios';

export const getChatBySenderAndReceiverId = async (data: any) => {
  try {
    const response = await axios.post('https://maplogixlatest-4.onrender.com/chats/SenderAndReceiverId',data);
    console.log(response.data.data, 'gdgfdfgdfddffdgfgdgd');
    return response.data.data; 
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; 
  }
};


