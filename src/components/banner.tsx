import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import Image from "next/image"

export function Banner() {
  return (
    <div
      className="relative bg-cover bg-black bg-center bg-no-repeat border-t py-10 px-4"
      style={{
        backgroundImage: "url('/load_bg_desktop_v1.webp')",
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-white">Book Loads and Return Loads For Your Truck Instantly</h1>
          <p className="text-xl text-white">With 0% commission, cashback* and on best rates</p>
          <div className="flex space-x-4">
            <Button className="bg-white text-blue-600">Find Load</Button>
            <Button className="bg-blue-600 text-white">Book Lorry</Button>
          </div>
          <div className="flex space-x-4">
            <Input className="w-1/2" placeholder="Kochi, Kerala" type="text" />
            <ArrowRightIcon className="text-white w-6 h-6" />
            <Input className="w-1/2" placeholder="Enter your Drop location" type="text" />
            <Button className="bg-blue-600 text-white">Search</Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image alt="Person pointing" className="h-full" src="/truck_load_owner.webp" width={350} height={300} />
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <Button className="bg-blue-600 text-white rounded-full p-4">
          <TextIcon className="text-white w-6 h-6" />
        </Button>
      </div>
    </div>
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
