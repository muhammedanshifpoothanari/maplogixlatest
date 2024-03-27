'use client'
import { Button } from "@/src/components/ui/button"
import { Tabs } from "@/src/components/ui/tabs"
import { Input } from "@/src/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/src/components/ui/select"
import { Badge } from "@/src/components/ui/badge"
import { CardHeader, Card } from "@/src/components/ui/card"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getLoadByOwner } from "../lib/action/getLoadByOwner"
import { useRouter } from "next/navigation"
import { getChatByReceiverId } from "../lib/action/getChatByReceiverId"
import { setClickStateReducer } from "../redux/clickState/clickSlice"
import { BidChat } from "./bidchat"
import { BidChatForOwner } from "./bidchatForOwner"

export function MyLoads() {
  const router = useRouter();
  const dispatch = useDispatch();
  const authName = useSelector((state: {auth: {userName: ''}}) => state.auth.userName);

  const userId = useSelector((state: {clickState: {editUserId: ''}}) => state.clickState.editUserId);
  const [loadData, setLoadData] = useState([{_id: '',loadName: '', loadType: '',loadWeight: '', boxSize:'', startingPoint: '', destination: '', status: 'active'}]);
  const [chat, setChat] = useState(false);
  const [listChat, setListChat] = useState([{senderId: '',receiverId: '' }]);
  const [listIndex, setListIndex] = useState(0);
  const [senderId, setSenderId] = useState('');
  const [receiverId, setReceiverId] = useState('');
  useEffect(() => {
    console.log(userId, 'userId');
  }, [userId]);
  useEffect(
    () => {
      dispatch(setClickStateReducer({senderId: senderId,receiverId:receiverId} )) 
    },[chat])

  useEffect(() => {
    if(authName  === undefined) router.push('/auth');
    const fetchData = async () => {
      try {
        const data:any = await getLoadByOwner(userId);
        setLoadData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, []);
  


  const listChats = async (id: any) => {

    const response = await getChatByReceiverId(id);
    console.log(response);
    
    setListChat(response);
  }
 
  useEffect(() => {
    console.log(loadData, 'loadData');
  }, [loadData]);

  const onClose = () => {
    setChat(false);
    setListChat([])
  }
  return (
    <div className="bg-white p-8">
      <h1 className="text-2xl font-bold mb-6">My Loads</h1>
      {/* <Tabs>
        <div className="flex space-x-4 mb-4">
          <Button variant="secondary">Listing</Button>
          <Button variant="outline">My Bids</Button>
        </div>
      </Tabs> */}
      {/* <div className="flex flex-wrap gap-4 mb-4">
        <Input className="flex-1" placeholder="Search by Load ID" />
        <Select>
          <SelectTrigger id="status">
            <SelectValue placeholder="Status: All" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="in_transit">In Transit</SelectItem>
            <SelectItem value="expired">Expired</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger id="date">
            <SelectValue placeholder="Date: All days" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="all_days">All days</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="this_week">This Week</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="ghost">Advanced Filter</Button>
      </div> */}
      <Button className="mb-4" onClick={()=> router.push('/addAload') }>+ Post Load</Button>
      {/* <p className="text-sm font-medium mb-2">Clear Filter</p> */}
      <h2 className="font-bold mb-4">Loads ({loadData.length})</h2>
      <div className="grid grid-cols-1 gap-6">
      {loadData.map((obj) => (
  <Card className="w-full" key={obj._id}>
    <CardHeader>
      <div className="flex justify-between items-center">
      {chat === true? <BidChatForOwner onClose={onClose} />:
      listChat.length === 0 ? (
  <>
    <div>
      <Image
        alt="Load"
        className="mb-2"
        height={100}
        src="/placeholder.svg"
        style={{
          aspectRatio: "100/100",
          objectFit: "cover",
        }}
        width={100}
      />
      <p className="text-sm">#{obj?.loadName} • {obj?.boxSize} feet</p>
      <p className="text-sm">{obj?.loadType} </p>
      <p className="text-sm">{obj?.loadWeight} Tonne(s) Load</p>
    </div>
    <div className="flex gap-1">
      <div className="flex gap-1">
        <LocateIcon className="text-gray-500" />
        <p className="text-sm">{obj?.startingPoint}</p>
      </div>
      <div className="flex  gap-1">
        <ArrowRightIcon className="text-gray-500" />
        <p className="text-sm">{obj?.destination}</p>
      </div>
    </div>
    <div>
      <Badge variant="secondary">{obj?.status}</Badge>
      {/* {obj?.status !== 'active' && (
        <Button className="mt-2" variant="outline">
          Re-post
        </Button>
      )} */}
    </div>
    <ArrowRightIcon className="text-gray-500" onClick={() => listChats(obj._id)} /> 
  </>
) : (
  <div className="flex-col gap-2 justify-between">
  {listChat.map((chat, index) => (
    <div  key={index}>
     
      <Button className="w-full bg-blue-600 text-white" onClick={() =>{
        setChat(true)
        setSenderId(chat.senderId);
        setReceiverId(chat.receiverId)
        }}> <p> A user is trying to bid &gt; Chat Now</p></Button>
    </div>
  ))}
  </div>
)}

      </div>
    </CardHeader>
  </Card>
))}
      </div>
      
      <div className="fixed right-4 bottom-4">
        <Button variant="secondary">
          <TextIcon className="text-white" />
        </Button>
      </div>
    </div>
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


function TextIcon(props: any) {
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
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  )
}
