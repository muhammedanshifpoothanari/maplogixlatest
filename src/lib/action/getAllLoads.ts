'use server'
import axios from 'axios';

export const getAllLoads = async () => {
  try {

    const response = await axios.get('https://maplogixlatest-3.onrender.com/loads/');
    console.log(response.data.data, 'gdgfdfgdfddffdgfgdgd');
    return response.data.data; 
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; 
  }
};
