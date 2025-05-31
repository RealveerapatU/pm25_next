import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, CheckCircle, Zap, Shield, Server } from "lucide-react";

export default function Page() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth ">
      <section className="min-h-screen snap-center flex flex-col justify-center items-center bg-black px-4 md:px-6 text-center text-white">
        <Badge variant="secondary" className="mb-4">
          🚀 Get Started Today
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
          Get updated with Realtime Air Quality
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl mb-6 text-white">
          Join us, real-time air quality data is waiting for you.
        </p>
        <div className="flex flex-col md:flex-row gap-4 ">
          <a href="/login">
            <Button size="lg">Get Started Free</Button>
          </a>
          <a href="#features">
            <Button size="lg">Learn more</Button>
          </a>
        </div>
      </section>

      <section
        id="features"
        className="min-h-screen snap-center py-16 px-4 md:px-6 bg-white"
      >
        <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-3 lg:gap-12">
          <Card>
            <CardHeader>
              <Zap className="h-10 w-10 text-primary" />
              <CardTitle>Fast Realtime Data</CardTitle>
              <CardDescription>
                Get update with real time air quality data from sensors.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Real time database
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Accurate
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Low latency
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Server className="h-10 w-10 text-primary" />
              <CardTitle>Scalable Infrastructure</CardTitle>
              <CardDescription>
                Our platform is built on a scalable infrastructure to handle
                large amounts of data and users.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Fast data processing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Fast data storage
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Fast network system
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Backup
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Low latency
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-primary" />
              <CardTitle>Secure & Reliable</CardTitle>
              <CardDescription>
                Your data is safe with us. We prioritize security and
                reliability in our platform.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  End-to-end encryption
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
