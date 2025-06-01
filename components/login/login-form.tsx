import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import axios from "axios";

require("dotenv").config();

export async function login(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const username = data.get("email") as string;
  const inpassword = data.get("password") as string;

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_PM25_API_URL}/api/user`,
    { email: username }
  );

  if (response.status === 200) {
    const responseData = await response.data.user;
    const userRecord = responseData[0][0];
    const savedPassword = userRecord.passwords;

    if (inpassword === savedPassword) {
      localStorage.setItem("pm25username", username);
      alert("Access Granted");
      return;
    }
    alert("Access Denied");
    return;
  }
}

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "flex items-center justify-center  min-h-screen  px-8",
        className
      )}
      {...props}
    >
      <Card className="w-auto max-w-md shadow-lg border border-gray-200">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Login</CardTitle>
          <CardDescription className="text-center text-sm text-gray-600">
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={login} className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="/" className="text-sm text-blue-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              <Input name="password" id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Don&apos;t have an account?{" "}
              <a href="/register" className="underline text-blue-600">
                Sign up
              </a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
