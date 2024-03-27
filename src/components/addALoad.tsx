'use client'
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/src/components/ui/card"
import { Label } from "@/src/components/ui/label"
import { Input } from "@/src/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/src/components/ui/select"
import { Button } from "@/src/components/ui/button"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { toast } from "./ui/use-toast"
import { CreateALoad } from "../lib/action/addALoad"
import { useRouter } from "next/navigation"

export function AddALoads() {
  const router = useRouter();
  const userId = useSelector((state: {clickState: {editUserId: string}}) => state?.clickState?.editUserId);
  useEffect(() => {
    console.log(userId, 'ClickState');
  }, [userId]);


  const [loadName, setLoadName] = useState('');
  const [loadType, setLoadType] = useState('');
  const [startingPoint, setStartingPoint] = useState('');
  const [destination, setDestination] = useState('');
  const [boxSize, setBoxSize] = useState('');
  const [loadWeight, setLoadWeight] = useState('');
  const [status, setStatus] = useState('');
  const [pricePerUnit, setPricePerUnit] = useState('');
  const [submitState, setSubmitState ] = useState({});

  const submit = async () => {
    
    if (
      loadName.trim() === '' ||
      loadType.trim() === '' ||
      startingPoint.trim() === '' ||
      destination.trim() === '' ||
      boxSize.trim() === '' ||
      status.trim() === '' ||
      pricePerUnit.trim() === '' ||
      loadWeight.trim() === ''
   ) {
    toast({
     title: "Please fill all the required fields.",
     description: "",
   })
 } else {
 const response= await CreateALoad({
    ownerId: userId,
    loadName,
    loadType,
    startingPoint,
    destination,
    boxSize,
    loadWeight,
    status,
    pricePerUnit,
 })
 if(response === true) router.push('/myload')
 }
}
  return (
    <Card className="max-w-4xl mx-auto my-8 p-6">
      <CardHeader>
        <CardTitle>Add Load Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid grid-cols-1 gap-6">
         <div className="flex flex-col space-y-1.5">
            <Label htmlFor="loadName">Load Name</Label>
            <Input id="loadName" placeholder="" onChange={e => setLoadName(e.target.value)}/>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="loadType">Load Type</Label>
            <select name="loadType" id="" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=> setLoadType(e.target.value)}>
              <option value="Box">Box</option>
              <option value="Perishable">Perishable</option>
              <option value="non-perishable">non-perishable</option>
              <option value="petroleum">petroleum</option>
              <option value="chemical">chemical</option>
            </select>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="boxSize">Box Size</Label>
            <Input type="number" id="boxSize" placeholder="e.g., Box18 feet" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBoxSize(e.target.value)}/>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="loadWeight">Load Weight in tonne(s)</Label>
            <Input id="loadWeight" type="number" placeholder="e.g., 5 Tonnes" onChange={e=> setLoadWeight(e.target.value)} />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="pricePerUnit">price per Tonne(s)</Label>
            <Input id="pricePerUnit" type="number" placeholder="e.g., 5000 Rupees" onChange={e=> setPricePerUnit(e.target.value)} />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="startingPoint">Origin</Label>
            <Input id="startingPoint" placeholder="e.g., Nagpur (MH)" onChange={e=> setStartingPoint(e.target.value)} />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="destination">Destination</Label>
            <Input id="destination" placeholder="e.g., Mongam (KL)" onChange={e=> setDestination(e.target.value)}/>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="status">Status</Label>
            <select name="status" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value)} id="status">
              <option value="active">Active</option>
              <option value="notActive">Pending</option>
            </select>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline" onClick={()=> router.push('/myload') }>Cancel</Button>
        <Button className="ml-4" onClick={submit}>Save Load</Button>
      </CardFooter>
    </Card>
  )
}
