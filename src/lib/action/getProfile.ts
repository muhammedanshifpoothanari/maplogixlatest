'use server'
import axios from 'axios';

export const getUserByName = async (userName: string) => {
  try {
    const response = await axios.post('https://maplogixlatest-1.onrender.com/users/byName/', { userName });
    console.log(response.data.data, 'gdgfdfgdfddffdgfgdgd');
    return response.data.data[0]; // Return the fetched data
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Throw the error to handle it in the client-side code
  }
};
