'use client'
import { Button } from "@/src/components/ui/button"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { AvatarImage, Avatar } from "@/src/components/ui/avatar"
import { LoadCard } from "./loadCard"
import { TruckCard } from "./truckCard"
import { useEffect, useState } from "react"
import { getAllTrucks } from "../lib/action/getAllTrucks"
import { getAllLoads } from "../lib/action/getAllLoads"
import { useSelector } from "react-redux"
import { getUserByName } from "../lib/action/getProfile"

export function MarketPlaceListing() {
  const clickState = useSelector((state: {clickState: {source:'noData',destination: 'noData', }}) => state.clickState);

  const [source, setSource] = useState('noData')
  const [destination, setDestination] = useState('noData')
  const [truckData, setTruckData] = useState([{startingPoint: '', _id: '',currentLocation: ''}])
  const [loadData, setLoadData] = useState([{startingPoint: '', _id: '', destination: ''}])
  const [preference, setPreference] = useState('loadMarketPlace')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data:any = await getAllLoads();
        setLoadData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, []);
  
  useEffect(() => {
    console.log(loadData,clickState.source, 'loadData');
  }, [loadData]);
  useEffect(() => {
    console.log(clickState.source, 'loadData');
    if(clickState.destination !=='noData') {
      setDestination(clickState.destination);
    }else {
      setDestination('noData');
    }
    if(clickState.source !=='noData') {
      setSource(clickState.source);
    }else {
      setSource('noData');
    }

  }, [clickState]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data:any = await getAllTrucks();
        setTruckData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, []);
 
  useEffect(() => {
    console.log(truckData, 'TruckData');
  }, [truckData]);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <div className="flex space-x-4">
          {/* <Button className="flex items-center" variant="ghost">
            <TruckIcon className="h-5 w-5" />
            Vehicle Type{"\n              "}
          </Button> */}
          {/* <Button className="flex items-center" variant="ghost">
            <LayersIcon className="h-5 w-5" />
            Vehicle Capacity{"\n              "}
          </Button> */}
          <div className="flex items-center space-x-1">
            <span>Current Preference:</span>
            <select name="preference" id="preference" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPreference(e.target.value)}>
              <option value="loadMarketPlace">Load Marketplace</option>
              <option value="truckMarketPlace">Truck Marketplace</option>

            </select>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {/* <span>1 / 92</span> */}
          {/* <Button variant="ghost">
            <ChevronLeftIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost">
            <ChevronRightIcon className="h-5 w-5" />
          </Button> */}
        </div>
      </div>
      <h2 className="text-xl font-semibold my-4">Load Market Live ({preference === 'loadMarketPlace'?loadData?.length:truckData.length})</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* cards */}
          {preference === 'loadMarketPlace' && loadData.filter(obj => source === 'noData' || obj.startingPoint === source).map((obj) => (
             <LoadCard key={obj._id} obj={obj} variant="ele" />
          ))}

            {preference === 'truckMarketPlace' && truckData.filter(obj => source === 'noData' || obj.currentLocation === source).map((obj) => (
               <TruckCard key={obj._id} obj={obj} />
            ))}

        
      </div>
      <div className="flex justify-center space-x-2">
        {/* <Button variant="ghost">
          <ChevronLeftIcon className="h-5 w-5" />
        </Button>
        <Button variant="ghost">
          <ChevronRightIcon className="h-5 w-5" />
        </Button> */}
      </div>
    </div>
    
  )
}


function TruckIcon(props:any) {
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


function LayersIcon(props: any) {
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
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}


function ChevronLeftIcon(props: any) {
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
      <path d="m15 18-6-6 6-6" />
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
