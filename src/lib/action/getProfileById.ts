'use server'
import axios from 'axios';
import { Store } from '@/src/redux/store';

export const getUserById = async (clickState:any) => {
  console.log(clickState.editUserId);
  

  try {
    const response = await axios.get(`https://maplogixlatest-1.onrender.com/users/${clickState.editUserId}`)
    console.log(response.data.data, 'gdgfdfgdfddffdgfgdgd');
    return response.data.data; 
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Throw the error to handle it in the client-side code
  }
};