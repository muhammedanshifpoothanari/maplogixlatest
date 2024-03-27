/* eslint-disable react-hooks/exhaustive-deps */

'use client'
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/src/components/ui/button"
import { getUserByName } from "../lib/action/getProfile"
import { useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { setClickStateReducer } from "../redux/clickState/clickSlice";
import { Store } from "../redux/store";
import { useRouter } from "next/navigation";
export  function ProfileHeader() {
  const router = useRouter()
  
  const [userData, setUserData] = useState({
    userType: '',
    yearOfExperience: '',
    _id:'',
    userName: 'not provided',
    mobile: 'not updates',
    state: 'not found'
  });
  const authName = useSelector((state: {auth: {userName: ''}}) => state.auth.userName);


  const dispatch = useDispatch();

  const editer = (data:any) => {
    console.log('reached here',data);
    
    dispatch(setClickStateReducer({editUserId: data} )) 
    router.push('/editprofile') 
  }
  useEffect(() => {
    if(authName  === undefined) router.push('/auth');
  
    
    const fetchData = async () => {
      try {
        const data:any = await getUserByName(authName);
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, []);
 
  useEffect(() => {
    console.log(userData, 'UserData');
  }, [userData]);
 
  return (
    <div className="flex justify-center py-8 bg-gray-100">
      <div className="flex flex-col items-center p-4 bg-white w-[500px] rounded-lg shadow-md">
        <div className="relative mb-4">
          {/* <Avatar>
            <AvatarImage alt="Profile picture" src="/placeholder.svg?height=100&width=100" />
            <AvatarFallback>{userData?.userName}</AvatarFallback>
          </Avatar> */}
          {/* <Button className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full p-2">
            <PencilIcon className="h-4 w-4" />
          </Button> */}
        </div>
        <h2 className="text-xl font-semibold">{userData?.userName? userData?.userName: 'not provided'}</h2>
        <p className="text-sm text-gray-600"> {userData?.userType} | experience: {userData?.yearOfExperience?userData?.yearOfExperience: 'not provided'} | {userData?.state?userData?.state: 'not provided'}</p>
        <p className="text-sm font-semibold">Mobile:{userData?.mobile?userData?.mobile: 'not provided'}</p>
        <div className="flex mt-4 space-x-4">
          <Button variant="outline" onClick={() => editer( userData?._id)}>Edit</Button>
          {/* <Button variant="outline">My business card</Button> */}
        </div>
      </div>
      {/* <div className="flex flex-col items-start p-4 ml-8 bg-[#FFD700] rounded-lg shadow-md w-[350px]">
        <h3 className="text-xl font-semibold mb-2">undefined with Verified profiles are earning 4X more!</h3>
        <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700 mb-4">
          <div
            className="bg-black h-2.5 rounded-full"
            style={{
              width: "0%",
            }}
          />
        </div>
        <p className="text-sm">0% Complete</p>
        <Button className="mt-4 bg-black text-white">Verify AADHAAR now!</Button>
      </div> */}
    </div>
  )
}


function PencilIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}
