
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/src/components/ui/card"
import { Label } from "@/src/components/ui/label"
import { Input } from "@/src/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/src/components/ui/select"
import { Button } from "@/src/components/ui/button"

export function AddALoad() {
  
  return (
    <Card className="max-w-4xl mx-auto my-8 p-6">
      <CardHeader>
        <CardTitle>Add Load Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid grid-cols-1 gap-6">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="loadId">Load ID</Label>
            <Input id="loadId" placeholder="e.g., #LD432419" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="vehicleType">Vehicle Type</Label>
            <Input id="vehicleType" placeholder="e.g., Open Truck" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="boxSize">Box Size</Label>
            <Input id="boxSize" placeholder="e.g., Box18 feet" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="loadWeight">Load Weight</Label>
            <Input id="loadWeight" placeholder="e.g., 5 Tonnes" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="origin">Origin</Label>
            <Input id="origin" placeholder="e.g., Nagpur (MH)" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="destination">Destination</Label>
            <Input id="destination" placeholder="e.g., Mongam (KL)" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="status">Status</Label>
            <Select>
              <SelectTrigger id="status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="expired">Expired</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline">Cancel</Button>
        <Button className="ml-4">Save Load</Button>
      </CardFooter>
    </Card>
  )
}
