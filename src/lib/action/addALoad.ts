'use server'
import axios from 'axios';


import { redirect } from 'next/navigation'

export const  CreateALoad = (data:any) => {
    console.log('rdfdfserdferdfer',data,'erfferddferfererfd');
    
    return axios.post('https://maplogixlatest-3.onrender.com/loads/set/', data)
    .then(response => {
     
      return true;
    })
    .catch(error => {
      
      console.error('Error creating profile:', error);
    });
};