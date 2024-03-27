/**
 * params:{key,CardTitle,CardDescription,ButtonTitle,srcOne,srcTwo}
 * @see https://v0.dev/t/0g3Kxm7aD8z
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import Image from "next/image"

export function FeatureCard() {
  return (
    <Card key="1" className="max-w-md">
      <CardHeader>
        <CardTitle>Find loads near me</CardTitle>
        <CardDescription>Choose from 10,000+ loads in preferred routes</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between items-center">
        <div className="relative justify-between">
          <Button className="mt-4" variant='link'>
            Search Loads
            <ArrowRightIcon className="ml-2" />
          </Button>
          <Image 
                             src={'/dot.svg'} 
                             alt={'Single Arrow'}
                             width={100}
                             height={50} />
        </div>
        <Image
          alt="Loads illustration"
          className="h-[150px] w-[150px] ml-auto"
          height="150"
          src="/goods_icon.webp"
          style={{
            aspectRatio: "150/150",
            objectFit: "cover",
          }}
          width="150"
        />
      </CardContent>
    </Card>
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
