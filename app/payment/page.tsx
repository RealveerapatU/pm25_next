"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Wifi, Shield } from "lucide-react";
import { purchaseWifiAccess } from "@/lib/actions";

export default function PaymentPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState("hourly");
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const plans = {
    Free: {
      name: "Free",
      price: "$0",
      duration: "Free plan with limited access",
    },

    Premium: {
      name: "Premium",
      price: "$3",
      duration: "Premium plan includes everything.Provide unlimited access",
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      console.log("Your plan:" + selectedPlan);
      // await purchaseWifiAccess({
      //   plan: selectedPlan,
      //   email,
      // });
      // router.push("/payment/success");
    } catch (error) {
      console.error("Payment failed:", error);
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Wifi className="h-6 w-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-blue-600">AQMConnect</h1>
          </div>
          <p className="text-gray-600">
            Complete your purchase to access AQM Database
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Select WiFi Plan</CardTitle>
            <CardDescription>
              Choose the plan that works best for you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <RadioGroup
                  value={selectedPlan}
                  onValueChange={setSelectedPlan}
                  className="grid grid-cols-1 gap-4"
                >
                  {Object.entries(plans).map(([id, plan]) => (
                    <div key={id} className="flex items-center">
                      <RadioGroupItem
                        value={id}
                        id={id}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={id}
                        className="flex justify-between w-full p-4 border rounded-md cursor-pointer peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50"
                      >
                        <div>
                          <div className="font-medium">{plan.name}</div>
                          <div className="text-sm text-gray-500">
                            {plan.duration}
                          </div>
                        </div>
                        <div className="text-lg font-bold text-blue-600">
                          {plan.price}
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                {/* <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <p className="text-xs text-gray-500">
                    We'll send your receipt and access instructions to this
                    email
                  </p>
                </div> */}
              </div>

              <div className="mt-6">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Proceed to Payment"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-6">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Shield className="h-4 w-4" />
              Secure payment processing
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
