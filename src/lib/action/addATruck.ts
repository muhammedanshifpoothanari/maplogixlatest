'use server'
import axios from 'axios';


import { redirect } from 'next/navigation'

export const  CreateATruck = (data:any) => {
    console.log('rdfdfserdferdfer',data,'erfferddferfererfd');
    
    return axios.post('https://maplogixlatest-2.onrender.com/trucks/set/', data)
    .then(response => {
     
      console.log(response.data.data);
      return true;
    })
    .catch(error => {
      
      console.error('Error creating profile:', error);
    });
};