
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function EditMyProfile() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2>Edit My Profile</h2>
      <form>
        <div className="flex items-center space-x-4 mb-6">
          <Avatar>
            <AvatarImage alt="Profile Picture" src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>PE</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <Input className="mb-2" placeholder="Poothanari Express" type="text" />
            <Input
              className="mb-2"
              placeholder="Agent/Broker, Fleet Owner, Transport Contractor | Manjeri"
              type="text"
            />
            <Input placeholder="126 Connections" type="text" />
          </div>
        </div>
        <div className="mb-6" />
        <div className="mb-6">
          <Textarea
            className="mb-2"
            placeholder="Experienced in transportation, I provide reliable and efficient services with on-time delivery, safety, and excellent customer service."
          />
          <Input placeholder="2 years ago" type="text" />
        </div>
        <div className="mb-6">
          <Input className="mb-2" placeholder="Manjeri, Kerala, India" type="text" />
          <Button variant="ghost">Share location</Button>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Fleet owned (8)</h2>
          <div className="flex space-x-4">
            <Input className="w-20" placeholder="3 LCV" type="text" />
            <Input className="w-20" placeholder="3 Truck" type="text" />
            <Input className="w-20" placeholder="1 Container" type="text" />
            <Input className="w-20" placeholder="1 Trailer" type="text" />
          </div>
        </div>
        <div className="mb-6">
          <Textarea className="mb-2" placeholder="Add bank account to make payment through vahak." />
          <Button variant="ghost">+ Click to add Bank Account</Button>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Handled materials (5)</h2>
          <div className="flex space-x-4">
            <Input className="w-28" placeholder="Box (18Feet)" type="text" />
            <Input className="w-28" placeholder="Granite" type="text" />
            <Input className="w-28" placeholder="Any" type="text" />
            <Input className="w-28" placeholder="Box18 feet" type="text" />
            <Input className="w-28" placeholder="Cable" type="text" />
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Operating states (34)</h2>
          <div className="flex flex-wrap gap-2">
            <Input className="w-40" placeholder="Arunachal Pradesh" type="text" />
            <Input className="w-40" placeholder="Maharashtra" type="text" />
            <Input className="w-40" placeholder="Telangana" type="text" />
            <Input className="w-40" placeholder="Haryana" type="text" />
            <Input className="w-40" placeholder="Himachal Pradesh" type="text" />
            <Input className="w-28" placeholder="+29 More" type="text" />
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Operating routes (5)</h2>
          <div className="flex flex-wrap gap-2">
            <Input className="w-44" placeholder="Manjeri > Bharuch" type="text" />
            <Input className="w-44" placeholder="Warangal > Kozhikode" type="text" />
            <Input className="w-44" placeholder="Kozhikode > Kumbala" type="text" />
            <Input className="w-28" placeholder="+2 More" type="text" />
          </div>
        </div>
        <Button className="w-full">Save Profile</Button>
      </form>
    </div>
  )
}
