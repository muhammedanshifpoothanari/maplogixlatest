'use server'
import axios from 'axios';

export const getLoadByOwner = async (id: any) => {
  try {

    const response = await axios.post('https://maplogixlatest-3.onrender.com/loads/Owner/', { ownerId: id });
    console.log(response.data.data, 'gdgfdfgdfddffdgfgdgd');
    return response.data.data; 
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; 
  }
};
