'use client'
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { AvatarImage, Avatar } from "@/src/components/ui/avatar"
import { Button } from "@/src/components/ui/button"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserByName } from "../lib/action/getProfile"
import { BidChat } from "./bidchat"
import { setClickStateReducer } from "../redux/clickState/clickSlice"

export  function LoadCard({variant='simple',obj}: any) {
  const dispatch = useDispatch()
  const [data, setData] = useState(obj);
  const [userData, setUserData] = useState({_id: ''});
  const [chat, setChat] = useState(false);
  const authName = useSelector((state: {auth: {userName: ''}}) => state.auth.userName);
  
  const getUser = async () => {
    const data:any = await getUserByName(authName);
    setUserData(data);
  }

  useEffect(() => {
    console.log('ofdvfdvdfvfdfdvfdv',obj,'objbjbjjbbjbjj');
    setData(obj);
    getUser()
  },[])
  useEffect(
    () => {
      console.log(userData?._id,'refdefrerfd');
      
      dispatch(setClickStateReducer({senderId: userData?._id,receiverId:data._id} )) 
    },[chat])
  useEffect(() => {
    console.log('userData',userData,'userData');
    
  },[userData])
const onClose = () => {
  setChat(false);
}

  return (

    (variant === 'simple')? 
    chat === true? <BidChat onClose={onClose} />:<Card className="w-full max-w-lg bg-white shadow-md rounded-lg overflow-hidden">
      <CardContent className="flex justify-between items-center p-4 bg-[#f9f9f9]">
        
          <CardTitle className="text-lg font-semibold"> {data?.loadWeight} Tonne(s) {data.loadType}</CardTitle>
          <Badge className="mt-1 bg-[#ffeb3b] text-black" variant="secondary">
             TAP &apos;N&apos; GO LOAD
          </Badge>
       
        <ShareIcon className="text-blue-500" />
      </CardContent>
      <CardContent className="p-4">
        <div className="flex items-center space-x-4 mb-4">
          <PackageIcon className="text-yellow-600" />
          <div>
            <p className="text-sm">{data.startingPoint}</p>
            <p className="text-sm">{data.destination}</p>
          </div>
          <div className="ml-auto">
            <p className="text-xl font-semibold text-right">₹ {data.pricePerUnit}</p>
            <p className="text-sm text-gray-500 text-right">Expected Price (Per Tonne)</p>
          </div>
        </div>
        <div className="text-sm text-gray-500 mb-4">Box Size • {data.boxSize} </div>
        <div className="flex items-center mb-4">
          <Avatar>
            <AvatarImage alt="Raj International" src="/placeholder.svg?height=40&width=40" />
          </Avatar>
          <div className="ml-2">
            <p className="text-sm font-semibold">{data.loadName}</p>
            <div className="flex items-center">
              <CheckCircleIcon className="text-blue-500" />
              <p className="text-sm text-yellow-500 ml-1">5.0</p>
            </div>
          </div>
        </div>
        <Button className="w-full bg-blue-600 text-white" onClick={() =>setChat(true)}>Bid Now</Button>
      </CardContent>
    </Card>: <> {chat === true?  <BidChat onClose={onClose} />:<Card className="w-full">
    <CardHeader>
      <CardTitle>{data?.loadWeight} Tonne(s) {data?.loadType}</CardTitle>
      <Badge variant="secondary" className="bg-[#ffeb3b]"> TAP &apos;N&apos; GO LOAD</Badge>
    </CardHeader>
    <CardContent>
      <div className="flex items-center space-x-2 mb-4">
        <LocateIcon className="h-5 w-5 text-gray-500" />
        <span>{data?.startingPoint}</span>
        <ArrowRightIcon className="h-5 w-5 text-gray-500" />
        <span>{data?.destination}</span>
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <TruckIcon className="h-5 w-5 text-gray-500" />
        <span>Box Size • {data?.boxSize}</span>
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <Avatar>
          <AvatarImage alt="Raj International" src="/placeholder.svg?height=40&width=40" />
        </Avatar>
        <div>
          <div className="font-medium">{data?.loadName}</div>
          <div className="flex items-center">
            <CheckCircleIcon className="h-4 w-4 text-blue-500" />
            <span className="text-sm text-gray-500">5.0</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">₹ {data?.pricePerUnit}</div>
        <span className="text-sm text-gray-500">Expected Price (Per Tonne)</span>
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full  bg-blue-600" onClick={() =>setChat(true)}>Bid Now</Button>
    </CardFooter>
  </Card>
  }
  </>
  )
}


function ShareIcon(props: any) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function PackageIcon(props: any) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function CheckCircleIcon(props: any) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}


function LocateIcon(props: any) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}



function ArrowRightIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function TruckIcon(props: any) {
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
      <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
      <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
      <circle cx="7" cy="18" r="2" />
      <path d="M15 18H9" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  )
}
