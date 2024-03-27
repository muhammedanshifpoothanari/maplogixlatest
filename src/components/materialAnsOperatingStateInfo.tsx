'use client'
import { Badge } from "@/src/components/ui/badge"
import { useEffect, useState } from "react";
import { getUserByName } from "../lib/action/getProfile";
import { useSelector } from "react-redux";

export function MaterialAnsOperatingStateInfo() {
  const [userData, setUserData] = useState({operatingStates: []});
  
  const authName = useSelector((state: {auth: {userName: ''}}) => state.auth.userName);

  useEffect(() => {
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
    <div className="max-w-3xl mx-auto my-8">
      {/* <div>
        <h2 className="text-2xl font-semibold mb-4">Handled materials (5)</h2>
        <div className="flex flex-wrap gap-2">
          <Badge className="px-4 py-2 rounded-full" variant="secondary">
            Box (18feet)
          </Badge>
          <Badge className="px-4 py-2 rounded-full" variant="secondary">
            Granite
          </Badge>
          <Badge className="px-4 py-2 rounded-full" variant="secondary">
            Any
          </Badge>
          <Badge className="px-4 py-2 rounded-full" variant="secondary">
            Box18 feet
          </Badge>
          <Badge className="px-4 py-2 rounded-full" variant="secondary">
            Cable
          </Badge>
        </div>
      </div> */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Operating states ({userData?.operatingStates.length})</h2>
        <div className="flex flex-wrap gap-2">
          {userData?.operatingStates.map((data,index) =>  (
             <Badge key={index} className="px-4 py-2 rounded-full bg-green-200" variant="secondary">
             Karnataka
           </Badge>
          ))}
         
          
        </div>
      </div>
    </div>
  )
}
