'use server'
import axios from 'axios';


import { redirect } from 'next/navigation'


export const  EditUser = (data:any) => {

    console.log('rdfdfserdferdfer',data,'erfferddferfererfd');
    
    return axios.post('https://maplogixlatest-1.onrender.com/users/update/', data)
    .then(response => {
     
      console.log(response.data.data);
      // redirect('/profile')
      return response.data.data;
    })
    .catch(error => {
      
      console.error('Error creating profile:', error);
    });
};