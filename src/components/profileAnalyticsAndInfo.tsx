
'use client'
import { Button } from "@/src/components/ui/button"
import { useEffect, useState } from "react";
import { getUserByName } from "../lib/action/getProfile";
import { useSelector } from "react-redux";

export function ProfileAnalyticsAndInfo() {
  const [userData, setUserData] = useState({mobile: 0, userName: '', state: '',about: ''});
  const authName = useSelector((state: {auth: {userName: ''}}) => state?.auth?.userName);

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
 


  function openWhatsApp() {
    var phoneNumber = userData?.mobile; 
    var currentDate = "<%= formatDate(new Date()) %>";
    var message = `Hello I am ${userData?.userName} from:${userData?.state}`;
  
    // Check if userData is available and contains the state property
    if (userData?.state) {
      message += ` from: ${userData.state}`;
    }
    
    var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(whatsappURL, "_blank");
  }
  
  
  return (
    <div className="max-w-3xl mx-auto my-8 border-b-2 border-gray-200">
      {/* <h2 className="text-2xl font-bold mb-4">My Profile Analytics</h2>
      <div className="flex justify-between border-b-2 border-gray-200 pb-4 mb-8">
        <div className="text-center">
          <p className="text-3xl font-semibold text-blue-600">5.0</p>
          <p className="text-sm text-gray-600">Star ratings</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-semibold text-blue-600">115</p>
          <p className="text-sm text-gray-600">Profile views</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-semibold text-blue-600">0</p>
          <p className="text-sm text-gray-600">Profile likes</p>
        </div>
      </div> */}
      <h3 className="text-xl font-semibold mb-2">About us</h3>
      <p className="text-gray-700 mb-4">
        {userData?.about}
      </p>
      <p className="text-gray-700 mb-8">
        <span className="font-semibold">Joined:</span>
        1 month ago{"\n      "}
      </p>
      <h3 className="text-xl font-semibold mb-2">Office address</h3>
      <div className="flex items-center justify-between border-2 border-gray-200 p-4 mb-8">
        <p className="text-gray-700">{userData?.state?userData?.state: 'not provided'}, India</p>
        <Button variant="outline" onClick={openWhatsApp}>Share location</Button>
      </div>
      <div className="fixed bottom-4 right-4">
        <MessageCircleIcon className="text-blue-600 h-12 w-12" />
      </div>
    </div>
  )
}



function MessageCircleIcon(props: any) {
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
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  )
}
