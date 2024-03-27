'use client'
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { AvatarImage, AvatarFallback, Avatar } from "@/src/components/ui/avatar"
import { Button } from "@/src/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserByName } from "../lib/action/getProfile"
import { setClickStateReducer } from "../redux/clickState/clickSlice"
import { BidChat } from "./bidchat"

export function TruckCard(obj: any) {
  const dispatch = useDispatch()
  const [data, setData] = useState(obj);
  const [userData, setUserData] = useState( {_id: '' });
  const [chat, setChat] = useState(false);
  const authName = useSelector((state: {auth: {userName: ''}}) => state.auth.userName);
  
  const getUser = async () => {
    const data:any = await getUserByName(authName);
    setUserData(data);
  }

 useEffect(() => {
    setData(obj.obj);
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
    chat === true? <BidChat onClose={onClose} />:
    <Card key='1' className="w-full max-w-lg rounded-lg ">
      <CardHeader className="bg-[#f9f9f9]">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{data.truckType} • {data.capacity} Tonne(s)</CardTitle>
          {/* <Badge className="px-2 py-1 text-sm font-medium text-green-600 bg-green-100 rounded-full" variant="secondary">
            Verified
          </Badge> */}
          {/* <ShareIcon className="text-blue-600" /> */}
        </div>
        <CardDescription className="text-sm text-gray-600 ">{data.truckNumber}</CardDescription>
      </CardHeader>
      <CardContent >
        <div className="flex items-center space-x-4 my-4">
          <Image
            alt="Truck"
            className="h-20 w-40"
            height="40"
            src="/goods_icon.webp"
            style={{
              aspectRatio: "400/100",
              objectFit: "cover",
            }}
            width="100"
          />
          <div className="flex flex-col space-y-1">
          
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {/* <Avatar>
            <AvatarImage alt="Saravanan Kt" src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>SK</AvatarFallback>
          </Avatar> */}
          {/* <span className="text-sm font-medium">Saravanan Kt</span> */}
          <div className="flex items-center space-x-1">
              <CircleIcon className="text-black" />
              <span className="text-sm text-gray-700">{data.currentLocation}</span>
            </div>
            <div className="flex items-center space-x-1">
              <SquareIcon className="text-black" />
              <span className="text-sm text-gray-700">Towards</span>
              <ArrowRightIcon className="text-blue-600" />
              <span className="text-sm text-gray-700">{data?.operatingStates?.[1]}</span>
              <span className="text-sm text-blue-600">+{data?.operatingStates?.length} States</span>
            </div>
        </div>
      
        <Button className="w-full bg-blue-600 text-white" onClick={() =>setChat(true)}>Bid Now</Button>
        </CardContent>
    </Card>
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


function CircleIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}


function SquareIcon(props: any) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
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
