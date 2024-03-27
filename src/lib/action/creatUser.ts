'use server'

import { toast } from '@/src/components/ui/use-toast';
import axios from 'axios';


import { redirect } from 'next/navigation'


export const  CreatUser = async (data:any) => {

    console.log('rdfdfserdferdfer',data,'erfferddferfererfd');
    
  return await axios.post('https://maplogixlatest-1.onrender.com/users/set/', data)
    .then(response => {
      console.log(response.data);
      if(response.data.data === true) {
          
        
        return data.userName;
      }
      return false
    })
    .catch(error => {
      
      console.error('Error creating profile:', error);
    });
};


export const  SendUser = async (data:any) => {
  console.log('r',data,'erfferddferfererfd');
  
 return await axios.post('https://maplogixlatest-1.onrender.com/users/set/', data)
  .then(response => {
   
    console.log(response.data.data,'value');
    
   return response.data.data
  })
  .catch(error => {
    
    console.error('Error creating profile:', error);
  });
};


