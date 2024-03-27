'use server'
import axios from 'axios';

export const setChatBySenderAndReceiverId = async (data:any) => {
  try {
    const response = await axios.post('https://maplogixlatest-4.onrender.com/chats/set/', data);
    console.log(response.data.data, 'gdgfdfgdfddffdgfgdgd');
    return response.data.data; // Return the fetched data
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Throw the error to handle it in the client-side code
  }
};

// { path: '/chats', method: 'GET', fn: getAllAtUser },
// { path: '/chats/ReceiverId', method: 'POST', fn: getAllByReceiverIdAtUser },
// { path: '/chats/SenderAndReceiverId', method: 'POST', fn: getAllBySenderAndReceiverIdAtUser },
// { path: '/chats/SenderId', method: 'POST', fn: getAllBySenderIdAtUser },
// { path: '/chats/:id', method: 'GET', fn: getAllByChatIdAtUser },
// { path: '/chats/set', method: 'POST', fn: setAtUser },
// { path: '/chats/update', method: 'POST', fn: updateAtUser },
