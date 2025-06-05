import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Wifi } from "lucide-react"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <CardTitle className="text-2xl">Payment Successful!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-600">Your WiFi access has been activated. You can now browse the internet.</p>

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Wifi className="h-5 w-5 text-blue-600" />
              <span className="font-medium">Connection Details</span>
            </div>
            <div className="text-sm text-gray-600">
              <p>Network: WiFiConnect</p>
              <p>
                Access Code: <span className="font-mono bg-white px-2 py-0.5 rounded border">WC-123456</span>
              </p>
              <p>Valid until: {new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleString()}</p>
            </div>
          </div>

          <p className="text-sm text-gray-500">A receipt has been sent to your email address.</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/" passHref>
            <Button variant="outline">Return to Homepage</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
