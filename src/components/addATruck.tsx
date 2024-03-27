'use client'
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "../components/ui/select"
import { Input } from "../components/ui/input"
import { Switch } from "../components/ui/switch"
import { Label } from "../components/ui/label"
import { Button } from "../components/ui/button"
import React, { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { useSelector } from "react-redux"
import { toast } from "./ui/use-toast"
import { CreateATruck } from "../lib/action/addATruck"
import { useRouter } from "next/navigation"

export function AddATruck() {
  const router = useRouter()

  const userId = useSelector((state: {clickState: {editUserId: string}}) => state.clickState.editUserId);
  useEffect(() => {
    console.log(userId, 'ClickState');
  }, [userId]);

  const [truckNumber, setTruckNumber] = useState('');
  const [truckType, setTruckType] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [operatingStates, setOperatingStates] = useState(['']);
  const [capacity, setCapacity] = useState('');
  const [activeStatus, setActiveStatus] = useState(true);
  const [newState, setNewState] = useState('');
  const [submitState, setSubmitState ] = useState({});

  const handleAddState = () => {
    if (newState.trim() !== '') {
      setOperatingStates([...operatingStates, newState]);
      setNewState('');
    }
  };

  const handleNewStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewState(e.target.value);
  };

  const indianStates = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];

  const submit = async () => {
    
    if (
      truckNumber.trim() === '' ||
      truckType.trim() === '' ||
      currentLocation.trim() === ''    ) {
    toast({
     title: "Please fill all the required fields.",
     description: "",
   })
 } else {
  const response = await CreateATruck({
    ownerId: userId,
    truckNumber,
    truckType,
    currentLocation,
    operatingStates,
    capacity,
    activeStatus,
 })
 if(response === true) router.push('/mytruck')
console.log('f');

 }
}
  return (
    <Card className="max-w-4xl mx-auto my-8 p-6">
    <CardHeader>
      <CardTitle>Add Truck Details</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col gap-6 sm:grid sm:grid-cols-1">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="truckImage">
            Truck Image
          </label>
          <input
            className="block w-full text-sm text-gray-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-blue-700
        hover:file:bg-violet-100"
            id="truckImage"
            type="file"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="truckType">
            Truck Type
          </label>
          <select name="truckType" id="truckType" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTruckType(e.target.value)}>
            <option value="openHalfBody">openHalfBody</option>
            <option value="closedContainer">closedContainer</option>
            <option value="flatbed">flatbed</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="truckNumber">
            Truck Number
          </label>
          <Input id="truckNumber" onChange={e => setTruckNumber(e.target.value)} placeholder="KL 10 BF 5313" />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="capacity">
            Capacity
          </label>
          <Input id="capacity" type="number" placeholder="32 Tonne(s)" onChange={e => setCapacity(e.target.value)} />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="location">
            Current Location
          </label>
          <Input id="location" placeholder="Mumbai, MH" onChange={e => setCurrentLocation(e.target.value)} />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="operatingStates">
            Operating States
          </label>
          <div className="flex items-center gap-2 mb-2">
       
       <select name="state" id="" onChange={handleNewStateChange}>
         <option value="">Select State</option>
         {indianStates.map((state) => (
           <option key={state} value={state}>
             {state}
           </option>
         ))}
       </select>  
       
       <button
         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
         onClick={handleAddState}
       >
         Add
       </button>
     </div>
     <div>
       {operatingStates.map((state, index) => (
         <div key={index}>{state}</div>
       ))}
     </div>        </div>
        <div className="col-span-2 flex items-center space-x-4">
   
          
        </div>
      </div>
      <div className="mt-6 flex justify-end">
      <Button variant="outline" onClick={()=> router.push('/mytruck') }>Cancel</Button>
        <Button className="ml-4" onClick={submit}>
          Add Truck
        </Button>
      </div>
    </CardContent>
    </Card>
  )
}
