'use client'
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { setAuthReducer } from "../redux/auth/authSlice"


export function Nav() {
  const router = useRouter()
  const dispatch = useDispatch();
  const clickState = useSelector((state: {auth: {userName: false}}) => state);
  const [auth, setAuth] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    
      setAuth(clickState.auth.userName)
  },[clickState]);

  useEffect(() => {
    
   console.log('gttgtggt',auth,'grgtgtgtggrgt');
   
},[auth]);

  const logout = () => {
   
    
    dispatch(setAuthReducer(() => {userName: ''}));
    console.log(auth);
  }
  return (
    <nav className="bg-white px-4 py-2 shadow-md w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a className="text-blue-600 text-xl font-semibold flex items-center space-x-2" href="#">
            <CrownIcon className="h-8 w-8 text-blue-600" />
            <span>MaplogiX</span>
          </a>
          <div className="flex items-center space-x-4">
          <button
    className="text-gray-700 md:hidden hover:text-gray-900 flex items-center"
    onClick={toggleDropdown}
  >
    Menu
    <ChevronDownIcon className="ml-1 h-4 w-4" />
  </button>
    {isDropdownOpen === true? <div className="flex-col md:hidden">
    <Link className="text-gray-700 hover:text-gray-900" href="marketplace">
            Marketplace
            </Link>
            <div className="relative">
          
            </div>
           
            <Link className="text-gray-700 hover:text-gray-900" href="profile">
              Profile
            </Link>
            <div className="relative">
              <Link className="text-gray-700 hover:text-gray-900 flex items-center" href="mytruck">
                My Trucks
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <Link className="text-gray-700 hover:text-gray-900 flex items-center" href="myload">
                My Loads
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </Link>
              </div>
</div>: ''}
<div className="hidden sm:block">


<div className=" flex items-center space-x-8"> <Link className="text-gray-700 hover:text-gray-900" href="marketplace">
            Marketplace
            </Link>
            <div className="relative">
          
            </div>
           
            <Link className="text-gray-700 hover:text-gray-900" href="profile">
              Profile
            </Link>
            <div className="relative">
              <Link className="text-gray-700 hover:text-gray-900 flex items-center" href="mytruck">
                My Trucks
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <Link className="text-gray-700 hover:text-gray-900 flex items-center" href="myload">
                My Loads
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </Link>
              </div></div>

  
          </div>
        </div>
        </div>
        {auth === false ||  auth === undefined? (
        <Button className="bg-blue-600 text-white px-4 py-2 rounded-md" onClick={() => router.push('/auth') }>Login / Signup</Button>
        ):(
          <Button className="bg-blue-600 text-white px-4 py-2 rounded-md" onClick={logout}>Logout</Button>
        )}
 

      </div>
    </nav>
  )
}


function CrownIcon(props: any) {
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
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
  )
}


function ChevronDownIcon(props: any) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


