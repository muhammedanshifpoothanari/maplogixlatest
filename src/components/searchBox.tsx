
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"

export function SearchBox() {
  return (
    <div className="max-w-4xl mx-auto gap-1 p-4">
      <div className="flex gap-1">
        <Button className="bg-gray-200 border-radius-[0px]  text-black">Find Load</Button>
        <Button className="bg-gray-200 text-black">Book Lorry</Button>
      </div>
      <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
        <div className="flex flex-col flex-grow">
          <label className="text-xs font-semibold text-gray-500" htmlFor="pickup-location">
            PICKUP LOCATION
          </label>
          <Input className="mt-1" id="pickup-location" placeholder="Kochi, Kerala" type="text" />
        </div>
        <ChevronRightIcon className="text-gray-500" />
        <div className="flex flex-col flex-grow">
          <label className="text-xs font-semibold text-gray-500" htmlFor="drop-location">
            DROP LOCATION
          </label>
          <Input className="mt-1" id="drop-location" placeholder="Enter your Drop location" type="text" />
        </div>
        <Button className="bg-blue-600 text-white">Search</Button>
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
