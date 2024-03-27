/* eslint-disable react-hooks/rules-of-hooks */

'use client'
import React, { useEffect, useState } from 'react';
import { AvatarImage, AvatarFallback, Avatar } from "@/src/components/ui/avatar"
import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"
import { Button } from "@/src/components/ui/button"
import { useToast } from "@/src/components/ui/use-toast"
import { EditUser } from '../lib/action/editUser';
import { Store } from '../redux/store';
import { getUserByName } from '../lib/action/getProfile';
import { getUserById } from '../lib/action/getProfileById';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

export function EditMyProfile() {
  const clickState = useSelector((state: {clickState: {}}) => state.clickState);
  const router = useRouter();
  const [userData, setUserData] = useState({_id: '',userName: '', mobile: '', about: '',yearOfExperience: 0, accountNumber: 0});
  useEffect(() => {
    console.log(clickState, 'ClickState');
  }, [clickState]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const data:any = await getUserById(clickState);
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
  

  const { toast } = useToast()

  const [userName, setUserName] = useState('');
  const [mobile, setMobile] = useState('');
  const [userType, setUserType] = useState('');
  const [state, setState] = useState('');
  const [about, setAbout] = useState('');
  const [yearOfExperience, setYearOfExperience] = useState('');
  const [operatingStates, setOperatingStates] = useState(['']);
  const [operatingRoutes, setOperatingRoutes] = useState([]);
  const [handledMaterials, setHandledMaterials] = useState([]);
  const [accountNumber, setAccountNumber] = useState('');
  const [newState, setNewState] = useState('');
  const [submitState, setSubmitState] = useState({});
  const submit =async () => {
     setSubmitState({
          userName,
          mobile,
          userType,
          state,
          about,
          yearOfExperience,
          operatingStates,
          accountNumber,
          id:userData?._id
     })
     if (
      userName.trim() === '' ||
      mobile.trim() === '' ||
      userType.trim() === '' ||
      state.trim() === '' ||
      accountNumber.trim() === ''
    ) {
     toast({
      title: "Please fill all the required fields.",
      description: "",
    })
  } else {
    try {
      const response = await EditUser(submitState);
      if(response === true) router.push('/profile')
      console.log('EditUser response:', response);
    } catch (error) {
      console.error('Error editing user:', error);
    }
   
  }
  }

  const handleAddState = () => {
    if (newState.trim() !== '') {
      setOperatingStates([...operatingStates, newState]);
      setNewState('');
    }
  };

  const handleNewStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewState(e.target.value);
  };
  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleUserTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserType(e.target.value);
    console.log(userType,'dsfdfsdfsfd');
    
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
  
  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
   
    setState(e.target.value);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-lg font-semibold mb-2">Create Profile</h2>

        <div className="flex items-center space-x-4 mb-6">
          <Avatar>
            <AvatarImage alt="Profile Picture" src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>PE</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <Input className="mb-2" defaultValue={userData?.userName} onChange={handleUserNameChange} type="text" />
            <Input
              className="mb-2"
              placeholder={userData?.mobile}
              defaultValue={userData?.mobile}
              onChange={(e) => setMobile(e.target.value)}
              type="number"
            />
            <select name="userType" id="" onChange={handleUserTypeChange}>
              <option value="loadProvider">Load Provider</option>
              <option value="truckOwner">Truck Owner</option>
            </select>
          </div>
        </div>
        <div className="mb-6" />
        <div className="mb-6">
          <Textarea
            className="mb-2"
            placeholder='Please Provide More About You'
            defaultValue={userData?.about}
            onChange={(e) => setAbout(e.target.value)}
          />
          <Input type='number' placeholder='Please Provide More Your Year Of Experience In the feild' defaultValue={userData?.yearOfExperience}    onChange={(e) => setYearOfExperience(e.target.value)} />
        </div>
        <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">State</h2>

        <select name="state" id="" onChange={handleStateChange}>
          <option value="">Select State</option>
          {indianStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>        </div>
        
        <div className="mb-6">
          <Input type='number'   className="mb-2" placeholder='Please Enter Your Account Number' defaultValue={userData?.accountNumber} onChange={e => setAccountNumber(e.target.value)}/>
        </div>
       
        <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Operating states</h2>
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
      </div>
    </div>  
        <Button className="w-full" onClick={submit}>Update Profile</Button>
    </div>
  )
}
