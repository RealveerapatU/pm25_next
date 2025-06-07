"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Wifi, Shield } from "lucide-react";
let plan = "";

const checkPlan = async (username: string | null) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_PM25_API_URL}/api/user`,
      {
        email: username,
      }
    );
    if (response.status === 200) {
      const data = response.data;
      const user = data.user[0][0];
      if (data.user[0].length === 0) {
        alert("401 unauthorized");
        window.location.href = `/login`;
        return;
      }
      plan = user.email;
      // console.log(user.email);
    }
  } catch (error) {
    console.error("Error checking plan:", error);
  }
};

export default function PaymentPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState("Free");
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const validateUser = setInterval(async () => {
      const username = localStorage.getItem("pm25username");
      setEmail(username!);
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_PM25_API_URL}/api/user`,
          { email: username }
        );
        if (response.status === 200) {
          const data = response.data;
          if (data.user[0].length === 0) {
            localStorage.removeItem("pm25username");
            localStorage.removeItem("pm25username");
            setTimeout(() => {
              //alert("401 unauthorized");
              window.location.href = `/login`;
            }, 100);
            return;
          }
        }
      } catch (error) {
        console.log(error);
      }
    }, 2500);

    // if (!username) {
    //   alert("Please login first");
    //   router.push("/login");
    //   return;
    // }
    const username = localStorage.getItem("pm25username");
    setEmail(username!);
    checkPlan(username);
  }, []);

  const plans = {
    Free: {
      name: "Free",
      price: "$0",
      duration: "Free plan with limited access",
    },
    Premium: {
      name: "Premium",
      price: "$3",
      duration: "Premium plan includes everything. Provide unlimited access",
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      console.log("Selected Plan:", selectedPlan);
      // await purchaseWifiAccess({ plan: selectedPlan, email });
      // router.push("/payment/success");
    } catch (error) {
      console.error("Payment failed:", error);
    } finally {
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
