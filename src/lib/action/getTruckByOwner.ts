'use server'
import axios from 'axios';

export const getTruckByOwner = async (id: any) => {
  try {

    const response = await axios.post('https://maplogixlatest-2.onrender.com/trucks/OwnerId/', { ownerId: id });
    console.log(response.data.data, 'gdgfdfgdfddffdgfgdgd');
    return response.data.data; 
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; 
  }
};
