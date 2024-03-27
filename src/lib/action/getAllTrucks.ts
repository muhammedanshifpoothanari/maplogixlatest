'use server'
import axios from 'axios';

export const getAllTrucks = async () => {
  try {

    const response = await axios.get('https://maplogixlatest-2.onrender.com/trucks/');
    console.log(response.data.data, 'gdgfdfgdfddffdgfgdgd');
    return response.data.data; 
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; 
  }
};
