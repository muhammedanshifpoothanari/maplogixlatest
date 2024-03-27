'use client'


import React, { useState, useEffect } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useSelector } from 'react-redux';
import { getChatBySenderAndReceiverId } from '../lib/action/getChat';
import { setChatBySenderAndReceiverId } from '../lib/action/setChat';
import { toast } from './ui/use-toast';
import { Rabbits } from '../lib/action/rabbitmq';

export function BidChat({ onClose }:any) {
  const clickState = useSelector((state: {clickState: {senderId: '',receiverId: '' }}) => state?.clickState);
  const [senderId, setSenderId] = useState('')
  const [receiverId, setReceiverId] = useState('');
  const [inputMessage, setinputMessage] = useState('');
  const [bidApproved, setBidApproved]  = useState(false);
  const [queueMessages, setQueueMessages] = useState(false);
  

  // State to store messages
  const [messages, setMessages] = useState([
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', user: 'user1' },
    { text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', user: 'user2' },
    { text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', user: 'user1' },
    { text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', user: 'user2' },
  ]);
   


  useEffect(() => {
    const fetchRabbitData = async () => {
      try {
        console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
        fetchData()
        const response = await Rabbits();
        if (response === true) {
          setQueueMessages(true);
        }
      
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchRabbitData();
  
  });

  const fetchData = async () => {
  

    try {
      const response = await getChatBySenderAndReceiverId({senderId:senderId,receiverId:receiverId});
      console.log(response, 'bggrdf');
      response.map((obj: any) => { if (obj.message.startsWith('$_%')) setBidApproved(true); });

      setMessages(response);
      setQueueMessages(false);
    } catch (error) {
      console.error('Error fetching chat data:', error);
    }
  };

  useEffect(() => {
   
    fetchData(); 
  }, [senderId,receiverId]);
  // State to store bid value
  const [bidValue, setBidValue] = useState('');
  useEffect(() => {
 
    setSenderId(clickState.senderId)
    setReceiverId(clickState.receiverId)
  },[clickState]);
  // Function to handle sending a message
  const sendMessage = async () => {
    if (
      senderId.trim() === '' ||
      receiverId.trim() === '' ||
      inputMessage.trim() === ''
    ) {
     toast({
       title: "Please fill the input feild",
       description: "",
     })
    } else {
      await setChatBySenderAndReceiverId({
        senderId,
        receiverId,
        message:inputMessage
      })
      fetchData()
    }
  };
 
  // Function to handle submitting a bid
  const submitBid = () => {
    // Logic to handle submitting bid
    console.log('Bid submitted:', bidValue);
    // Clear the bid input field after submitting the bid
    setBidValue('');
  };

  // Function to handle approving a bid (for owner)
  const approveBid = () => {
    // Logic to handle approving bid
    console.log('Bid approved');
  };

  useEffect(() => {
    if(queueMessages === true) {
      fetchData();
    }
  },[queueMessages])

  return (
    <div className="relative z-10 flex flex-col max-w-lg p-4  bg-white rounded-lg shadow">
      <button className="absolute top-0 right-2" onClick={onClose}>❌</button>

<div className=" flex flex-col space-y-4 overflow-y-auto h-[260px]   p-2 border-b-2 border-gray-200">
        {/* Render messages */}
        {messages.map((msg, index) => (
  msg.user !== senderId ? (
    <div key={index} className="flex items-center space-x-2">
      <Avatar>
        <AvatarImage alt="User avatar" src={`/user${msg.user}.jpg`} />
        <AvatarFallback></AvatarFallback>
      </Avatar>
      <div className="bg-gray-100 p-2 rounded-lg">
      <p className={`text-sm ${msg.text?.startsWith('$_%') ? 'text-green' : ''}`}>
  {msg.text?.startsWith('$_%') ?'bidAmount is:'+ msg.text.slice(3) : msg.text}
</p>      </div>
    </div>
  ) : (
    <div key={index} className="flex flex-row-reverse items-center gap-2">
      <Avatar>
        <AvatarImage alt="User avatar" src={`/user${msg.user}.jpg`} />
        <AvatarFallback>You</AvatarFallback>
      </Avatar>
      <div className="bg-gray-100 p-2 rounded-lg">
      <p className={`text-sm ${msg.text?.startsWith('$_%') ? 'text-green' : ''}`}>
  {msg.text?.startsWith('$_%') ?'bidAmount is:'+ msg.text.slice(3) : msg.text}
</p>      </div>
      
    </div>
  )
))}

      </div>
      {/* Input for message */}
      <div className="flex items-center p-2 space-x-2 border-b-2  border-gray-200">
        <Input className="flex-1" placeholder="Type your message here" onChange={e => setinputMessage(e.target.value)}/>
        {bidApproved === true?        <Button className="flex-shrink-0  hover:bg-blue-500 hover:text-white" onClick={sendMessage}>Chat</Button>:

        <Button className="flex-shrink-0  hover:bg-blue-500 hover:text-white" onClick={sendMessage}>Chat/Bid</Button>}
      </div>
      
      {/* Button to approve bid (visible for owner) */}
      {/* <div className="flex items-center justify-center p-2 space-x-2">
        <Button className="flex-shrink-0 w-[80%] hover:bg-blue-500 hover:text-white" variant={'secondary'} onClick={approveBid}>Bid Approve</Button>
      </div> */}
    </div>
  );
}
