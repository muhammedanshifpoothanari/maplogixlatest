
import { AvatarImage, AvatarFallback, Avatar } from "@/src/components/ui/avatar"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"

export function DirectoryCard() {
  return (
    <Card key="1" className="max-w-md mx-auto bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
      <CardHeader className="flex flex-col items-center p-4 bg-blue-100">
        <Avatar className="mb-3">
          <AvatarImage alt="Profile picture" src="/placeholder.svg?height=100&width=100" />
          <AvatarFallback>GR</AvatarFallback>
        </Avatar>
        <CardTitle className="text-lg font-semibold">Guru Krupa Roadlines</CardTitle>
        <CardDescription className="mb-1 text-sm text-gray-500">Fleet Owner</CardDescription>
        <CardDescription className="text-sm text-gray-500">Siddhpur, Gujarat</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center p-4 bg-blue-100">
        <div className="flex items-center space-x-4">
          <UsersIcon className="text-gray-400" />
          <span className="text-sm text-gray-600">2 Connections</span>
          <span className="text-sm text-gray-400">•</span>
          <CalendarIcon className="text-gray-400" />
          <span className="text-sm text-gray-600">2+ Years</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4 border-t border-gray-200">
        <Button className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
          <PhoneIcon className="mr-2 text-blue-700" />
          Call Now{"\n          "}
        </Button>
        <Link
          className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 hover:text-blue-800"
          href="#"
        >
          View Profile
          <ArrowRightIcon className="ml-2 text-blue-700" />
        </Link>
      </CardFooter>
    </Card>
  )
}


function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function CalendarIcon(props: any) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function PhoneIcon(props: any) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
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
