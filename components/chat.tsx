
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Chat() {
  return (
    <div className="flex flex-col max-w-md p-4 bg-white rounded-lg shadow">
      <div className="flex flex-col space-y-4 overflow-y-auto h-96 p-2">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage alt="User avatar" src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="bg-gray-100 p-2 rounded-lg">
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage alt="User avatar" src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="bg-gray-100 p-2 rounded-lg">
            <p className="text-sm">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage alt="User avatar" src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="bg-gray-100 p-2 rounded-lg">
            <p className="text-sm">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage alt="User avatar" src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="bg-gray-100 p-2 rounded-lg">
            <p className="text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center p-2 space-x-2">
        <Input className="flex-1" placeholder="Type your message here" />
        <Button className="flex-shrink-0">Bid</Button>
      </div>
    </div>
  )
}
