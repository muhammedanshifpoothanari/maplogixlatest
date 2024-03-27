'use server'

import { toast } from '@/src/components/ui/use-toast';
import axios from 'axios';


import { redirect } from 'next/navigation'


export const  BidApprove = async (data:any) => {

    console.log('rdfdfserdferdfer',data,'erfferddferfererfd');
    
  return await axios.post('https://maplogixlatest-5.onrender.com/bids/set/', data)
    .then(response => {
      console.log(response.data);
      if(response.data.data === true) {
        return true;
      }
    })
    .catch(error => {
      
      console.error('Error creating profile:', error);
    });
};

