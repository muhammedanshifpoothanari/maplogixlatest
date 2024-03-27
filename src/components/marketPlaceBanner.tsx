'use client'
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setClickStateReducer } from "../redux/clickState/clickSlice";

export function MarketPlaceBanner() {
  const dispatch = useDispatch()
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  useEffect(() =>{
    dispatch(setClickStateReducer({source,destination} ))  
  },[source]);
  useEffect(() =>{
    dispatch(setClickStateReducer({source,destination} ))  
  },[destination]);
  const clear = () => {
    dispatch(setClickStateReducer({source:'noData',destination:'noData'} ))  
  }
  return (
    <div className="relative w-full  bg-gradient-to-b from-[#08123b] via-[#08123b] to-[#0000] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl">Book from India&apos;s top loads and lorries!</h1>
        <div className="mt-8 flex justify-between items-center bg-white rounded-lg shadow-lg p-6 relative">
          <Button className="absolute top-[-14px] left-4 bg-blue-600 text-white rounded-md px-4 py-2">Find Loads & Trucks</Button>
          <div className="flex flex-col w-1/3">
            <label className="text-sm font-medium text-gray-700" htmlFor="source-location">
              SOURCE LOCATION
            </label>
            <Input className="mt-1  text-gray-700" id="source-location" placeholder="Search Loading City" type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSource(e.target.value)} />
          </div>
          <ChevronRightIcon className="w-6 h-6 text-gray-400" />
          <div className="flex flex-col w-1/3">
            <label className="text-sm font-medium text-gray-700" htmlFor="destination-location">
              DESTINATION LOCATION
            </label>
            <Input className="mt-1 text-gray-700" id="destination-location" placeholder="Search Unloading City" type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>)  => setDestination(e.target.value)}/>
          </div>
          <Button className="bg-blue-600 text-white rounded-md px-4 py-2" onClick={clear}>clear</Button>
        </div>
      </div>
    </div>
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
