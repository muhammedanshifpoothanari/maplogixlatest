'use client'
import { Tabs } from "@/src/components/ui/tabs"
import { Input } from "@/src/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/src/components/ui/select"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { Card, CardHeader } from "@/src/components/ui/card"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getTruckByOwner } from "../lib/action/getTruckByOwner"
import { useRouter } from "next/navigation"
import { setClickStateReducer } from "../redux/clickState/clickSlice"
import { getChatByReceiverId } from "../lib/action/getChatByReceiverId"
import { BidChatForOwner } from "./bidchatForOwner"
import { BidApprove } from "../lib/action/bidApprove"

export function MyTrucks() {
  const router = useRouter();
  const dispatch = useDispatch();

  const userId = useSelector((state: {clickState: {editUserId: ''}}) => state.clickState.editUserId);
  const [truckData, setTruckData] = useState([{_id: '',truckType: '',capacity: '',truckNumber: '',currentLocation: '', operatingStates: [],activeStatus: false}]);
  const [chat, setChat] = useState(false);
  const [listChat, setListChat] = useState([{senderId: '',receiverId: ''}]);
  const [listIndex, setListIndex] = useState(0);
  const [senderId, setSenderId] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const [chatId, setChatId] = useState();
  const authName = useSelector((state: {auth: {userName: ''}}) => state.auth.userName);

  useEffect(() => {
    dispatch(setClickStateReducer({ senderId, receiverId }));
  }, [senderId, receiverId]);

  useEffect(() => {
    if(authName  === undefined) router.push('/auth');

    const fetchData = async () => {
      try {
        const data = await getTruckByOwner(userId);
        setTruckData(data);
      } catch (error) {
        console.error('Error fetching truck data:', error);
      }
    };
    fetchData();
  }, [userId]);

  const listChats = async (id: any) => {
    const response = await getChatByReceiverId(id);
    setListChat(response);
    console.log(id);
    
    setChatId(id)
  }


  const onClose = () => {
    setChat(false);
    setListChat([]);
  }

  return (
    <div className="bg-white p-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold mr-2">Lorries ({truckData.length})</h2>
          <Button className="bg-blue-600 text-white rounded-md px-4 py-2" onClick={() => router.push('/addATruck')}>+ Post Lorry</Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {truckData.map((obj) => (
          <Card key={obj._id} className="flex flex-col md:flex-row md:items-center p-4 border rounded-md">
                <CardHeader>
                <div className="flex justify-between items-center">
            {chat === true && chatId === obj._id ? <BidChatForOwner onClose={onClose} /> :
              listChat.length === 0 ? (
                <>
                  <img
                    alt="Truck"
                    className="mb-4 md:mb-0 md:mr-4"
                    height="100"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "200/100",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">Truck</h3>
                    <p className="text-gray-600 mb-2">{obj.truckType} • {obj?.capacity} Tonne(s)</p>
                    <p className="text-gray-600 mb-2">{obj?.truckNumber}</p>
                    <div className="flex items-center mb-2">
                      <LocateIcon className="text-gray-500 mr-2" />
                      <span className="text-gray-600">{obj.currentLocation}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <ArrowRightIcon className="text-gray-500 mr-2" />
                      <span className="text-gray-600">Towards » {obj.operatingStates[1]} | +{obj.operatingStates.length} States</span>
                    </div>
                    <div className="flex items-center">
                      {obj.activeStatus ?
                        <Badge className="mr-2" variant="secondary">
                          In Active
                        </Badge> : null}  
                    </div>
                    </div>
                  <ArrowRightIcon className="text-gray-500" onClick={() => listChats(obj._id)} />
                </>
              ) : (
                listChat.map((chat, index) => (
                  <div key={index}>
                    <Button className="w-full bg-blue-600 text-white" onClick={() => {
                      setChat(true);
                      setSenderId(chat.senderId);
                      setReceiverId(chat.receiverId);
                    }}> <p> A user is trying to bid</p></Button>
                  </div>
                ))
              )}
                </div>
              </CardHeader>
          </Card>
        ))}
      </div>
      <Button className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-4">
        <TextIcon className="text-white" />
      </Button>
    </div>
  )
}



function FilterIcon(props: any) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
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


function ChevronRightIcon(props: any) {
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
      <path d="m9 18 6-6-6-6" />
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
