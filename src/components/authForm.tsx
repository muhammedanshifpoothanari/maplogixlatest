'use client'
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import { Checkbox } from "@/src/components/ui/checkbox"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { CreatUser, SendUser } from '../lib/action/creatUser'
import { toast, useToast } from "./ui/use-toast"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setAuthReducer } from "../redux/auth/authSlice"



export function AuthForm() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { toast } = useToast()

  const [userName, setUserName] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');

  const [formType, setFormType] = useState('sendOtp')


  const send = async () => {
 
    if (
     userName.trim() === '' ||
     mobile.trim() === '' 
   ) {
    toast({
     title: "Please fill all the required fields.",
     description: "",
   })
 } else {
  
  setFormType('submit');
 const response = await SendUser({
  userName,
  mobile,
 requestType: 'sendOtp'
})
  if(response === true) {
    toast({
      title: "Otp Send Succusfully",
      description: "",
    })
    setFormType('submit')

  } else {
    setFormType('sendOtp')
    toast({
      title: "Please Try Again",
      description: "",
    })
  }
  
 }
}


  const submit = async () => {
   
     if (
      userName.trim() === '' ||
      mobile.trim() === '' ||
      otp.trim() === '' 
    ) {
     toast({
      title: "Please fill all the required fields.",
      description: "",
    })
  } else {
  const response = await CreatUser({
    userName,
    mobile,
    otp
})
console.log(response);


    if(response !== false && response  !== undefined) {
      dispatch(setAuthReducer({userName: response}))
      toast({
        title: "Logged In Succusfully.",
        description: "",
      })
      router.push('/marketplace')
     
    } else {
      setFormType('sendOtp')
      toast({
        title: "Please Try Again",
        description: "",
      })
    }
  }
}
  return (
    <div className="max-w-md mx-auto z-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Business Karo</h2>
        <div className="flex space-x-2">
          <HelpCircleIcon className="h-6 w-6" />
          <button className="font-semibold" onClick={() => router.push('/')}>X</button>
        </div>
      </div>
      <div className="text-xl font-semibold mb-4">Bharose ke sath!</div>
      <Image
        alt="Vahak"
        className="mb-4"
        height="200"
        src="/two_people_interacting.webp"
        style={{
          aspectRatio: "300/200",
          objectFit: "cover",
        }}
        width="400"
      />
        {formType === 'sendOtp'?(<>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="username">
            Username
          </label>
          <Input id="username" placeholder="Enter your username" onChange={e => setUserName(e.target.value)}/>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="mobile">
            Mobile Number
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              +91
            </span>
            <Input className="rounded-none rounded-r-md" id="mobile" placeholder="Enter your mobile number" type="number" onChange={e => setMobile(e.target.value)} />
          </div>
        </div>
        <div className="mb-4">
          <Button className="w-full" onClick={send}>Get OTP</Button>
        </div>
        </>
        ): (<>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="otp">
            OTP
          </label>
          <Input id="otp" type="number" placeholder="Enter your OTP" onChange={e => setOtp(e.target.value)}/>
        </div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-600">
            By signing up, you accept our
            <Link className="text-blue-600" href="#">
              Terms of use
            </Link>{" "}
            and{" "}
            <Link className="text-blue-600" href="#">
              Privacy Policy
            </Link>
            .{"\n              "}
          </p>
          <div className="flex items-center">
            <Checkbox id="whatsapp" />
            <label className="text-sm ml-2" htmlFor="whatsapp">
              Get notifications on WhatsApp
            </label>
          </div>
        </div>
        <Button className="w-full" onClick={submit}>Login</Button>
        </>)}
    </div>
  )
}


function HelpCircleIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  )
}


